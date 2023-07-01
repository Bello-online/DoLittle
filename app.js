
const express = require("express");
const app = express();
const ejs = require("ejs");

// Allows rendering of ejs
app.set('view engine', 'ejs');

app.get("/", (req,res)=>{
     res.send("Welcome to my page");
})

app.listen(8080, function() {
    console.log("Server started on port 3000");
  });