# C++ Grading and Submission Design

## Goal

Make `grademe.sh` and `submit.sh` recognize the twelve chapter 14 C++ answers in `14.cpp/*.cpp`, grade them through the existing TLS C++ check scripts, and allow those answers to be submitted through the existing full-score gate.

## Scope

- Add `.cpp` support to path-based problem-ID inference in `grademe.sh`.
- Add `.cpp` files to automatic problem discovery in both scripts.
- Keep `.trace.txt` and `.js` behavior unchanged.
- Do not discover `14.cpp/c/*.c`; C answers are outside this change.
- Update usage text and examples so supported inputs are accurate.
- Submit only the twelve `14.6.*.cpp` answers after verification.
- Commit directly to `master` and push to `origin/master`, as requested.

## Approach

Use the existing extension-specific TLS check scripts. The generic scripts already initialize a problem and prefer `${problem_id}-check.sh` when present, so C++ compilation and execution do not need to be duplicated in `grademe.sh` or `submit.sh`.

Add `.cpp` as a third supported filename form in `grademe.sh`'s `infer_problem_id_from_path`. Add a `.cpp` discovery pass to `discover_problem_files` in both scripts, using the existing `seen` map and init-script existence check. `submit.sh` keeps its existing explicit `<PROBLEM_ID> <CODE_FILE_PATH>` interface. This is intentionally a small mirrored change in the two standalone scripts; extracting shared code would enlarge the change without improving the requested behavior.

## Error Handling

- Unsupported extensions continue to fail with an error that lists all accepted extensions.
- Files whose inferred problem ID has no TLS init script continue to fail before grading.
- Local scores below 100 continue to block submission.
- Existing submission retry and `.submitted-full-score` behavior remain unchanged.

## Testing and Verification

1. Record the regression before editing: an explicit `.cpp` invocation is rejected, and `--all` finds 142 rather than 154 answers.
2. After editing, verify both scripts with `bash -n`.
3. Verify explicit C++ grading with `./grademe.sh 14.cpp/14.6.E1.cpp`.
4. Verify automatic discovery with `./grademe.sh --all` and `./submit.sh --check-all`; both must report 154 full-score answers.
5. Submit only the twelve chapter 14 `.cpp` files, one problem at a time through `submit.sh`, preserving its full-score gate and submission cache.
6. Inspect the final diff, commit only the intended files, and push `master` to `origin/master`.
