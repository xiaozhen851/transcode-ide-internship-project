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
| Directory            | Description                                                                         |
| -------------------- |-------------------------------------------------------------------------------------|
| controllers          | Handles API calls                                                                   |
| db                   | Connections to the database                                                         |
| errors               | Common errors thrown by the backend                                                 |
| middleware           | Necessary check and process before controllers                                      |
| models               | Corresponding to the tables in database                                             |
| routes               | API routes                                                                          |
| .env                 | Contains all link addresses and API-KEY                                             |
| **client**           | All frontend source files                                                           |
| client/src/assets    | Contains all images and navigation bar for the project                              |
| client/src/Component | Frontend/UI Components                                                              |
| client/src/Context   | Stores all React Context files used for global state                                |
| client/src/Pages     | Contains the React Router paths accessed when navigating through the web application |
| client/src/utils     | Utility files                                                                       |


### Technologies
Our application is built using [React.js](https://reactjs.org/). Additionally, we use the following technologies:
- [OpenAI](https://openai.com/api/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Jobe Server](https://github.com/trampgeek/jobe)
- [MongoDB](https://www.mongodb.com/)
- [Bootstrap CSS](https://getbootstrap.com/)


## Getting Started

### Prerequisites
node 16.x <br/>
https://nodejs.org/en/download/

### Running the project
We are using MongoDB, Jobe Server and OpenAI in the project. You need to complete the registration and configuration on these websites and replace the contents in the .env file.
This project should not cost anything to run, as you will fall well within the free tier limits.
You can run this project without activating billing.

### Setting up the MongoDB
For the most up-to-date instructions, see the [MongoDB documentation](https://www.mongodb.com/docs/).
1. Create a mongoDB atlas account through mongoDB official website (https://account.mongodb.com/account/login).
2. Create a bank new project with the name you want.
3. Deploy a free tier cluster.
4. Cloud provider choose AWS, Region choose the one closest to the user, change the cluster name as you want and leave the rest as default and create cluster.
5. Create a database access account through Database Access.
6. Create an account using password.
7. Redefine the permission of the administrator account to full access.
8. Go to the network access and add IP access, we can just simply to click allow access from anywhere.
9. Going back to the cluster you just create and click the connect -> connect to your application -> copy the connection string.
10. Create a .env file under the main root (same level as the server.js file), fill up "MONGO_URL" = "the connection string you just copy from the previous step". Below is a skeleton of .env file. You can copy it to your file.

```env
MONGO_URL = The connection string you just copy from Step 9
JWT_SECRET = The secret key in Step 18
JWT_LIFETIME = 1d
OPENAI_API_KEY = Your API-KEY (Step 14)
JOBE_SERVER_IP_ADDRESS = The IP address of your Jobe server (set up in Step 16)
```

### Getting your OpenAI API-KEY
11. Go to the official website of OpenAI at https://openai.com/api/
12. Click SIGN UP on the top right, and enter your email address and other information to complete the registration.
13. After login, click "Personal" in the upper right corner, and click View API keys, you can enter the API keys page.
14. Click "Create new secret key" to generate your personal API KEY and copy it.
15. Find the .env file in the local backend file directory and replace the contents of OPENAI_API_KEY with your API-KEY.

### Setting up your Jobe Server
16. Refer to the instruction in this [video](https://www.youtube.com/watch?v=dGpnQpLnERw) and set up a Jobe server.
17. Find the .env file in the local backend file directory and fill up "JOBE_SERVER_IP_ADDRESS" = "the IP address of your Jobe server".

### Generating your secret key for JWT token
18. Get a random string consisting of 32 ASCII characters and fill up "JWT_SECRET" = "the random string".
19. You can modify JWT_LIFETIME as you wish, which is the expiry time of users' authentication.

When you finish all these registrations and configuration.
20. Create a terminal, go to the root of the project, and enter `npm install` to install the dependencies and packages in the backend.
21. Create a terminal, go to the client directory, and enter `npm install` to install the dependencies and packages in the frontend.
22. To run the backend, go back to the root directory and run `npm run server`.
The backend will run on http://localhost:8000/.
23. To run the frontend, go to the client directory and run `npm start`.
You should now be able to access the project at the http://localhost:3000/. 


## Acknowledgements
- Dr. Paul Denny, for being the Partner Mentor.
- Dr. Andrew Meads, for being the Supervisor.
