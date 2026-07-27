# Chapter 14 C Port Design

## Goal

Port all 12 programs in `14.cpp` from C++ to C while preserving their input and output behavior.

## Scope

- Add `14.cpp/c/14.6.A1.c`.
- Add `14.cpp/c/14.6.E1.c` through `14.cpp/c/14.6.E11.c`.
- Add `14.cpp/c/test-samples.sh` to compile and test every C program.
- Do not modify the existing C++ sources or their build files.

## Program Structure

Each exercise remains a standalone program with its own `main` function. The programs use C11 and the standard C library only. No shared helper library is introduced because these exercises are intended to demonstrate basic C syntax independently.

Text input uses fixed-size character arrays. Line-oriented exercises use `fgets`; numeric exercises use `scanf`. Exercise E1 handles the newline between numeric and line input explicitly. Boolean results are printed with the string literals `true` and `false`. Exercise E2 uses `%g` so its default decimal formatting matches the existing C++ sample behavior.

## Behavior

For the same valid input, every C program must produce exactly the same output as its corresponding C++ program, including separators, spaces, punctuation, and line breaks. The port preserves the assumptions of the current exercises and does not add new validation or error messages for invalid input.

## Testing

Development follows a red-green cycle:

1. Add the C sample test script and run it while the C sources are absent to confirm failure.
2. Implement the 12 standalone C sources.
3. Compile each source using `gcc -std=c11 -Wall -Wextra -Werror`.
4. Run the same sample cases used by `14.cpp/test-samples.sh` and compare exact output.

The completed change is accepted when all 12 C programs compile without warnings and every sample output matches.
