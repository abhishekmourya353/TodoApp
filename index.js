//const mongoose=require("mongoose");
const express = require("express");
const app = express();
// app.listen(3000, () => {
//       console.log(`Server started successfully at `);
//      })

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todose");

//mount the todo API routes
app.use("/api/v1", todoRoutes);


//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect = require("./config/databazse");
dbConnect();

//default Route
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE </h1>`);
})