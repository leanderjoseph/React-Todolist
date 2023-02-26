const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://admin-leander:ploimik7@cluster0.raodsw2.mongodb.net/todolistDB',{useNewUrlParser: true})

const itemsSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Item = mongoose.model('Item', itemsSchema);

const note = new Item({ title:"Welcome to your To do list",
content:"Add content here"});

//note.save();

app.get("/api",function(req,res){
  res.json({note})
})




app.listen(9000,function(req,res){
  console.log("App is running on port 9000");
})
