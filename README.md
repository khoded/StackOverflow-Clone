# The Stackoverflow clone API

## Project Overview

This api mocks the major featurs of StacckOverflow 

## Features

1. User signup
2. User sign in (using JWT)
3. Ask Question
4. View Questions
5. Upvote or downvote question
6. Answer Question
7. View Answers to a particular Question
8. Search (Questions, Answers and Users)
9. Upvote or Downvote Answers
10. Email notification once a question is answered.

Github:  https://github.com/khoded/StackOverflow-Clone
Deployed on Heroku at :https://stackoverflow-api-clone.herokuapp.com/ 

## Project Pipeline
- [Hosted API](https://stackoverflow-api-clone.herokuapp.com/)

## Technologies Used

- [NodeJS](https://nodejs.org/en/download/)
- [ExpressJS](https://expressjs.com/)
- MongoDB
- Nodemailer

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)
- MongoDB

### Installing/Run locally

- Make sure you have `nodejs` installed.

- Clone or fork repo

  ```bash
    - git clone https://github.com/khoded/StackOverflow-Clone
    - cd StackOverflow-Clone
    - npm install
    - 
  ```

- Create/configure `.env` environment with your credentials. Required environmental variables are the `EMAIL` and `password` for gmail

- Run `nodemon start` to start the server and watch for changes

##Architecture
For better project structure I implemented clean architecture therefore dividing each componenent of the resource into layers, this
ensures each module has it own function and it's independent of databases,UI, external 3rd party user. Therefore coupling is seamless and testable.
Each resource has 
-delivery layer
-repository layer
-Usecase layer
Tis design enures the application can be refactored,readable and be switched either as microservices or monoliths.
 
## HTTP Requests

All API requests are made by sending a secure HTTPS request using  the `GET`, `POST`, `PUT` methods to work with the 3 resource
- Users
- Questions
- Answers

### HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

- `201` `OK The resource was created successfull
- `200` `Ok The request was successfull
- `400` `Bad Request` There was a problem with the request (security, malformed)
- `500` `Server Error` An error on the server occurred

### API ENDPOINTS

#### API Routes Examples

| URI                                                     | HTTP Method | Description                               |
| ------------------------------------------------------- | ----------- | ----------------------------------------- |
| <code>/v1/users/signup</code>                           | `POST`      | User Signup                               |
| <code>/v1/users/signin</code>                           | `POST`      | User Signin                               |
| <code>/v1/questions/ask/</code>                         | `POST`      | Ask Question                              |

## Documentation

For full Documentation please check the POSTMAN Documentation for all endpoints and example responses [POSTMAN DOC](https://documenter.getpostman.com/view/8573320/SWTG7bRW?version=latest).

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
