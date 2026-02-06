@echo off
:MENU
cls
echo ============================================
echo Projeto QA - Menu Docker
echo ============================================
echo.
echo 1 - Build Backend Docker
echo 2 - Rodar Backend em Container (porta 5000)
echo 3 - Parar Backend Container
echo 4 - Build Frontend Docker
echo 5 - Rodar Frontend em Container (porta 3000)
echo 6 - Parar Frontend Container
echo 7 - Rodar Tudo em Docker (Backend + Frontend)
echo 8 - Parar Tudo
echo 0 - Sair
echo.
set /p opcao=Escolha uma opcao:

if "%opcao%"=="1" goto BUILD_BACKEND
if "%opcao%"=="2" goto RUN_BACKEND
if "%opcao%"=="3" goto STOP_BACKEND
if "%opcao%"=="4" goto BUILD_FRONTEND
if "%opcao%"=="5" goto RUN_FRONTEND
if "%opcao%"=="6" goto STOP_FRONTEND
if "%opcao%"=="7" goto RUN_ALL
if "%opcao%"=="8" goto STOP_ALL
if "%opcao%"=="0" exit
goto MENU

:BUILD_BACKEND
echo Building backend image...
cd backend
docker build -t bughunter-backend .
cd ..
pause
goto MENU

:RUN_BACKEND
echo Running backend container on port 5000...
docker run -d -p 5000:5000 --name bughunter-api bughunter-backend
echo Backend running on http://localhost:5000
pause
goto MENU

:STOP_BACKEND
echo Stopping backend container...
docker stop bughunter-api
docker rm bughunter-api
pause
goto MENU

:BUILD_FRONTEND
echo Building frontend image...
cd frontend
docker build -t bughunter-frontend .
cd ..
pause
goto MENU

:RUN_FRONTEND
echo Running frontend container on port 3000...
docker run -d -p 3000:3000 --name bughunter-web bughunter-frontend
echo Frontend running on http://localhost:3000
pause
goto MENU

:STOP_FRONTEND
echo Stopping frontend container...
docker stop bughunter-web
docker rm bughunter-web
pause
goto MENU

:RUN_ALL
echo Building and running all containers...
cd backend
docker build -t bughunter-backend .
cd ..
docker run -d -p 5000:5000 --name bughunter-api bughunter-backend
echo Backend running on http://localhost:5000
echo All containers running. Press any key to return to menu.
pause
goto MENU

:STOP_ALL
echo Stopping all containers...
docker stop bughunter-api bughunter-web 2>nul
docker rm bughunter-api bughunter-web 2>nul
echo All containers stopped.
pause
goto MENU
