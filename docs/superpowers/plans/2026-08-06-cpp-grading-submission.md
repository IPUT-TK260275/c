# C++ Grading and Submission Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the generic grading and submission scripts recognize, grade, and submit the twelve chapter 14 C++ answers.

**Architecture:** Keep `grademe.sh` and `submit.sh` standalone and mirror the same small extension-handling change in both. Reuse the existing TLS `${problem_id}-check.sh` dispatch for compilation and judging instead of adding C++ execution logic to the generic scripts.

**Tech Stack:** Bash, existing TLS local judge, existing C++ problem check scripts, Git

## Global Constraints

- Discover `14.cpp/*.cpp` answers and do not discover `14.cpp/c/*.c` answers.
- Preserve `.trace.txt` and `.js` behavior.
- Local score must remain 100 before submission.
- Submit only the twelve chapter 14 C++ answers.
- Commit directly to `master` and push to `origin/master`.
- Do not add dependencies or refactor unrelated code.

---

### Task 1: Add C++ support to both generic scripts

**Files:**
- Create: `tests/grader-cpp-support.test.sh`
- Modify: `grademe.sh`
- Modify: `submit.sh`

**Interfaces:**
- Consumes: C++ answer paths named `<problem-id>.cpp` and existing `.tls/scripts/problems/<problem-id>-init.sh` / `-check.sh` files.
- Produces: `grademe.sh` path inference for `.cpp`, automatic `.cpp` discovery in both scripts, 154-answer local grading, and unchanged full-score submission gating.

- [ ] **Step 1: Write the failing CLI regression test**

Create `tests/grader-cpp-support.test.sh`:

```bash
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
```

- [ ] **Step 2: Run the test and verify the expected failure**

Run: `bash tests/grader-cpp-support.test.sh`

Expected: FAIL because `grademe.sh` rejects `14.cpp/14.6.E1.cpp` with the current “Expected a file ending in .js or .trace.txt.” message.

- [ ] **Step 3: Add `.cpp` inference and discovery to `grademe.sh`**

Update usage examples and supported-extension text. Add this branch to `infer_problem_id_from_path`:

```bash
*.cpp)
    problem_id="${file_name%.cpp}"
    ;;
```

Update the unsupported-extension message to name `.cpp`. Add a discovery pass equivalent to the `.js` pass, with `-name '*.cpp'` and `${file_name%.cpp}` while retaining the `seen` and init-script checks.

- [ ] **Step 4: Add `.cpp` discovery to `submit.sh`**

Mirror the usage and discovery changes from `grademe.sh`. Keep the existing explicit `<PROBLEM_ID> <CODE_FILE_PATH>` interface, and do not change `submit_problem`, retry handling, the full-score gate, or `.submitted-full-score` behavior.

- [ ] **Step 5: Run the regression test and verify it passes**

Run: `bash tests/grader-cpp-support.test.sh`

Expected: PASS with exit code 0; explicit C++ grading reports 100, and both all-answer checks report 154/154.

- [ ] **Step 6: Inspect and commit the implementation**

```bash
git diff --check
git diff -- grademe.sh submit.sh tests/grader-cpp-support.test.sh
git add grademe.sh submit.sh tests/grader-cpp-support.test.sh docs/superpowers/plans/2026-08-06-cpp-grading-submission.md
git commit -m "Support C++ grading and submission"
```

### Task 2: Submit chapter 14 and publish master

**Files:**
- Read: `14.cpp/14.6.A1.cpp`
- Read: `14.cpp/14.6.E1.cpp` through `14.cpp/14.6.E11.cpp`
- Update at runtime: `.submitted-full-score`

**Interfaces:**
- Consumes: the twelve locally full-score C++ answers and TLS authentication.
- Produces: twelve successful or already-recorded submissions and an updated `origin/master`.

- [ ] **Step 1: Submit exactly the twelve chapter 14 answers**

For every `14.cpp/14.6.*.cpp`, run:

```bash
./submit.sh "${problem_id}" "${source_path}"
```

Expected: each answer is locally graded at 100, then submitted or reported as already submitted with full score.

- [ ] **Step 2: Run fresh final verification**

```bash
bash tests/grader-cpp-support.test.sh
git status -sb
git log -2 --oneline
```

Expected: regression test exits 0, the intended commits are present on `master`, and no unintended tracked changes remain.

- [ ] **Step 3: Push directly to origin/master**

Run: `git push origin master`

Expected: the remote accepts both the design and implementation commits and reports `master -> master`.
