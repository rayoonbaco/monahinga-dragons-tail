@echo off
setlocal
cd /d "%~dp0"
if exist "qa\last_smoke_report.txt" (
  start "" notepad "qa\last_smoke_report.txt"
) else (
  echo No smoke report found yet.
  echo Run SMOKE_TEST_DRAGONS_TAIL.bat first.
  pause
)
