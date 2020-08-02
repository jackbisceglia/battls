
<p align="center"><img width="200" src="https://dl.dropboxusercontent.com/s/1sy3vp3dujz09pq/First.png?dl=0"></p>
<h1 align="center">Battls</h1>
<p align="center">A social media web app built to allow users to debate on topics of their choice via simple, persuasive, and capable polls</p>

## Description
Battls is a full fledged social media web app. It is responsive and mobile friendly, allowing users to vote on polls that interest them, as well as to post polls pitting any two topics against each other. The app supports a feed of polls, filtered based on date, which provides organic access to diverse poll topics. It also aims to soon showcase the most voted on polls of all time, as well as the most popular polls of the week. The purpose of the app is to settle debates without bias, based on the popular opinion of the user base.

## App Features
* Frontend UI developed with __Typescript React__, using ES6 principles, type-checking, and functional React components
* Client side state managed with a __Redux__ global state store, bootstrapped with their new library, Redux-Toolkit
* Responsive UI styling created with the __Semantic UI__ React component library, paired with custom CSS styles
* Dynamic data serving with a __NodeJS/ExpressJS__ backend REST API
* Data storage with __PostgreSQL__ allowing for user data to persist across uses

## Installation
#### Requirements
* PostgreSQL, and NodeJS

#### Setup
* Create a new db named ```battls``` and create tables according to the schema provided in ```backend/schema.sql``` (*File is currently being updated*)
* Clone the battls repository above or with ```https://github.com/jackbisceglia/battls.git```
* Navigate into both the frontend and backend directories, and run ```npm install``` respectively to bring in dependencies
* Run ```npm start``` in both frontend and backend to spin up both the backend and frontend development servers
* Client side React App should be running on http://localhost:3000 and backend Express API on http://localhost:5000

## Live App
* _Coming Soon_
