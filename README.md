## Table of Contents
1. About the Project
   - Structure
   - Technologies
2. Getting started
   - Prerequisites
   - Running the project


## About the Project
TransCode is a web-based software that provides support for novices to learn programming with AI. At the same time, it can record interaction information.


### Structure
| Directory            | Description                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| controllers          | |
| db                   | |
| errors               | |
| middleware           | |
| models               | |
| routes               | |
| .env                 | Contains all link addresses and API-KEY                                                            |
| **client**           | All frontend source files                                                                          |
| client/src/assets    | Contains all images and navigation bar for the project                                             |
| client/src/Component | Frontend/UI Components                                                                             |
| client/src/Context   | Stores all React Context files used for global state                                               |
| client/src/Pages     | Contains the React Router paths accessed when navigating through the web application               |
| client/src/utils     | Utility files                                                                                      |


### Technologies
Our application is built using [React.js](https://reactjs.org/). Additionally, we use the following technologies:
- [OpenAI](https://openai.com/api/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Jobe Server](https://github.com/trampgeek/jobe)
- [MongoDB](https://www.mongodb.com/)
- [Bootstrap CSS](https://getbootstrap.com/)


## Getting Started

### Prerequsites
node 16.x <br/>
https://nodejs.org/en/download/

### Running the project
We are using MongoDB, Jobe Server and OpenAI in the project. You need to complete the registration and configuration on these websites and replace the contents in the .env file.
This project should not cost anything to run, as you will fall well within the free tier limits.
You can run this project without activating billing.

### Setting up the MongoDB
For the most up-to-date instructions, see the [MongoDB documentation](https://www.mongodb.com/docs/).
1. Create a mongoDB atlas account through mongoDB official website (https://account.mongodb.com/account/login).
2. Create a bank new project with the name you wanat.
3. Deploy a free tier cluster.
4. Cloud provider choose AWS, Region choose the one cloosest to the user, change the cluster name as you want and leave the rest as default and create cluster.
5. Create a database access account through Database Access.
6. Create a account using password.
7. Redefine the premission of the administrator account to full access.
8. Go to the network access and add IP access, we can just simply to click allow access from anywhere.
9. Going back to the cluster you just create and click the connect -> connect to your application -> copy the connection string.
10. Create a .env file under the main root (same level as the server.js file), fill up "MONGO_URL = "the connection string you just copy from the previous step".

### Getting your OpenAI API-KEY
11. Go to the official website of OpenAI at https://openai.com/api/
12. Click SIGN UP on the top right, and enter your email address and other information to complete the registration.
13. After login, click "Personal" in the upper right corner, and click View API keys, you can enter the API keys page.
14. Click "Create new secret key" to generate your personal API KEY and copy it.
15. Find the .env file in the local backend file directory and replace the contents of OPENAI_API_KEY with your API-KEY.

### Creating your Jobe Server
16.
17.
18.
19.

```env
MONGO_URL = The connection string you just copy from the Step 9
JWT_SECRET =
JWT_LIFETIME =
OPENAI_API_KEY = Your API-KEY (Step 14)
JOBE_SERVER_IP_ADDRESS = 
```

When you finish all these registration and configuration.
20. Create a terminal, go to the root of the project, and enter `npm install` to install the dependencies and packages in the backend.
21. Create a terminal, go to the client directory, and enter `npm install` to install the dependencies and packages in the frontend.
22. To run the backend, go back to the root directory and run `npm run server`.
The backend will run on http://localhost:8000/.
23. To run the frontend, go to the client directory and run `npm start`.
You should now be able to access the project at the http://localhost:3000/. 


## Acknowledgements
- Dr. Paul Denny, for being the Partner Mentor.
- Dr. Andrew Meads, for being the Supervisor.
