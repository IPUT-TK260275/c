#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="${HOME}/c"
TLS_DIR="${BASE_DIR}/.tls"
ACCESS_CHECK_URL="/toby/2026/c.draft/challenge/access-check.txt"
SUBMIT_URL="/toby/2026/c.draft/challenge/submit.cgi"

usage() {
    cat <<'EOF'
USAGE:
  ./submit_if_full_score.sh <PROBLEM_ID> <CODE_FILE_PATH>
  ./submit_if_full_score.sh --all

EXAMPLES:
  ./submit_if_full_score.sh 3.1.1.E1 03.first-step/3.1.1.E1.js
  ./submit_if_full_score.sh --all

This script runs local grading first. It submits only when the score is 100.
EOF
}

ensure_tls() {
    if ! [ -x "${TLS_DIR}/check.sh" ]; then
        echo "[ERROR] ${TLS_DIR}/check.sh does not exist or is not executable." >&2
        exit 1
    fi
}

ensure_login() {
    if [ -f "${TLS_DIR}/data/auth" ]; then
        if timeout 5s node "${TLS_DIR}/scripts/access-check.js" "${ACCESS_CHECK_URL}" >/dev/null 2>&1; then
            return
        fi
    fi

    echo "[INFO] Account login is required before submission."
    "${TLS_DIR}/scripts/set-account.sh" "${ACCESS_CHECK_URL}"
}

init_problem_if_needed() {
    local problem_id="$1"
    local init_script="${TLS_DIR}/scripts/problems/${problem_id}-init.sh"
    local work_dir="${TLS_DIR}/problems/${problem_id}"

    if ! [ -f "${init_script}" ]; then
        echo "[ERROR] No problem with ID '${problem_id}'." >&2
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

submit_if_full_score() {
    local problem_id="$1"
    local code_path="$2"
    local score_file="${TLS_DIR}/problems/${problem_id}/score.txt"
    local score

    if ! [ -f "${code_path}" ]; then
        echo "[ERROR] Code file does not exist: ${code_path}" >&2
        return 1
    fi

    echo "=== ${problem_id} ${code_path}"
    init_problem_if_needed "${problem_id}"
    grade_locally "${problem_id}" "${code_path}"

    score="$(cat "${score_file}")"
    if [ "${score}" != "100" ]; then
        echo "[SKIP] Score is ${score}, so this code was not submitted."
        return 1
    fi

    echo "[INFO] Score is 100. Submitting..."
    timeout 15s node "${TLS_DIR}/scripts/submit.js" "${problem_id}" "${SUBMIT_URL}"
    echo "[OK] Submitted ${problem_id}."
}

submit_all() {
    local failed=0
    local file
    local problem_id

    shopt -s nullglob
    for file in 03.first-step/[0-9]*.js 04.values-and-expressions/[0-9]*.js; do
        problem_id="$(basename "${file}" .js)"
        if ! submit_if_full_score "${problem_id}" "${file}"; then
            failed=1
        fi
        echo
    done
    shopt -u nullglob

    return "${failed}"
}

main() {
    ensure_tls

    if [ "$#" -eq 1 ] && [ "$1" = "--help" ]; then
        usage
        exit 0
    fi

    if [ "$#" -eq 1 ] && [ "$1" = "--all" ]; then
        ensure_login
        submit_all
        exit $?
    fi

    if [ "$#" -eq 2 ]; then
        ensure_login
        submit_if_full_score "$1" "$2"
        exit $?
    fi

    usage >&2
    exit 2
}

main "$@"
