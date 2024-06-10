let path=require('path')
module.exports=function(app){
    app.get('/login',(req,res)=>{
        res.sendFile(path.join(__dirname,'../','/views/login.html'))
    })
}