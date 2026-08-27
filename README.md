\# AI-IVI-System



AI-IVI-System is an AI-driven In-Vehicle Infotainment (IVI) system that allows users to control and navigate IVI screens using natural language commands.



The system uses React for the IVI interface, Node.js for backend communication, n8n for workflow automation, an AI Agent for understanding user commands, Telegram for user input, OpenRouter for the AI model, and Cloudflare Tunnel for HTTPS webhook communication.



\## Project Overview



The user sends a natural language command through Telegram.



The n8n workflow receives the message and sends it to an AI Agent. The AI Agent understands the user's request and generates the required IVI screen name.



The screen information is then sent through an HTTP Request to the Node.js server.



The Node.js server communicates with the React application, which opens the requested IVI screen.



\## System Architecture



User

↓

Telegram Bot

↓

Cloudflare Tunnel

↓

n8n Telegram Trigger

↓

AI Agent

↓

Screen Name

↓

HTTP Request

↓

Node.js Server

↓

React IVI Application

↓

Requested IVI Screen



\## Features



\- AI-based natural language screen navigation

\- Telegram-based IVI control

\- AI Agent integration

\- Multiple IVI screens

\- React + Vite frontend

\- Node.js backend

\- n8n workflow automation

\- OpenRouter AI model

\- Cloudflare Tunnel integration

\- Docker-based n8n support



\## IVI Screens



The project contains the following IVI screens:



\- Home

\- All Apps

\- Music

\- Media

\- Navigation

\- Climate

\- Phone

\- Radio

\- Bluetooth

\- Notifications

\- Profile

\- Settings

\- System Info

\- Vehicle



\## Requirements



Before running the project, install:



\- Node.js

\- npm

\- Git

\- Docker Desktop

\- n8n

\- Telegram

\- Telegram Bot

\- OpenRouter account and API key

\- Cloudflare Tunnel (cloudflared)



\# Installation and Setup



\## 1. Clone the Repository



Run:



&#x20;   git clone https://github.com/coderrakshitha/AI-IVI-System.git



Then:



&#x20;   cd AI-IVI-System



\## 2. Install React Dependencies



From the project root:



&#x20;   npm install



\## 3. Install Node.js Server Dependencies



Go to the server directory:



&#x20;   cd server



Install dependencies:



&#x20;   npm install



\## 4. Start the Node.js Server



From the server directory:



&#x20;   npm start



The Node.js server runs on:



&#x20;   http://localhost:3000



Keep this terminal running.



\## 5. Start the React Application



Open a new terminal.



Go to the project root:



&#x20;   cd AI-IVI-System



Start React:



&#x20;   npm run dev



The React application normally runs on:



&#x20;   http://localhost:5173



Open this address in your browser.



\# n8n Setup



\## 6. Start n8n



The project uses n8n for workflow automation.



The local n8n instance used during development runs on:



&#x20;   http://localhost:5679



Open n8n in your browser.



\## 7. Import the n8n Workflow



The n8n workflow is included in:



&#x20;   n8n/IVI-System.json



Import this JSON file into n8n.



The workflow contains:



\- Telegram Trigger

\- AI Agent

\- OpenRouter Chat Model

\- Code node

\- HTTP Request



\# Telegram Setup



\## 8. Configure Telegram



Create a Telegram Bot using BotFather.



After creating the bot, configure the Telegram credential in n8n.



Each person running the project should use their own Telegram bot and credentials.



Do not upload the Telegram Bot Token to GitHub.



\# OpenRouter Setup



\## 9. Configure OpenRouter



The n8n workflow uses an OpenRouter Chat Model.



Create an OpenRouter API key and configure it in the OpenRouter credential inside n8n.



Each person running the project should use their own OpenRouter API key.



Do not upload the OpenRouter API key to GitHub.



\# Node.js and n8n Communication



\## 10. HTTP Request



The n8n HTTP Request node sends the generated screen information to the Node.js server.



When n8n is running inside Docker, the endpoint is:



&#x20;   http://host.docker.internal:3000/ivi-screen



Example request:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



The Node.js server receives the screen information and communicates it to the React application.



\# Cloudflare Tunnel



\## 11. Start Cloudflare Tunnel



Telegram requires an HTTPS webhook URL.



Start Cloudflare Quick Tunnel with:



&#x20;   cloudflared tunnel --url http://localhost:5679



Cloudflare will generate an HTTPS URL similar to:



&#x20;   https://example-name.trycloudflare.com



The generated URL can change when the Quick Tunnel is restarted.



Each person running the project should generate their own Cloudflare URL.



\# n8n Webhook



\## 12. Configure the Webhook



Use the current Cloudflare HTTPS URL for the n8n public webhook configuration.



Example:



&#x20;   https://example-name.trycloudflare.com/



The exact URL will be different for each user.



After configuring the webhook, activate the n8n workflow.



\# Complete Execution Flow



Telegram User

↓

Telegram Bot

↓

Cloudflare HTTPS Tunnel

↓

n8n Telegram Trigger

↓

AI Agent

↓

Screen Name

↓

HTTP Request

↓

Node.js Server

↓

React Application

↓

IVI Screen



\# Example



The user sends:



&#x20;   Open music



The AI Agent processes the command and generates:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



The HTTP Request sends the screen information to:



&#x20;   http://host.docker.internal:3000/ivi-screen



The Node.js server receives the request.



The React application opens the Music screen.



\# Example Natural Language Commands



&#x20;   Open music



&#x20;   I want to listen to music



&#x20;   Show me the music screen



&#x20;   Take me to navigation



&#x20;   Open climate



&#x20;   Go to settings



&#x20;   Open phone



The AI Agent understands the user's natural language and identifies the appropriate IVI screen.



\# Running All Components



\## Node.js



&#x20;   cd AI-IVI-System/server

&#x20;   npm install

&#x20;   npm start



Node.js:



&#x20;   http://localhost:3000



\## React



Open another terminal:



&#x20;   cd AI-IVI-System

&#x20;   npm install

&#x20;   npm run dev



React:



&#x20;   http://localhost:5173



\## Cloudflare



Open another terminal:



&#x20;   cloudflared tunnel --url http://localhost:5679



\## n8n



Start the n8n Docker container and open:



&#x20;   http://localhost:5679



Import:



&#x20;   n8n/IVI-System.json



Configure the Telegram and OpenRouter credentials.



\# Security



Never commit the following information to GitHub:



\- Telegram Bot Token

\- OpenRouter API Key

\- Passwords

\- API secrets

\- Private credentials

\- Cloudflare credentials



Each user should configure their own credentials.



\# Cloudflare Note



This project uses a Cloudflare Quick Tunnel for development and testing.



The generated trycloudflare.com URL can change when the tunnel is restarted.



Therefore, users should generate their own Cloudflare Tunnel URL.



\# Project Structure



AI-IVI-System/

|

├── n8n/

|   └── IVI-System.json

|

├── public/

|

├── server/

|   ├── server.js

|   ├── package.json

|   └── package-lock.json

|

├── src/

|   └── screens/

|       ├── AllApps/

|       ├── Bluetooth/

|       ├── Climate/

|       ├── Home/

|       ├── Media/

|       ├── Music/

|       ├── Navigation/

|       ├── Notifications/

|       ├── Phone/

|       ├── Profile/

|       ├── Radio/

|       ├── Settings/

|       ├── SystemInfo/

|       └── Vehicle/

|

├── package.json

├── package-lock.json

├── vite.config.js

├── README.md

├── DOC.md

└── .gitignore



\# Documentation



Detailed technical documentation will be available in:



&#x20;   DOC.md



\# Project Purpose



The purpose of this project is to demonstrate an AI-driven In-Vehicle Infotainment system where users can control the interface using natural language.



Instead of manually navigating through multiple IVI menus, users can provide a natural language command. The AI Agent interprets the command, determines the required screen, and the system dynamically opens that screen.



\# Author



AI-IVI-System Project



