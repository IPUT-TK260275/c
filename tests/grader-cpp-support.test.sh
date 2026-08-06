#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${repo_dir}"

bash -n grademe.sh
bash -n submit.sh

single_output="$(./grademe.sh 14.cpp/14.6.E1.cpp)"
grep -Fq '### YOUR SCORE: 100' <<<"${single_output}"

grade_output="$(./grademe.sh --all)"
grep -Fq 'Checking 154 problems locally.' <<<"${grade_output}"
grep -Fq 'full score    154/154' <<<"${grade_output}"

submit_check_output="$(./submit.sh --check-all)"
grep -Fq 'Checking 154 problems. Dry run: nothing will be submitted.' <<<"${submit_check_output}"
grep -Fq 'full score    154/154' <<<"${submit_check_output}"
