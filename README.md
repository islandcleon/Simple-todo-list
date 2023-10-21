# To-Do List Application

This is a simple to-do list application with a backend written in Node.js with TypeScript and PostgreSQL, and a frontend developed in React with TypeScript.

## database

### Table

create table todos(
	id SERIAL primary key,
	description varchar(250) not null,
	status int not null default '0'
);



## Backend
http://localhost:5000


### Setup

1. Install the required packages:

   ```bash
   npm install

2. start up the Backend server

    npm run start

## Frontend
http://localhost:3000


### Setup

1. Install the required packages:

    npm install

2. start up the Frontend

    npm start


