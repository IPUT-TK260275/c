@echo off
setlocal

cd /d "%~dp0"

where git >nul 2>nul
if errorlevel 1 (
    echo [err] git was not found. Install Git for Windows first.
    exit /b 1
)

echo [info] Fetching latest files from GitHub...
git fetch origin
if errorlevel 1 (
    echo [err] git fetch origin failed.
    exit /b 1
)

echo [info] Updating .tls, submit.sh, and grademe.sh from origin/master...
git restore --source origin/master --worktree -- .tls submit.sh grademe.sh
if errorlevel 1 (
    echo [warn] git restore failed. Trying git checkout fallback...
    git checkout origin/master -- .tls submit.sh grademe.sh
    if errorlevel 1 (
        echo [err] update failed.
        exit /b 1
    )
)

echo [ok] Updated .tls, submit.sh, and grademe.sh.
