@echo off
setlocal
title Dragon's Tail - Debug

cd /d "%~dp0"

echo DRAGON'S TAIL DEBUG
echo ===================
echo Folder:
echo %CD%
echo.
echo Files:
dir
echo.
echo Public folder:
dir public
echo.
echo Python launcher:
where py
echo.
echo Python:
where python
echo.
echo Node:
where node
echo.
echo Ports using 8787:
netstat -ano | findstr ":8787"
echo.
pause
