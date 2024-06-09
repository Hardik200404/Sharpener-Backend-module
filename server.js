const express=require('express');
const app=express();

const body_parser=require('body-parser')
app.use(express.urlencoded({ extended: true }))

let port=4000

//home
app.get('/',function(req,res,next){
    res.send("Hello World")
})

app.get('/add-product',(req,res)=>{
    let html=`
    <!DOCTYPE html>
    <html>
    <head><title>enter message</title></head>
    <body>
        <form action='/added' method='POST'>
            <input type='text' name='product'></input>
            <input type='text' name='size'></input>
            <button type='submit'>Submit</button>
        </form>
    </body>
    </html>
    `
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html)
    return res.end()
})

app.post('/added',(req,res)=>{
    console.log("'",req.body.product,"' Added as Product")
    console.log("With Size: ",req.body.size)
    res.statusCode=302
    res.setHeader('Location','/add-product')
    return res.end()
})

app.listen(port,()=>{
    console.log(`APP is running on port:${port}`);
})