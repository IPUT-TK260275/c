#!/usr/bin/env bash
set -euo pipefail

chapter_dir=$(cd "$(dirname "$0")" && pwd)
build_dir=$(mktemp -d)
trap 'rm -rf "$build_dir"' EXIT
requested=${1:-}

run_case() {
    local source=$1
    local input=$2
    local expected=$3

    if [[ -n "$requested" && "$requested" != "$source" ]]; then
        return 0
    fi

    local binary="$build_dir/${source%.c}"
    gcc -std=c11 -Wall -Wextra -Werror "$chapter_dir/$source" -o "$binary"
    actual=$(printf '%s' "$input" | "$binary")
    if [[ "$actual" != "$expected" ]]; then
        printf 'FAILED: %s\nExpected:\n%s\nActual:\n%s\n' "$source" "$expected" "$actual" >&2
        exit 1
    fi
}

run_case 14.6.E1.c $'Apples\n180\n4\nPeaches\n220\n5\n' $'---\nApples: 720 yen\nPeaches: 1100 yen\n===\nTotal: 1820 yen'
run_case 14.6.E2.c $'3.2\n-4.5\n5.1\n7.3\n-1.6\n' $'---\n1.9'
run_case 14.6.E3.c $'3456\n' $'---\n57\n36'
run_case 14.6.E4.c $'1\n2\n1\n' $'---\nfalse'
run_case 14.6.E5.c $'6\n3\n' $'---\nfalse'
run_case 14.6.E6.c $'abcdefg\n' $'---\nd'
run_case 14.6.E7.c $'9876543\n' $'---\n987-6543'
run_case 14.6.E8.c $'info@nopico.org\n' $'---\ntrue'
run_case 14.6.E9.c $'14\n' $'---\n1\n3\n5\n7\n9\n11\n13'
run_case 14.6.E10.c $'6\n' $'---\n1\n2\n6\n24\n120\n720'
run_case 14.6.E11.c $'5\n' $'---\n1\n2,2\n3,3,3\n4,4,4,4\n5,5,5,5,5'
run_case 14.6.A1.c $'4\n5\n4\n' $'---\n4 4 5'

printf 'All chapter 14 C sample cases passed.\n'
