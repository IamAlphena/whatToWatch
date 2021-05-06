const express = require("express");
const session = require('express-session')
const mongoose = require("mongoose");
const routes = require("./routes");

require('dotenv').config

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({secret:"7jhdsfy88ry3hf8bcu89xby34",resave:false, saveUninitialized:true}))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/movieDB", function(err){
  if (err){
    return console.log(err)
  }
  return console.log("Successfully connected to Mongo");
});


// Start the API server
app.listen(PORT, function () {
  console.log(`==> API Server now listening on PORT ${PORT}!`);
});
