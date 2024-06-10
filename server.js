const express=require('express');
const app=express();

app.use(express.urlencoded({ extended: true }))

require('./routes/admin_routes')(app)
require('./routes/shop_routes')(app)

let port=4000

//home
app.get('/',function(req,res,next){
    res.send("Hello World")
})

app.use((req,res)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(port,()=>{
    console.log(`APP is running on port:${port}`);
})