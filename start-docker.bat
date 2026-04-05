@echo off
:MENU
cls
echo ============================================
echo BugHunter - Menu Docker
echo ============================================
echo.
echo 1 - Subir Tudo (docker compose up --build)
echo 2 - Subir Tudo em Background
echo 3 - Parar Tudo
echo 4 - Rebuild Completo (sem cache)
echo 0 - Sair
echo.
set /p opcao=Escolha uma opcao:

if "%opcao%"=="1" goto UP
if "%opcao%"=="2" goto UP_DETACHED
if "%opcao%"=="3" goto DOWN
if "%opcao%"=="4" goto REBUILD
if "%opcao%"=="0" exit
goto MENU

:UP
docker compose up --build
pause
goto MENU

:UP_DETACHED
docker compose up -d --build
echo Containers rodando em background.
pause
goto MENU

:DOWN
docker compose down
echo Containers parados.
pause
goto MENU

:REBUILD
docker compose down
docker compose build --no-cache
docker compose up
pause
goto MENU
