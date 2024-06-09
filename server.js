const express=require('express');
const app=express();

let port=4000

//middleware
app.use(function(req,res,next){
    console.log("In middleware")
    next()
})

//home
app.use(function(req,res,next){
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`APP is running on port:${port}`);
})