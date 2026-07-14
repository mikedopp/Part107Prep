@echo off
rem Downloads the FAA-CT-8080-2H Airman Knowledge Testing Supplement (~176 MB).
rem It exceeds GitHub's file-size limit, so it isn't checked into the repo.
cd /d "%~dp0"
echo Downloading FAA-CT-8080-2H testing supplement (about 176 MB)...
curl -L -o akts_supplement.pdf "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/supplements/sport_rec_private_akts.pdf"
echo Done: %~dp0akts_supplement.pdf
pause
