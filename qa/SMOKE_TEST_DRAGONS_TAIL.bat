@echo off
setlocal EnableExtensions
title Dragon's Tail - Smoke Test Stays Open

cd /d "%~dp0\.."

echo.
echo ======================================================
echo   DRAGON'S TAIL / QA SMOKE TEST
echo ======================================================
echo.
echo Project folder:
echo   %CD%
echo.
echo This window will stay open.
echo A report will also open in Notepad when the test finishes.
echo.

if not exist "qa\smoke_test.py" (
  color 0C
  echo ERROR: qa\smoke_test.py was not found.
  echo This batch file must stay inside the qa folder.
  echo.
  echo Press any key to close...
  pause >nul
  exit /b 1
)

set "PYTHON_CMD="

where py >nul 2>nul
if not errorlevel 1 (
  set "PYTHON_CMD=py -3"
)

if "%PYTHON_CMD%"=="" (
  where python >nul 2>nul
  if not errorlevel 1 (
    set "PYTHON_CMD=python"
  )
)

if "%PYTHON_CMD%"=="" (
  color 0C
  echo ERROR: Python was not found, so the automated smoke test cannot run.
  echo.
  echo Manual check:
  echo   public\index.html
  echo   public\styles.css
  echo   public\app.js
  echo   public\assets\dragon-tail-bg.png
  echo   public\assets\favicon.svg
  echo.
  echo Press any key to close...
  pause >nul
  exit /b 1
)

echo Running:
echo   %PYTHON_CMD% qa\smoke_test.py
echo.

%PYTHON_CMD% qa\smoke_test.py
set "TEST_EXIT=%ERRORLEVEL%"

echo.
echo ======================================================
echo Smoke report saved to:
echo   qa\last_smoke_report.txt
echo ======================================================
echo.

if exist "qa\last_smoke_report.txt" (
  echo Opening report in Notepad...
  start "" notepad "qa\last_smoke_report.txt"
  echo.
)

if "%TEST_EXIT%"=="0" (
  color 0A
  echo RESULT: GREEN
  echo The structure passed. You can continue building or inspect visually.
) else (
  color 0C
  echo RESULT: RED
  echo Send qa\last_smoke_report.txt to ChatGPT before applying another patch.
)

echo.
echo Press any key to close this smoke-test window...
pause >nul
exit /b %TEST_EXIT%
