# Yelpcamp v6
* install and configure Mongoose
* Setup campground model
* Use campground model insise of our routes
* 
#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template
* 
#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctlyls

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add he Comment model
* Make our errors go away
* Display comments on campground show page
* 

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

RESTFUL ROUTES  - good to have structure - to follow pattern - lots of app will follow that makes it reliable to interact to other app

name    url             verb    desc
====================================================
INDEX   /dogs            GET    Display a list of all dog
NEW     /dogs/new       GET     Display form to make a new dog
CREATE  /dogs           POST    Add new dog to DB
SHOW    /dogs/:id       GET     Shows info about one dog


INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new    GET
CREATE  camgorunds/:id/comments     POST
