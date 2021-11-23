# Nautilus Game : Unity Assessment

### 🦑🕹️ Description 
Thank you for reviewing my Unity Assessment, instructions to build are below including more information on the API and the client. The primary goal was to build a service that allows `Players to add feedback to a game a session` and for 
`Ops team members to see recent feedback left by players, allowing filtering by rating`. 


## Stack

**Frontend** React Redux TypeScript Tailwindcss
**Backend** NodeJS ExpressJS MongoDB TypeScript 


Steps to install and start the services
---
MongoDB is required for the API to function properly
A MongoDB server should be running on `mongodb://localhost:27017/`
To start MongoDB via terminal type  `mongod`

If MongoDB is not installed look  [here](https://docs.mongodb.com/manual/installation/)  for additional options

Once MongoDB is started navigate to `client` directory by entering the following
```
cd client
yarn install
yarn start
```
Once MongoDB is running and the client server is started navigate to `server` directory by entering the following
```
cd ../server
yarn install
yarn dev
```
Navigate to `http://localhost:3000/` or click [here](http://localhost:3000) to access the client

## Frontend Views
**Home View** `/` Simple homepage welcoming visitors to login, signup, or "play" a game.
**Login View** `/login` Logs the user in and forwards them to the operations page.
**Signup View** `/signup`Signs up the prospective user.
**Game View** `/game` Provides a view of multiple games to "play".
**Feedback View**`/feedback` After clicking on a game, allows the user to provide feedback.
**Operations View**`/operations` A over view of all provided feedback with tools for sorting and filtering feedback data.

API Reference
---
The default API root is `http://localhost:4200/api/`

Authentication routes
```
POST:'/register' Creates a user
body[name:string,account:string(email), password:string(requires matching pair for client dispatch)]
res[accessToken]

POST:'/login' Login with existing account
body[name:string,account:string(email), password:string()]
res[accessToken]

GET:'/logout'
res[Revokes refreshToken cookie]

GET:'/refresh_token' Given the refresh and access token pair for keeping the user logged in.
req[Requires refreshToken cookie]
```

Feedback and Links
```
POST'/link' Generates a feedback link with the default localhost:3000 client url
body[name:GameName, session:SessionId, player:PlayerId]
res[url: 'https:localhost:3000/feedback?game=GameName&session=SessionId&player=PlayerID'

GET'/feedback' Returns a list of all feedback objects in the database
res[feedback{game: string, player: string, session: string, Score:number, Review:string, flagged:boolean, read:boolean]

POST'/feedback' Takes the params from link and combines them with user review input to create feedback.
body[game: string, player: string, session: string, Score:number, Review:string, flagged:boolean, read:boolean]

```
### Ideology of API
Authentication is fairly straightforward with JWT (JSON Web Token) format for dealing with users.

The Link and Feedback API are implemented as such because of the following expected use case.

0) Game Developer using Unity wants to collect feedback on their new rendition of Squid Game.
1) Using this API the developer provides their games `name`, the game `session` they are tracking, and the `userId` of whom they would like the feedback from.
2) At the end of the developer's users game, they are provided with a `Link` with the above developer provided params.
3) The Link then forwards the developer's users to this api's client where the rest of the feedback can be completed.
4) The developer can lastly `get` all the feedback from their games on this api's client.

### Next Steps, Nice to Haves, Issues
0) Biggest issue and next step. Require authentication to get feedback based on users account domain.
i.e. `User A has access to User N's feedback`
1) 2nd biggest issue Docker container. This project is partitioned into 3 different servers with a multitude of requirements to run. Deploying and distributing this project would be much easier if it used Docker.
2) JEST getting into the habit of testing and validating endpoints for the API and the client is very important. In fact some input validation is missing on the client side registration. 
3) Need to update credentials as environment variables used for tokenization on the backend. 

### Final Comments

Thank you for taking the time to review my test. My ultimate goal was to build something not too-big and not too-small using technologies pertinent to the Full Stack Developer role at Unity while also show casing my thought process in design for the given developed service.

Thank you!
Justin Crisp

justincrisp@crispcode.io
