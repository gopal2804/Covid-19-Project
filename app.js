const express=require("express");
const app=express();

const path = require('path');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/cause",(req,res)=>{
    res.render("cause");
});

app.get("/signs",(req,res)=>{
    res.render("signs");
});

app.get("/prevention",(req,res)=>{
    res.render("prevention");
});

app.listen(process.env.PORT,process.env.ID,()=>{
    console.log("connected");
});