const mongoose = require("mongoose");
const express = require("express");

mongoose.connect(
  "mongodb+srv://vgpt007:4EV9OBMtqBIz030w@cluster0.hulezvc.mongodb.net/userappnew" // It should include the database name at the end.
);

const userModel = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
appendFile.post("/signup", function(req,res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    
    const user = new userModel({
        name: name,
        email: "harkirat@gmail.com",
        password: "123",
      });
      
      user.save();
      res.json({
        msg: "User created",
      });
    
});

