# The Food Tracker

Everyone is always looking to try something new. At internet, you can search for new recipes all over the world and try to cook it by your own.
However, as many food platforms offer their multiple dishes to the users, users would like to submit their own recipe to a platform so that other users would try new dishes from new sources. 

The Food Tracker has evolved! Now we're allowing users to become members of our community! 
Users can now log in and not only request for new recipe data, but will also have the option of uploading their own recipes by fulfilling the required criteria.

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

## Link Access
Access to the Heroku app through the [following link](https://dashboard.heroku.com/apps/food-tracker-be)

## User Story

```
AS A food enthusiast
I WANT to try new dishes and share my own recipes to others based on criteria like ingredients and country of origin.
SO THAT everyone can prepare them more frequently
```

## Acceptance Criteria

```
GIVEN a global food search platform
WHEN I search for a recipe based on its popularity all over the world,
THEN I am presented with multiple dishes that are widely consumed around the globe no matter its country of origin.
WHEN I want to search for an unique meal through a specific criteria
THEN I am presented with a list of dishes from different countries, dishes that employ a specific ingredient or given a random list of meals to  try.
WHEN I want to upload my own recipes
THEN I am able to register at the server and submit my own recipe according to the established criteria.
WHEN I want to update or delete my submitted recipes
THEN I log in to the server and are able to either update or delete any recipe according to my own criteria.
```

## Creation Process
```
Creation of a folder structure that meets the MVC paradigm.
Use Node.js and Express.js to create a RESTful API.
Use of both GET and POST routes for retrieving and adding new data.
Use MySQL and the Sequelize ORM for the database.
Use Handlebars.js as the templating engine.
Be deployed using Heroku (access link above).
Use of authentication (express-session and cookies).
Use of environment variables to protect API keys and sensitive information.
```

- - -
© 2022 IntelSwift llc. brand. Confidential and Proprietary. All Rights Reserved.
