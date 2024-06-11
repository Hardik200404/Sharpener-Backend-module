const express=require('express');
const path = require('path')

const app=express();
app.use(express.urlencoded({ extended: true }))

require('./routes/admin_routes')(app)
require('./routes/shop_routes')(app)
require('./routes/contact_us_routes')(app)

let port=4000

//home
app.get('/',function(req,res,next){
    res.send("Hello World")
})

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views/page-not-found.html'))
})

app.listen(port,()=>{
    console.log(`APP is running on port:${port}`);
})