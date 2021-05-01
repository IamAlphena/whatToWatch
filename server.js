const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const routes = require("./routes");
const routesUrls = require("./routes/routes");
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

dotenv.config()
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/movieDB");
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

// Add routes, both API and view
app.use(express.json())
app.use(cors())
app.use('/app', routesUrls);

// Start the API server
app.listen(PORT, function () {
  console.log(`==> API Server now listening on PORT ${PORT}!`);
});
