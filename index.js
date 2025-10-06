const express=require('express')
const mongoose = require('mongoose');

const app = express()
const port=8080;

mongoose.connect('mongodb://127.0.0.1:27017/MERN_PRJ')
  .then(() => console.log('Connected!'));


  const TodolistSchema = new mongoose.Schema({
    task:String,
    details:String,
    done:Boolean
  });

  const Todolist = mongoose.model('Kitten', TodolistSchema);

  const Eat=new Todolist({
    task:'Eat',
    details:'Eat less',
    done:false
  });
//Eat.save();
const kittens = Todolist.find({});
console.log(kittens);

app.listen(port,()=>{
    console.log(`server started on ${port}`);
})

app.get("/",(req,res)=>{
res.send("Welcome to Express")
})

