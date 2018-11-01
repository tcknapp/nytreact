const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

if(process.env.NODE_ENV == "production"){
  mongoose.connect('mongodb://heroku_crpnjvc5:oubp6mbsngqtc7fmm0i9b3a912@ds155718.mlab.com:55718/heroku_crpnjvc5');
}
else{
  mongoose.connect('mongodb://localhost/nytreact')};


// Add routes, both API and view
app.use(routes);

// React request
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
