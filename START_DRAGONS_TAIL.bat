@echo off
setlocal
title Dragon's Tail - Evidence Engine v0.9.10

cd /d "%~dp0"

echo.
echo ======================================================
echo   DRAGON'S TAIL / EVIDENCE ENGINE v0.9.10
echo ======================================================
echo.
echo Folder:
echo   %CD%
echo.

if not exist "public\index.html" (
  echo ERROR: public\index.html was not found.
  echo.
  echo This batch file must sit in the main Dragon's Tail folder.
  echo You should see:
  echo   START_DRAGONS_TAIL.bat
  echo   public
  echo   engine
  echo   README.md
  echo.
  pause
  exit /b 1
)

echo Trying to launch a local server at:
echo   http://localhost:8787
echo.
echo IMPORTANT:
echo   Leave this black window open while using the app.
echo.

where py >nul 2>nul
if not errorlevel 1 (
  echo Python launcher detected.
  echo Opening browser...
  start "" "http://localhost:8787"
  cd /d "%~dp0public"
  py -3 -m http.server 8787
  echo.
  echo Python server stopped.
  echo If the browser says refused to connect, send a screenshot of this window.
  pause
  exit /b 0
)

where python >nul 2>nul
if not errorlevel 1 (
  echo Python detected.
  echo Opening browser...
  start "" "http://localhost:8787"
  cd /d "%~dp0public"
  python -m http.server 8787
  echo.
  echo Python server stopped.
  echo If the browser says refused to connect, send a screenshot of this window.
  pause
  exit /b 0
)

echo Python was not found.
echo No problem. Opening the static app directly.
echo This will still let you see and use the first-pass prototype.
echo.
start "" "%~dp0public\index.html"
echo.
echo If the app opened in your browser, you are good.
echo If nothing opened, manually open:
echo   %~dp0public\index.html
echo.
pause
