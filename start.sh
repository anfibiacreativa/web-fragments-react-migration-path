#!/bin/bash
# This script is used to start the application in a VM or Docker (in lieu of a Dockerfile) container.
# It assumes pm2 is installed in the system (as it is the case in Azure App Service),
# and it installs all other necessary dependencies before it builds the application.
# It also saves the pm2 process list for automatic startup on container restart.
# Usage: ./start.sh (In Azure App Service, add `bash start.sh` to the startup command).
# Ensure the script is executable!
# chmod +x start.sh
# You can also delete it entirely if you don't need it.
npm install -g pnpm
pnpm install
pnpm build
pm2 start
pm2 save