@echo off
rem Build the Part 107 Prep desktop app (WinForms + WebView2, .NET 8).
rem Requires the .NET 8 SDK. The web content is bundled into wwwroot automatically.
cd /d "%~dp0app"
dotnet build -c Release
if errorlevel 1 ( echo. & echo BUILD FAILED & pause & exit /b 1 )
echo.
echo ============================================================
echo  Built: %~dp0app\bin\Release\net8.0-windows\Part107Prep.exe
echo  Double-click that exe to run the app.
echo ============================================================
pause
