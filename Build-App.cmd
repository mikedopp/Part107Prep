@echo off
setlocal
rem Part 107 Prep v1.5 desktop build: restore, build, publish, verify.
rem Requires the .NET 8 SDK. Runtime is self-contained; Edge WebView2 remains required.
set "APP=%~dp0app"
set "PUBLISH=%APP%\publish\v1.5\win-x64"
cd /d "%APP%"

where dotnet >nul 2>nul
if errorlevel 1 (
  echo Missing build dependency: .NET 8 SDK was not found on PATH.
  goto :fail
)
echo Builder: dotnet
dotnet --version

echo [1/4] Restoring dependencies...
dotnet restore Part107Prep.App.csproj -r win-x64
if errorlevel 1 goto :fail

echo [2/4] Building Release...
dotnet build Part107Prep.App.csproj -c Release -r win-x64 --no-restore
if errorlevel 1 goto :fail

echo [3/4] Publishing self-contained win-x64 app...
dotnet publish Part107Prep.App.csproj -c Release -r win-x64 --no-restore -o "%PUBLISH%"
if errorlevel 1 goto :fail

echo [4/4] Verifying publish output...
if not exist "%PUBLISH%\Part107Prep.exe" goto :fail
for %%F in ("%PUBLISH%\Part107Prep.exe") do if %%~zF LSS 100000000 goto :fail
for /f %%C in ('dir /b /a-d "%PUBLISH%" ^| find /c /v ""') do if not "%%C"=="1" goto :fail

echo.
echo Build complete: %PUBLISH%\Part107Prep.exe
echo Delivery: one self-contained executable with embedded offline content.
echo Runtime dependency: Microsoft Edge WebView2 (checked and reported inside the app).
exit /b 0

:fail
echo.
echo BUILD FAILED
exit /b 1
