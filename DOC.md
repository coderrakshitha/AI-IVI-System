\# AI-IVI-System — Technical Documentation



\## 1. Introduction



The AI-IVI-System is an AI-driven In-Vehicle Infotainment system developed to demonstrate how natural language can be used to control an IVI Human-Machine Interface (HMI).



Traditional IVI systems generally require users to manually navigate through menus and applications. For example, if a user wants to open the Music screen, the user may need to open the application menu and select Music.



In this project, the interaction is changed to a natural-language-based approach.



Instead of manually navigating through the interface, the user can send a command such as:



&#x20;   Open music



or:



&#x20;   I want to listen to music



The system interprets the user's command, determines the appropriate IVI screen, and dynamically opens that screen in the React-based IVI interface.



The project therefore demonstrates the integration of an AI Agent with an IVI frontend and an automation backend.



\---



\## 2. Main Objective



The main objective of the project is to create an AI-driven communication pipeline capable of converting a natural-language command into an IVI screen navigation action.



The project was designed around the following requirements:



1\. The IVI interface should contain multiple screens.

2\. The user should be able to request a screen using natural language.

3\. The system should not depend only on exact keywords.

4\. An AI Agent should understand the user's intent.

5\. The AI Agent should return a structured screen name.

6\. The screen information should be transferred from the backend to the frontend.

7\. The React application should dynamically display the requested screen.

8\. The system should support an external messaging interface for sending commands.



\---



\## 3. Initial Concept



The initial implementation of the IVI system was developed with a React frontend containing multiple dummy IVI screens.



The frontend was designed so that different commands could cause navigation to different screens.



For example:



&#x20;   open music



would result in:



&#x20;   Music Screen



Similarly:



&#x20;   open navigation



would result in:



&#x20;   Navigation Screen



The initial approach worked for predefined commands, but it had an important limitation.



A traditional keyword-based approach depends on the user using specific words or phrases.



For example, the application might recognize:



&#x20;   open music



but fail to correctly interpret:



&#x20;   I want to listen to some music



Both commands have the same intention, but their wording is different.



This limitation led to the integration of an AI Agent.



\---



\## 4. Why an AI Agent Was Introduced



The purpose of the AI Agent in this project is to understand the meaning of the user's command rather than simply matching an exact phrase.



For example, the following commands should all result in the Music screen:



&#x20;   Open music



&#x20;   I want to listen to music



&#x20;   Show me music



&#x20;   Take me to the music screen



The AI Agent interprets these different natural-language expressions and maps them to a predefined IVI screen.



The expected structured output is:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



This structured output makes communication between the AI workflow and the application predictable.



The React application does not need to understand the complete natural-language sentence. Instead, it receives the final screen identifier.



\---



\## 5. High-Level Technical Architecture



The final system consists of several independent components.



\### Frontend



The frontend is implemented using React and Vite.



Its responsibility is to:



\- Display the IVI interface.

\- Maintain the available IVI screens.

\- Navigate between screens.

\- Receive the screen information from the backend.

\- Display the screen selected by the AI workflow.



\### Node.js Backend



Node.js acts as the communication layer between n8n and the React application.



Its responsibility is to:



\- Run a local HTTP server.

\- Receive the screen information from n8n.

\- Process the incoming request.

\- Forward the screen information to the React application.



\### n8n



n8n is used as the workflow automation layer.



Its responsibility is to:



\- Receive the Telegram message.

\- Pass the message to the AI Agent.

\- Connect the AI Agent with the OpenRouter Chat Model.

\- Extract the required screen.

\- Send the screen information to Node.js.



\### AI Agent



The AI Agent is responsible for understanding natural-language commands.



It determines which IVI screen corresponds to the user's request.



\### OpenRouter



OpenRouter provides access to the chat model used by the AI Agent.



\### Telegram



Telegram is used as the external user-input interface.



The user sends a command to the Telegram bot.



\### Cloudflare Tunnel



The local n8n instance runs inside Docker and is not directly accessible from the public internet.



Cloudflare Tunnel provides an HTTPS public endpoint that allows Telegram to communicate with the local n8n instance.



\---



\## 6. Final Communication Architecture



The complete communication architecture is:



&#x20;   User

&#x20;     |

&#x20;     | Natural language command

&#x20;     v

&#x20;   Telegram Bot

&#x20;     |

&#x20;     | HTTPS webhook

&#x20;     v

&#x20;   Cloudflare Tunnel

&#x20;     |

&#x20;     v

&#x20;   n8n Telegram Trigger

&#x20;     |

&#x20;     v

&#x20;   AI Agent

&#x20;     |

&#x20;     v

&#x20;   OpenRouter Chat Model

&#x20;     |

&#x20;     v

&#x20;   Structured Screen Output

&#x20;     |

&#x20;     v

&#x20;   Code Node

&#x20;     |

&#x20;     v

&#x20;   HTTP Request

&#x20;     |

&#x20;     v

&#x20;   Node.js Server

&#x20;     |

&#x20;     v

&#x20;   React Application

&#x20;     |

&#x20;     v

&#x20;   IVI Screen



Each component has a specific responsibility, which keeps the system modular.



\---



\## 7. Data Flow Example



Consider the following user command:



&#x20;   I want to listen to music



\### Step 1 — Telegram



The user sends the message to the Telegram bot.



The Telegram Trigger node in n8n receives the message.



The original message is natural language:



&#x20;   I want to listen to music



\### Step 2 — AI Agent



The message is passed to the AI Agent.



The AI Agent interprets the user's intent.



The intent is:



&#x20;   Music



The AI Agent generates a structured result such as:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



\### Step 3 — Code Node



The n8n Code node extracts the screen value from the AI Agent output.



The result becomes:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



\### Step 4 — HTTP Request



The HTTP Request node sends the result to the Node.js server.



The request is sent to:



&#x20;   http://host.docker.internal:3000/ivi-screen



The request body contains:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



\### Step 5 — Node.js



The Node.js server receives the HTTP request.



It reads the screen value:



&#x20;   music



The server then communicates this information to the React application.



\### Step 6 — React



The React application receives the screen information.



The application identifies:



&#x20;   screen = music



The Music component is then displayed.



\### Final Result



The user sends:



&#x20;   I want to listen to music



and the final result is:



&#x20;   Music Screen Opens



\---



\## 8. Why the Node.js Layer Is Used



The Node.js server acts as an intermediate communication layer between n8n and the React frontend.



This separation provides several advantages.



First, n8n can communicate with a standard HTTP endpoint.



Second, the Node.js server can process incoming requests before forwarding the information to the frontend.



Third, the frontend does not need to directly communicate with the n8n workflow.



Therefore, the architecture becomes:



&#x20;   n8n

&#x20;     |

&#x20;     v

&#x20;   Node.js

&#x20;     |

&#x20;     v

&#x20;   React



instead of directly coupling the React application with the complete n8n workflow.



\---



\## 9. Docker Networking Consideration



The n8n instance is running inside a Docker container.



The Node.js server, however, is running on the host machine.



Because of this difference, the address:



&#x20;   http://localhost:3000



inside the n8n Docker container does not refer to the host computer's Node.js server.



Inside a Docker container, localhost refers to the container itself.



Therefore, the Docker-specific hostname:



&#x20;   host.docker.internal



is used to access the host machine.



The HTTP Request node therefore uses:



&#x20;   http://host.docker.internal:3000/ivi-screen



This allows the n8n container to communicate with the Node.js server running on the host machine.



\---



\## 10. IVI Screen Architecture



The React application contains multiple IVI screens.



The current project contains screens such as:



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



Each screen is implemented as a separate React component.



The purpose of separating the screens into individual components is to make the IVI interface easier to maintain and extend.



For example:



&#x20;   src/screens/Music/Music.jsx



contains the Music screen.



Similarly:



&#x20;   src/screens/Navigation/Navigation.jsx



contains the Navigation screen.



This structure allows additional IVI screens to be added without changing the complete application architecture.





\# 11. Major Development Challenges and Solutions



During the development of the AI-IVI-System, three major integration challenges were encountered.



\## 11.1 WhatsApp Integration



\### Problem



Initially, WhatsApp was planned to be used as the external interface for sending user commands to the AI-IVI system.



However, while integrating WhatsApp with the project, the required WhatsApp/Meta configuration and security-related requirements caused difficulties in establishing the required connection.



Because of this, WhatsApp could not be used as the input interface for the final implementation.



\### Solution



Telegram was selected as an alternative messaging platform.



A Telegram Bot was created and connected to the n8n workflow using the Telegram Trigger node.



This allowed users to send natural-language commands through Telegram.



The input architecture was therefore changed from:



&#x20;   WhatsApp

&#x20;      ↓

&#x20;     n8n



to:



&#x20;   Telegram

&#x20;      ↓

&#x20;     n8n



This change allowed the project to continue without changing the remaining AI-IVI architecture.



\---



\## 11.2 Connecting Telegram to Local n8n



\### Problem



The next major challenge was connecting Telegram with the locally running n8n instance.



The n8n workflow was running locally through Docker and was accessible using:



&#x20;   http://localhost:5679



However, Telegram is an external internet service and cannot directly access a localhost address.



Telegram webhooks also require a publicly accessible HTTPS URL.



Therefore, the Telegram Trigger could not directly use:



&#x20;   http://localhost:5679



\### Solution



A tunneling service was used to expose the local n8n instance through a public HTTPS URL.



Initially, ngrok was explored for this purpose. However, due to issues encountered during the setup, Cloudflare Tunnel was selected as the final solution.



The Cloudflare Quick Tunnel was started using:



&#x20;   cloudflared tunnel --url http://localhost:5679



Cloudflare then generated a temporary HTTPS URL such as:



&#x20;   https://example-name.trycloudflare.com



The HTTPS URL allowed Telegram to communicate with the locally running n8n workflow.



The final communication became:



&#x20;   Telegram

&#x20;      ↓

&#x20;   Cloudflare HTTPS Tunnel

&#x20;      ↓

&#x20;   Local n8n Docker Container



This solved the problem of receiving Telegram messages in the locally running n8n workflow.



\---



\## 11.3 Connecting Docker n8n with Host Node.js



\### Problem



After establishing Telegram-to-n8n communication, the n8n workflow needed to send the generated screen information to the Node.js server.



The Node.js server was running directly on the host computer at:



&#x20;   http://localhost:3000



The n8n workflow, however, was running inside a Docker container.



Inside the Docker container, `localhost` refers to the container itself rather than the host computer.



Therefore, the n8n HTTP Request node could not use:



&#x20;   http://localhost:3000/ivi-screen



to reach the Node.js server running on the host.



\### Solution



The Docker hostname `host.docker.internal` was used to access the host computer from the n8n container.



The HTTP Request node was configured with:



&#x20;   http://host.docker.internal:3000/ivi-screen



The final communication became:



&#x20;   n8n Docker Container

&#x20;         ↓

&#x20;   host.docker.internal

&#x20;         ↓

&#x20;   Node.js Server

&#x20;         ↓

&#x20;   React Application



This allowed the screen generated by the AI Agent to be successfully transferred from n8n to the Node.js backend and then to the React IVI application.



\---



\# 12. Final Working Architecture



After solving the major integration challenges, the final system architecture became:



&#x20;   User

&#x20;     ↓

&#x20;   Telegram Bot

&#x20;     ↓

&#x20;   Cloudflare HTTPS Tunnel

&#x20;     ↓

&#x20;   n8n Telegram Trigger

&#x20;     ↓

&#x20;   AI Agent

&#x20;     ↓

&#x20;   OpenRouter Chat Model

&#x20;     ↓

&#x20;   Screen Name

&#x20;     ↓

&#x20;   n8n HTTP Request

&#x20;     ↓

&#x20;   Node.js Server

&#x20;     ↓

&#x20;   React Application

&#x20;     ↓

&#x20;   IVI Screen



For example, when the user sends:



&#x20;   Open music



the AI Agent identifies the required screen as:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



The screen information is sent to the Node.js server, and the React application opens the Music screen.



\# 13. n8n Workflow Documentation



n8n is used as the automation and AI-processing layer of the AI-IVI-System.



The n8n workflow receives the user's command from Telegram, processes the command using an AI Agent, extracts the required IVI screen, and sends the result to the Node.js server.



The workflow is stored in the project repository as:



&#x20;   n8n/IVI-System.json



\## 13.1 Workflow Components



The main components of the workflow are:



1\. Telegram Trigger

2\. AI Agent

3\. OpenRouter Chat Model

4\. Code Node

5\. HTTP Request



The overall workflow is:



&#x20;   Telegram Trigger

&#x20;         ↓

&#x20;   AI Agent

&#x20;         ↓

&#x20;   OpenRouter Chat Model

&#x20;         ↓

&#x20;   Code Node

&#x20;         ↓

&#x20;   HTTP Request

&#x20;         ↓

&#x20;   Node.js Server



\---



\## 13.2 Telegram Trigger



The Telegram Trigger is the entry point of the workflow.



It receives messages sent by the user through the Telegram Bot.



For example, the user may send:



&#x20;   Open music



The Telegram Trigger receives the Telegram message and passes it to the next node in the workflow.



The Telegram Bot acts only as the input interface. The actual interpretation of the user's command is performed by the AI Agent.



\---



\## 13.3 AI Agent



The AI Agent is responsible for understanding the user's natural-language command.



The purpose of the AI Agent is to determine which IVI screen the user is requesting.



For example:



&#x20;   Open music



can be interpreted as:



&#x20;   Music



Similarly:



&#x20;   I want to listen to music



can also be interpreted as:



&#x20;   Music



The AI Agent is therefore not limited to exact keyword matching.



It understands different natural-language expressions that represent the same user intent.



The AI Agent is instructed to return the appropriate IVI screen in a structured format.



Example:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



\---



\## 13.4 OpenRouter Chat Model



The OpenRouter Chat Model is connected to the AI Agent.



It provides the language model used to process the user's natural-language command.



The model receives the user's message through the AI Agent and generates the structured screen response.



Example input:



&#x20;   I want to listen to music



Example output:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



The OpenRouter credential is configured inside n8n and should not be included as a secret in the GitHub repository.



Each user installing the project should configure their own OpenRouter credential.



\---



\## 13.5 Code Node



After the AI Agent generates the response, the Code node extracts the required screen value.



The purpose of this node is to convert the AI Agent response into a simple structure that can be passed to the Node.js server.



The processing extracts:



&#x20;   screen



from the AI Agent output.



The resulting data is:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



This makes the data predictable for the HTTP Request node.



\---



\## 13.6 HTTP Request Node



The HTTP Request node sends the generated screen information from n8n to the Node.js server.



The Node.js server runs on the host computer at port:



&#x20;   3000



Since n8n is running inside Docker, the Docker hostname is used to access the host machine.



The HTTP Request URL is:



&#x20;   http://host.docker.internal:3000/ivi-screen



The request sends data similar to:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



The Node.js server receives this request and forwards the screen information to the React application.



\---



\## 13.7 Complete n8n Data Flow



The complete data flow inside n8n is:



&#x20;   Telegram Message

&#x20;         ↓

&#x20;   Telegram Trigger

&#x20;         ↓

&#x20;   AI Agent

&#x20;         ↓

&#x20;   OpenRouter Chat Model

&#x20;         ↓

&#x20;   Structured AI Response

&#x20;         ↓

&#x20;   Code Node

&#x20;         ↓

&#x20;   Screen Name

&#x20;         ↓

&#x20;   HTTP Request

&#x20;         ↓

&#x20;   Node.js



For example:



&#x20;   User Message:

&#x20;   "I want to listen to music"



&#x20;         ↓



&#x20;   AI Agent:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



&#x20;         ↓



&#x20;   Code Node:



&#x20;   {

&#x20;     "screen": "music"

&#x20;   }



&#x20;         ↓



&#x20;   HTTP Request:



&#x20;   POST /ivi-screen



&#x20;         ↓



&#x20;   Node.js Server



&#x20;         ↓



&#x20;   React Music Screen



\---



\## 13.8 n8n Workflow File



The complete workflow is exported and included in the project repository.



Location:



&#x20;   n8n/IVI-System.json



The workflow can be imported into another n8n installation.



After importing the workflow, the user must configure their own credentials for:



\- Telegram

\- OpenRouter



The user must also configure the appropriate webhook/tunnel settings if Telegram is being used.



\---



\## 13.9 Credential Configuration



The exported workflow may contain references to n8n credentials.



These references identify the credential used by a node, but the actual secret values should not be shared publicly.



When setting up the project on another computer:



1\. Import `IVI-System.json` into n8n.

2\. Create a Telegram credential.

3\. Connect the Telegram credential to the Telegram Trigger.

4\. Create an OpenRouter credential.

5\. Connect the OpenRouter credential to the OpenRouter Chat Model.

6\. Configure the Cloudflare HTTPS URL for Telegram webhook communication.

7\. Activate the workflow.



\---



\## 13.10 Example End-to-End Request



Suppose the user sends:



&#x20;   Open navigation



The workflow processes the command as follows:



&#x20;   Telegram

&#x20;      ↓

&#x20;   "Open navigation"

&#x20;      ↓

&#x20;   Telegram Trigger

&#x20;      ↓

&#x20;   AI Agent

&#x20;      ↓

&#x20;   OpenRouter Chat Model

&#x20;      ↓

&#x20;   {

&#x20;     "screen": "navigation"

&#x20;   }

&#x20;      ↓

&#x20;   Code Node

&#x20;      ↓

&#x20;   HTTP Request

&#x20;      ↓

&#x20;   Node.js

&#x20;      ↓

&#x20;   React

&#x20;      ↓

&#x20;   Navigation Screen



The same process can be used for the other IVI screens supported by the application.

