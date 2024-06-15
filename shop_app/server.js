const express=require('express');
const path = require('path')

const app=express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'public')))

require('./routes/admin_routes')(app)
require('./routes/shop_routes')(app)
require('./routes/contact_us_routes')(app)

let port=4000

//home
app.get('/',function(req,res,next){
    res.send("Hello World")
})

app.use((req,res)=>{
    res.render('page-not-found')
})

app.listen(port,()=>{
    console.log(`APP is running on port:${port}`);
})