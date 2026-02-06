@echo off
:MENU
cls
echo ============================================
echo Projeto QA - Menu Local (sem Container)
echo ============================================
echo.
echo 1 - Rodar Testes (pytest)
echo 2 - Rodar Backend Local (python app.py)
echo 3 - Rodar Frontend Local (npm start)
echo 4 - Rodar Tudo Local (Testes + Backend + Frontend)
echo 0 - Sair
echo.
set /p opcao=Escolha uma opcao:

if "%opcao%"=="1" goto TESTES
if "%opcao%"=="2" goto BACKEND
if "%opcao%"=="3" goto FRONTEND
if "%opcao%"=="4" goto TUDO
if "%opcao%"=="0" exit
goto MENU

:TESTES
call .\venv\Scripts\activate.bat
python -m pytest -v
pause
goto MENU

:BACKEND
call .\venv\Scripts\activate.bat
start cmd /k "cd /d %~dp0backend && python app.py"
goto MENU

:FRONTEND
start cmd /k "cd /d %~dp0frontend && npm start"
goto MENU

:TUDO
call .\venv\Scripts\activate.bat
python -m pytest -v
start cmd /k "cd /d %~dp0backend && python app.py"
start cmd /k "cd /d %~dp0frontend && npm start"
goto MENU
