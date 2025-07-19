const express = require("express");
const app = express();

// require("dotenv").config();
require('dotenv').config({
    quiet: true,
    path: '',
    debug: true
})

const PORT = process.env.PORT || PORT;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");

// mount the todo API routes
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();


app.get('/', (req, res) => {
    res.send('<h1>Hello Babby...</h1>')
})