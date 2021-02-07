const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const posts = require("./routes/api/meme_posts");

//initialize express
const app = express();

//bodyParser initialize
app.use(express.json());

//basic routes
app.get("/", (req, res) => {
  res.send('Welcome to Xmeme Backend');
});

//connecting the DB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB..."));

//other routes
app.use("/memes", posts);

//port number for the app to listen
const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log("Server Started...");
});
