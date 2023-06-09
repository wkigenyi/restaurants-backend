# The Restaurant App Backend

This repo has the code for servicing the api requests from the frontend of the application.\
Make sure this code is running before you run the frontend app [https://github.com/wkigenyi/restaurant-front](https://github.com/wkigenyi/restaurant-front.git).

## Running the backend server

Clone this repo and install the dependencies by running the command `yarn install` inside the root directory.
In the root directory create file .env and add the following environment variables:
PORT=4000
MONGO_URL=[mongodb+srv://username:password@cluster0.9hwitbi.mongodb.net/]
PORT represents the port on which the server will run and MONGO_URL is the connection string to your Mongo DB instance.

At this point you run the server by entering the command `yarn dev`. This will start the server at the specified port and it will be listening for requests on that port.

## Run the frontend app

Once the backend is running, you can start the frontend and start using the app. Instructions on how to run the front end in the ReadMe.md file of the front end app repo