@echo off
:MENU
cls
echo ============================================
echo BugHunter - Menu Local (Sem Docker)
echo ============================================
echo.
echo 1 - Rodar Testes (pytest)
echo 2 - Rodar Backend Local (porta 5000)
echo 3 - Rodar Frontend Local (porta 3000)
echo 4 - Rodar Tudo Local
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
if not exist venv (
    echo Ambiente virtual nao encontrado!
    echo Crie com: python -m venv venv
    pause
    goto MENU
)
call .\venv\Scripts\activate.bat
python -m pytest -v
pause
goto MENU

:BACKEND
if not exist venv (
    echo Ambiente virtual nao encontrado!
    pause
    goto MENU
)
call .\venv\Scripts\activate.bat
start cmd /k "cd /d %~dp0backend && python app.py"
goto MENU

:FRONTEND
start cmd /k "cd /d %~dp0frontend && set PORT=3000 && npm start"
goto MENU

:TUDO
if not exist venv (
    echo Ambiente virtual nao encontrado!
    pause
    goto MENU
)
call .\venv\Scripts\activate.bat
start cmd /k "cd /d %~dp0backend && python app.py"
start cmd /k "cd /d %~dp0frontend && set PORT=3000 && npm start"
timeout /t 3 > nul
python -m pytest -v
goto MENU
