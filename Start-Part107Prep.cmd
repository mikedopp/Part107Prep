@echo off
title Part 107 Prep
cd /d "%~dp0"
start "" http://localhost:8107
python -m http.server 8107
