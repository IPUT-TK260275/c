#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BASE_DIR="${SCRIPT_DIR}"
TLS_DIR="${BASE_DIR}/.tls"
ACCESS_CHECK_URL="/toby/2026/c.draft/challenge/access-check.txt"
SUBMIT_URL="/toby/2026/c.draft/challenge/submit.cgi"

if [ -n "${NO_COLOR:-}" ]; then
    USE_COLOR=0
elif [ -t 1 ] || [ -n "${FORCE_COLOR:-}" ]; then
    USE_COLOR=1
else
    USE_COLOR=0
fi

if [ "${USE_COLOR}" = "1" ]; then
    COLOR_RESET=$'\033[0m'
    COLOR_DIM=$'\033[2m'
    COLOR_RED=$'\033[31m'
    COLOR_GREEN=$'\033[32m'
    COLOR_YELLOW=$'\033[33m'
    COLOR_BLUE=$'\033[34m'
    COLOR_MAGENTA=$'\033[35m'
    COLOR_CYAN=$'\033[36m'
    COLOR_GRAY=$'\033[90m'
    COLOR_ORANGE=$'\033[38;5;208m'
    COLOR_PINK=$'\033[38;5;205m'
    COLOR_VIOLET=$'\033[38;5;141m'
    COLOR_BOLD=$'\033[1m'
else
    COLOR_RESET=""
    COLOR_DIM=""
    COLOR_RED=""
    COLOR_GREEN=""
    COLOR_YELLOW=""
    COLOR_BLUE=""
    COLOR_MAGENTA=""
    COLOR_CYAN=""
    COLOR_GRAY=""
    COLOR_ORANGE=""
    COLOR_PINK=""
    COLOR_VIOLET=""
    COLOR_BOLD=""
fi

SPINNER_PID=""
TEMP_DIR=""
CLEAN_TEMP=0
PROGRESS_WIDTH=34
MAX_JOBS="${JOBS:-}"

usage() {
    cat <<'EOF'
USAGE:
  ./submit.sh
  ./submit.sh <PROBLEM_ID> <CODE_FILE_PATH>
  ./submit.sh [--jobs N] --all
  ./submit.sh [--jobs N] --check-all

EXAMPLES:
  ./submit.sh
  ./submit.sh 4.1.A1 04.values-and-expressions/4.1.A1.js
  ./submit.sh --all
  ./submit.sh --jobs 8 --check-all
  JOBS=8 ./submit.sh --all

This script runs TLS local grading first.
It submits only when the score is 100.
It auto-detects local .js and .trace.txt answer files.
EOF
}

cleanup() {
    stop_spinner
    show_cursor
    if [ "${CLEAN_TEMP}" = "1" ] && [ -n "${TEMP_DIR}" ] && [ -d "${TEMP_DIR}" ]; then
        rm -rf "${TEMP_DIR}"
    fi
}
trap cleanup EXIT INT TERM

say() {
    printf '%s\n' "$*"
}

banner() {
    local mode="$1"

    say "${COLOR_CYAN}+------------------------------------------------------------+${COLOR_RESET}"
    say "${COLOR_CYAN}|${COLOR_RESET} ${COLOR_BOLD}${COLOR_PINK}TLS${COLOR_RESET}${COLOR_BOLD} Auto Submit${COLOR_RESET} ${COLOR_DIM}${mode}${COLOR_RESET}"
    say "${COLOR_CYAN}|${COLOR_RESET} ${COLOR_GRAY}local judge -> full score gate -> submit queue${COLOR_RESET}"
    say "${COLOR_CYAN}+------------------------------------------------------------+${COLOR_RESET}"
}

info() {
    say "${COLOR_BLUE}[info]${COLOR_RESET} $*"
}

success() {
    say "${COLOR_GREEN}[ ok ]${COLOR_RESET} $*"
}

warn() {
    say "${COLOR_YELLOW}[skip]${COLOR_RESET} $*"
}

error() {
    say "${COLOR_RED}[err ]${COLOR_RESET} $*" >&2
}

start_spinner() {
    local message="$1"

    if ! [ -t 1 ]; then
        say "${message}..."
        return
    fi

    (
        local frames=("[>    ]" "[=>   ]" "[==>  ]" "[===> ]" "[ ===>]" "[  ===]" "[   ==]" "[    =]")
        local index=0
        while true; do
            printf '\r\033[2K  %s%s%s %s' "${COLOR_MAGENTA}" "${frames[index++%8]}" "${COLOR_RESET}" "${message}"
            sleep 0.12
        done
    ) &
    SPINNER_PID=$!
}

stop_spinner() {
    if [ -n "${SPINNER_PID}" ]; then
        kill "${SPINNER_PID}" >/dev/null 2>&1 || true
        wait "${SPINNER_PID}" 2>/dev/null || true
        SPINNER_PID=""
        if [ -t 1 ]; then
            printf '\r%*s\r' 80 ''
        fi
    fi
}

hide_cursor() {
    if [ -t 1 ]; then
        printf '\033[?25l'
    fi
}

show_cursor() {
    if [ -t 1 ]; then
        printf '\033[?25h'
    fi
}

status_color() {
    case "$1" in
        ok) printf '%s' "${COLOR_GREEN}" ;;
        warn) printf '%s' "${COLOR_YELLOW}" ;;
        error) printf '%s' "${COLOR_RED}" ;;
        *) printf '%s' "${COLOR_CYAN}" ;;
    esac
}

status_badge() {
    case "$1" in
        ok) printf '%s[100]%s' "${COLOR_GREEN}" "${COLOR_RESET}" ;;
        submit) printf '%s[send]%s' "${COLOR_GREEN}" "${COLOR_RESET}" ;;
        warn) printf '%s[work]%s' "${COLOR_YELLOW}" "${COLOR_RESET}" ;;
        error) printf '%s[fail]%s' "${COLOR_RED}" "${COLOR_RESET}" ;;
        *) printf '%s[run ]%s' "${COLOR_CYAN}" "${COLOR_RESET}" ;;
    esac
}

progress_bar() {
    local current="$1"
    local total="$2"
    local state="$3"
    local label="$4"
    local filled=0
    local empty=0
    local percent=0
    local color
    local fill
    local rest

    if [ "${total}" -gt 0 ]; then
        filled=$((current * PROGRESS_WIDTH / total))
        percent=$((current * 100 / total))
    fi
    empty=$((PROGRESS_WIDTH - filled))
    color="$(status_color "${state}")"
    fill="$(printf '%*s' "${filled}" '' | tr ' ' '=')"
    rest="$(printf '%*s' "${empty}" '' | tr ' ' '.')"

    printf '  %s%-6s%s %s[%s%s%s%s]%s %3d%% %3d/%-3d %s\n' \
        "${COLOR_DIM}" \
        "$(status_badge "${state}")" \
        "${COLOR_RESET}" \
        "${COLOR_DIM}" \
        "${color}" \
        "${fill}" \
        "${COLOR_DIM}" \
        "${rest}" \
        "${COLOR_RESET}" \
        "${percent}" \
        "${current}" \
        "${total}" \
        "${label}"
}

live_meter() {
    local current="$1"
    local total="$2"
    local state="$3"
    local label="$4"
    local active="$5"
    local ok_count="$6"
    local failed_count="$7"
    local frame="$8"
    local filled=0
    local empty=0
    local percent=0
    local comet_pos
    local i
    local ch
    local bar=""
    local color
    local pulse

    if ! [ -t 1 ]; then
        return
    fi

    if [ "${total}" -gt 0 ]; then
        filled=$((current * PROGRESS_WIDTH / total))
        percent=$((current * 100 / total))
    fi
    empty=$((PROGRESS_WIDTH - filled))
    comet_pos=$(((frame / 2) % PROGRESS_WIDTH))
    color="$(status_color "${state}")"

    for ((i = 0; i < PROGRESS_WIDTH; i++)); do
        if [ "${i}" -lt "${filled}" ]; then
            ch="="
        elif [ "${i}" -eq "${comet_pos}" ] || [ "${i}" -eq $(((comet_pos + 1) % PROGRESS_WIDTH)) ]; then
            ch=">"
        else
            ch="."
        fi
        if [ "${i}" -lt "${filled}" ]; then
            bar+="${color}${ch}"
        elif [ "${ch}" = ">" ]; then
            bar+="${COLOR_ORANGE}${ch}"
        else
            bar+="${COLOR_GRAY}${ch}"
        fi
    done

    case $((frame % 6)) in
        0) pulse="calibrating" ;;
        1) pulse="checking" ;;
        2) pulse="judging" ;;
        3) pulse="scoring" ;;
        4) pulse="syncing" ;;
        *) pulse="polishing" ;;
    esac

    printf '\r\033[2K  %s %s[%s%s] %3d%% %3d/%-3d  %sactive:%2d%s  %sok:%2d%s  %swork:%2d%s  %s%s%s  %s' \
        "$(status_badge "${state}")" \
        "${COLOR_DIM}" \
        "${bar}" \
        "${COLOR_DIM}" \
        "${percent}" \
        "${current}" \
        "${total}" \
        "${COLOR_CYAN}" \
        "${active}" \
        "${COLOR_RESET}" \
        "${COLOR_GREEN}" \
        "${ok_count}" \
        "${COLOR_RESET}" \
        "${COLOR_YELLOW}" \
        "${failed_count}" \
        "${COLOR_RESET}" \
        "${COLOR_VIOLET}" \
        "${pulse}" \
        "${COLOR_RESET}" \
        "${label}"
}

finish_live_meter() {
    if [ -t 1 ]; then
        printf '\n'
    fi
}

report_progress() {
    local current="$1"
    local total="$2"
    local state="$3"
    local label="$4"
    local active="$5"
    local ok_count="$6"
    local failed_count="$7"
    local frame="$8"

    if [ -t 1 ]; then
        live_meter "${current}" "${total}" "${state}" "${label}" "${active}" "${ok_count}" "${failed_count}" "${frame}"
    else
        progress_bar "${current}" "${total}" "${state}" "${label}"
    fi
}

ensure_tls() {
    if ! [ -x "${TLS_DIR}/check.sh" ]; then
        error "${TLS_DIR}/check.sh does not exist or is not executable."
        exit 1
    fi
}

detect_jobs() {
    local detected

    detected=20
    printf '%s' "${detected}"
}

validate_jobs() {
    if [ -z "${MAX_JOBS}" ]; then
        MAX_JOBS="$(detect_jobs)"
    fi
    if ! [[ "${MAX_JOBS}" =~ ^[0-9]+$ ]] || [ "${MAX_JOBS}" -lt 1 ]; then
        error "--jobs must be a positive integer."
        exit 2
    fi
}

ensure_login() {
    if [ -f "${TLS_DIR}/data/auth" ]; then
        if timeout 5s node "${TLS_DIR}/scripts/access-check.js" "${ACCESS_CHECK_URL}" >/dev/null 2>&1; then
            return
        fi
    fi

    info "Account login is required before submission."
    "${TLS_DIR}/scripts/set-account.sh" "${ACCESS_CHECK_URL}"
}

init_problem_if_needed() {
    local problem_id="$1"
    local init_script="${TLS_DIR}/scripts/problems/${problem_id}-init.sh"
    local work_dir="${TLS_DIR}/problems/${problem_id}"

    if ! [ -f "${init_script}" ]; then
        error "No problem with ID '${problem_id}'."
        return 1
    fi

    if ! [ -d "${work_dir}" ] || [ "${init_script}" -nt "${work_dir}" ]; then
        "${init_script}" >/dev/null
    fi
}

grade_locally() {
    local problem_id="$1"
    local code_path="$2"
    local check_script="${TLS_DIR}/scripts/problems/${problem_id}-check.sh"
    local default_script="${TLS_DIR}/scripts/problems/check.default.sh"

    if [ -f "${check_script}" ]; then
        "${check_script}" "${code_path}"
    else
        "${default_script}" "${problem_id}" "${code_path}"
    fi
}

score_for() {
    local problem_id="$1"
    local score_file="${TLS_DIR}/problems/${problem_id}/score.txt"

    if [ -f "${score_file}" ]; then
        tr -d '[:space:]' < "${score_file}"
    else
        printf '?'
    fi
}

case_label() {
    case "$1" in
        1) printf 'AC' ;;
        0) printf 'WA' ;;
        C) printf 'CE' ;;
        R) printf 'RE' ;;
        *) printf '%s' "$1" ;;
    esac
}

failed_cases_for() {
    local problem_id="$1"
    local judge_dir="${TLS_DIR}/problems/${problem_id}/judge"
    local case_dir
    local case_id
    local result
    local labels=()

    if ! [ -d "${judge_dir}" ]; then
        printf '-'
        return
    fi

    while IFS= read -r case_dir; do
        case_id="$(basename "${case_dir}")"
        if ! [ -f "${case_dir}/result.txt" ]; then
            labels+=("#${case_id}:?")
            continue
        fi
        result="$(tr -d '[:space:]' < "${case_dir}/result.txt")"
        if [ "${result}" != "1" ]; then
            labels+=("#${case_id}:$(case_label "${result}")")
        fi
    done < <(find "${judge_dir}" -mindepth 1 -maxdepth 1 -type d | sort -V)

    if [ "${#labels[@]}" -eq 0 ]; then
        printf '-'
    else
        printf '%s' "${labels[*]}"
    fi
}

show_failure_detail() {
    local problem_id="$1"
    local code_path="$2"
    local score="$3"

    printf '  %s%s%s  score=%s  file=%s\n' "${COLOR_BOLD}" "${problem_id}" "${COLOR_RESET}" "${score}" "${code_path}"
    printf '    failed: %s\n' "$(failed_cases_for "${problem_id}")"
}

summary_box() {
    local total="$1"
    local ok_count="$2"
    local submitted_count="$3"
    local failed_count="$4"
    local do_submit="$5"
    local submit_failed_count="$6"

    say "${COLOR_CYAN}+---------------- Summary ------------------------+${COLOR_RESET}"
    printf '%s|%s full score    %s%3d/%-3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_GREEN}" "${ok_count}" "${total}" "${COLOR_RESET}"
    if [ "${do_submit}" = "1" ]; then
        printf '%s|%s submitted     %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_GREEN}" "${submitted_count}" "${COLOR_RESET}"
        if [ "${submit_failed_count}" -eq 0 ]; then
            printf '%s|%s send failed   %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_GREEN}" "${submit_failed_count}" "${COLOR_RESET}"
        else
            printf '%s|%s send failed   %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_RED}" "${submit_failed_count}" "${COLOR_RESET}"
        fi
    fi
    if [ "${failed_count}" -eq 0 ]; then
        printf '%s|%s needs work    %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_GREEN}" "${failed_count}" "${COLOR_RESET}"
    else
        printf '%s|%s needs work    %s%3d%s\n' "${COLOR_CYAN}" "${COLOR_RESET}" "${COLOR_YELLOW}" "${failed_count}" "${COLOR_RESET}"
    fi
    say "${COLOR_CYAN}+-------------------------------------------------+${COLOR_RESET}"
}

submit_problem() {
    local problem_id="$1"

    timeout 15s node "${TLS_DIR}/scripts/submit.js" "${problem_id}" "${SUBMIT_URL}"
}

grade_worker() {
    local problem_id="$1"
    local code_path="$2"
    local display_path="$3"
    local temp_dir="$4"
    local index="$5"
    local status=0
    local score
    local result_tmp="${temp_dir}/result.${index}.tmp"
    local result_file="${temp_dir}/result.${index}"

    TEMP_DIR="${temp_dir}"
    CLEAN_TEMP=0

    if ! run_one "${problem_id}" "${code_path}" 0 1 >/dev/null 2>&1; then
        status=1
    fi

    score="$(score_for "${problem_id}")"
    printf '%s\t%s\t%s\t%s\n' "${problem_id}" "${display_path}" "${score}" "${status}" > "${result_tmp}"
    mv "${result_tmp}" "${result_file}"
}

run_one() {
    local problem_id="$1"
    local code_path="$2"
    local do_submit="$3"
    local quiet="$4"
    local score
    local grade_log
    local submit_log

    if ! [ -f "${code_path}" ]; then
        error "Code file does not exist: ${code_path}"
        return 2
    fi

    init_problem_if_needed "${problem_id}"

    if [ "${quiet}" = "1" ]; then
        grade_log="${TEMP_DIR}/${problem_id}.grade.log"
        if ! grade_locally "${problem_id}" "${code_path}" >"${grade_log}" 2>&1; then
            score="$(score_for "${problem_id}")"
            warn "${problem_id} local grading failed. See ${grade_log}"
            return 1
        fi
    else
        say "${COLOR_BOLD}${problem_id}${COLOR_RESET} ${COLOR_DIM}${code_path}${COLOR_RESET}"
        grade_locally "${problem_id}" "${code_path}"
    fi

    score="$(score_for "${problem_id}")"
    if [ "${score}" != "100" ]; then
        if [ "${quiet}" != "1" ]; then
            warn "Score is ${score}; not submitted."
            show_failure_detail "${problem_id}" "${code_path}" "${score}"
        fi
        return 1
    fi

    if [ "${do_submit}" != "1" ]; then
        return 0
    fi

    if [ "${quiet}" = "1" ]; then
        submit_log="${TEMP_DIR}/${problem_id}.submit.log"
        if ! submit_problem "${problem_id}" >"${submit_log}" 2>&1; then
            warn "${problem_id} submission failed. See ${submit_log}"
            return 1
        fi
    else
        info "Score is 100. Submitting..."
        submit_problem "${problem_id}"
        success "Submitted ${problem_id}."
    fi
}

discover_problem_files() {
    local file
    local file_name
    local problem_id
    local init_script
    local -A seen=()

    while IFS= read -r file; do
        file_name="$(basename "${file}")"
        case "${file_name}" in
            *.trace.txt)
                problem_id="${file_name%.trace.txt}"
                ;;
            *.js)
                problem_id="${file_name%.js}"
                ;;
            *)
                continue
                ;;
        esac

        if [ -n "${seen[${problem_id}]:-}" ]; then
            continue
        fi
        init_script="${TLS_DIR}/scripts/problems/${problem_id}-init.sh"
        if [ -f "${init_script}" ]; then
            seen["${problem_id}"]=1
            printf '%s\t%s\n' "${problem_id}" "${file}"
        fi
    done < <(
        find "${BASE_DIR}" \
            -path "${BASE_DIR}/.git" -prune -o \
            -path "${TLS_DIR}" -prune -o \
            -path "${BASE_DIR}/.tls.0" -prune -o \
            -type f \( -name '*.js' -o -name '*.trace.txt' \) -print |
            sed "s#^${BASE_DIR}/##" |
            sort -V
    )
}

run_all() {
    local do_submit="$1"
    local entries=()
    local full_scores=()
    local entry
    local problem_id
    local code_path
    local total
    local completed=0
    local next=0
    local active=0
    local ok_count=0
    local submitted_count=0
    local submit_failed_count=0
    local failed_count=0
    local failures=()
    local submit_failures=()
    local score
    local status
    local pids=()
    local made_progress
    local index
    local pid
    local result_file
    local submit_log
    local frame=0
    local last_label="ready"
    local last_state="run"

    TEMP_DIR="$(mktemp -d)"
    CLEAN_TEMP=1

    while IFS= read -r entry; do
        entries+=("${entry}")
    done < <(discover_problem_files)

    total="${#entries[@]}"
    if [ "${total}" -eq 0 ]; then
        warn "No local problem files were found."
        return 1
    fi

    if [ "${do_submit}" = "1" ]; then
        banner "submit when score is 100"
    else
        banner "dry run"
    fi

    validate_jobs
    if [ "${do_submit}" = "1" ]; then
        info "Checking ${total} problems. Full-score answers will be submitted."
    else
        info "Checking ${total} problems. Dry run: nothing will be submitted."
    fi
    info "Parallel grading with ${MAX_JOBS} job(s). Use --jobs N or JOBS=N to tune it."
    hide_cursor
    report_progress 0 "${total}" run "ready" 0 0 0 "${frame}"

    while [ "${completed}" -lt "${total}" ]; do
        while [ "${active}" -lt "${MAX_JOBS}" ] && [ "${next}" -lt "${total}" ]; do
            entry="${entries[${next}]}"
            problem_id="${entry%%$'\t'*}"
            code_path="${entry#*$'\t'}"
            "${BASH_SOURCE[0]}" --grade-worker "${problem_id}" "${BASE_DIR}/${code_path}" "${code_path}" "${TEMP_DIR}" "${next}" &
            pids["${next}"]=$!
            next=$((next + 1))
            active=$((active + 1))
        done

        made_progress=0
        for index in "${!pids[@]}"; do
            pid="${pids[${index}]}"
            if [ -z "${pid}" ]; then
                continue
            fi

            result_file="${TEMP_DIR}/result.${index}"
            if ! [ -f "${result_file}" ]; then
                continue
            fi

            wait "${pid}" 2>/dev/null || true
            pids["${index}"]=""
            active=$((active - 1))
            completed=$((completed + 1))
            made_progress=1

            IFS=$'\t' read -r problem_id code_path score status < "${result_file}"
            if [ "${status}" = "0" ] && [ "${score}" = "100" ]; then
                full_scores+=("${problem_id}"$'\t'"${code_path}")
                ok_count=$((ok_count + 1))
                last_state="ok"
                last_label="${problem_id} score=100"
            else
                failed_count=$((failed_count + 1))
                failures+=("${problem_id}"$'\t'"${code_path}"$'\t'"${score}")
                last_state="warn"
                last_label="${problem_id} score=${score}"
            fi
            frame=$((frame + 1))
            report_progress "${completed}" "${total}" "${last_state}" "${last_label}" "${active}" "${ok_count}" "${failed_count}" "${frame}"
        done

        if [ "${made_progress}" -eq 0 ]; then
            frame=$((frame + 1))
            if [ -t 1 ]; then
                report_progress "${completed}" "${total}" "${last_state}" "${last_label}" "${active}" "${ok_count}" "${failed_count}" "${frame}"
            fi
            sleep 0.1
        fi
    done
    finish_live_meter

    if [ "${do_submit}" = "1" ] && [ "${#full_scores[@]}" -gt 0 ]; then
        say
        info "Submitting ${#full_scores[@]} full-score answer(s) one by one."
        completed=0
        total="${#full_scores[@]}"
        frame=0
        last_state="run"
        last_label="submit queue"
        report_progress 0 "${total}" run "submit queue" 1 0 0 "${frame}"

        for entry in "${full_scores[@]}"; do
            problem_id="${entry%%$'\t'*}"
            code_path="${entry#*$'\t'}"
            completed=$((completed + 1))

            start_spinner "submitting ${problem_id}"
            submit_log="${TEMP_DIR}/${problem_id}.submit.log"
            if submit_problem "${problem_id}" >"${submit_log}" 2>&1; then
                stop_spinner
                submitted_count=$((submitted_count + 1))
                frame=$((frame + 1))
                report_progress "${completed}" "${total}" submit "${problem_id} submitted" 1 "${submitted_count}" "${submit_failed_count}" "${frame}"
            else
                stop_spinner
                submit_failed_count=$((submit_failed_count + 1))
                submit_failures+=("${problem_id}"$'\t'"${code_path}"$'\t'"${submit_log}")
                frame=$((frame + 1))
                report_progress "${completed}" "${total}" error "${problem_id} submit failed" 1 "${submitted_count}" "${submit_failed_count}" "${frame}"
            fi
        done
        finish_live_meter
    fi

    say
    summary_box "${#entries[@]}" "${ok_count}" "${submitted_count}" "${failed_count}" "${do_submit}" "${submit_failed_count}"

    if [ "${#submit_failures[@]}" -gt 0 ]; then
        say
        say "${COLOR_BOLD}Submit Failed${COLOR_RESET}"
        for entry in "${submit_failures[@]}"; do
            problem_id="${entry%%$'\t'*}"
            entry="${entry#*$'\t'}"
            code_path="${entry%%$'\t'*}"
            submit_log="${entry#*$'\t'}"
            printf '  %s%s%s  file=%s  log=%s\n' "${COLOR_BOLD}" "${problem_id}" "${COLOR_RESET}" "${code_path}" "${submit_log}"
        done
    fi

    if [ "${#failures[@]}" -gt 0 ]; then
        say
        say "${COLOR_BOLD}Needs work${COLOR_RESET}"
        for entry in "${failures[@]}"; do
            problem_id="${entry%%$'\t'*}"
            entry="${entry#*$'\t'}"
            code_path="${entry%%$'\t'*}"
            score="${entry#*$'\t'}"
            show_failure_detail "${problem_id}" "${code_path}" "${score}"
        done
    fi

    if [ "${failed_count}" -eq 0 ]; then
        success "All checked problems are full score."
        if [ "${submit_failed_count}" -eq 0 ]; then
            return 0
        fi
    fi
    return 1
}

main() {
    ensure_tls

    if [ "$#" -eq 6 ] && [ "$1" = "--grade-worker" ]; then
        grade_worker "$2" "$3" "$4" "$5" "$6"
        exit 0
    fi

    local positional=()
    while [ "$#" -gt 0 ]; do
        case "$1" in
            -j|--jobs)
                if [ "$#" -lt 2 ]; then
                    error "$1 requires a value."
                    exit 2
                fi
                MAX_JOBS="$2"
                shift 2
                ;;
            *)
                positional+=("$1")
                shift
                ;;
        esac
    done
    set -- "${positional[@]}"

    if [ "$#" -eq 0 ]; then
        ensure_login
        run_all 1
        exit $?
    fi

    if [ "$#" -eq 1 ] && [ "$1" = "--help" ]; then
        usage
        exit 0
    fi

    if [ "$#" -eq 1 ] && [ "$1" = "--check-all" ]; then
        run_all 0
        exit $?
    fi

    if [ "$#" -eq 1 ] && [ "$1" = "--all" ]; then
        ensure_login
        run_all 1
        exit $?
    fi

    if [ "$#" -eq 2 ]; then
        ensure_login
        run_one "$1" "$2" 1 0
        exit $?
    fi

    usage >&2
    exit 2
}

main "$@"
