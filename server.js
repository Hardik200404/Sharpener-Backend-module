const express=require('express');
const app=express();

let port=4000

//greet
app.get('/',function(req,res){
    res.writeHead(200)
    res.end('Hi my name is Hardik');
})

//home
app.get('/home',function(req,res){
    res.writeHead(200)
    res.end('Welcome home');
})

//about
app.get('/about',function(req,res){
    res.writeHead(200)
    res.end('Welcome to About Us page');
})

//node
app.get('/node',function(req,res){
    res.writeHead(200)
    res.end('Welcome to my Node Js project');
})


app.listen(port,()=>{
    console.log(`APP is running on port:${port}`);
})