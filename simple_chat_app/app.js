const express=require('express');
const app=express();

app.use(express.urlencoded({ extended: true }))

require('./routes/chat_route')(app)
require('./routes/login_route')(app)

app.listen(3000)