<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware - This is a function that extends capabilities to a route, it is used as a bridge between the client and server and its request/responses.

Sessions - This is a way to log a user's or client's interaction with the server and persist the data being sent through each request. 

bcrypt - A library that helps hash passwords (a one way change to the password in order to slow down a production of a rainbow table)

JWT - stands for Json Web Token and this is sent upon request to retrieve information from a server to a client. The client is responsible for holding onto the token to retain this information so nothing is stored server side. One functionality is tokens allow for a user to stay logged in on a site, but also as a safeguard tokens can be set to expire.

2.  What does bcrypt do in order to prevent attacks?


3.  What are the three parts of the JSON Web Token?
