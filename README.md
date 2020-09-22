# Syndicate::Users Microservice
This microservice provides authentication, authorization, and user data for internal and external api reference.

## Installation
Run the following commands in a unix environment (or whatever the Windows equivalent is)
```shell script
git clone https://github.com/bradenn/syndicate-user.git
cd syndicate-user
npm install
```  
## Usage
Given the nature of microservices, running the server outside of a docker container isn't recommended.

Here is a basic Dockerfile if you are not familiar with Node's integration with Docker.
```dockerfile
FROM node:12

COPY . .

RUN npm install

CMD ["node", "index.js"]
```

## Structure
```
src
├── config
│   └── index.js
├── index.js
├── loaders
│   ├── express.js
│   ├── index.js
│   └── mongoose.js
├── middleware
│   ├── authorization.js
│   └── index.js
├── models
│   └── users.js
├── routes
│   ├── auth.js
│   ├── index.js
│   └── users.js
├── services
│   ├── index.js
│   └── users.js
└── validators
    ├── index.js
    └── users.js

```
## API Reference
Here are some basic requests to get you on the right path...

Get user by ID
```http request
POST localhost/api/v1/users/5f3b1951e0a3cd3f4974d977 Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC...
```
```json
{
  "success": true,
  "user": {
      "username": "octocat",
      "email": "octocat@github.com",
      "firstname": "John",  
      "lastname": "Smith"
  }
}
```
Getting a token
```http request
POST localhost/api/v1/auth
```
```json
{
  "username": "username",
  "password": "password"
}
```

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC..."
}
```
Standard Error
```http request
POST localhost/api/v1/users
```
```json
{
  "success": false,
  "error": {
    "message": "Invalid authentication token",
    "status": 401
  }
}
```
## Contributing
Pull requests are always welcome.
Please open an issue before making any drastic changes.

## Licence
 [MPL-2.0](https://choosealicense.com/licenses/mpl-2.0/)


