const express=require('express');
const app=express();

app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


require('./routes/chat_route')(app)
require('./routes/login_route')(app)

app.listen(3000)