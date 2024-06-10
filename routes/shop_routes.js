module.exports=function(app){
    app.get('/shop',function(req,res,next){
        res.send("Welcom to shop")
    })
}