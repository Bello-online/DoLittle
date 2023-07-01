
const express = require("express");
const app = express();
const ejs = require("ejs");

// Allows rendering of ejs
app.set('view engine', 'ejs');


const urlDatabase = {
    "b2xVn2": "http://www.lighthouselabs.ca",
    "9sm5xK": "http://www.google.com"
  };

app.get("/", function (req,res){
     res.send("Welcome to my page");
})

// app.get("/urls.json", function(req, res){
//     res.json(urlDatabase);
//   });


  app.get("/urls", function (req, res)  {
    const templateVars = { urls: urlDatabase };
    res.render("urls_index", templateVars);
  });

  app.get("/urls/:id", (req, res) => {
    const templateVars = { id: req.params.id, longURL: req.params.urls[id] };
    res.render("urls_show", templateVars);
  });


app.listen(8080, function() {
    console.log("Server started on port 3000");
  });