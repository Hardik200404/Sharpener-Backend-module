let path=require('path')
let root_dir=require('../utils/path')

module.exports=function(app){
    app.get('/admin/add-product',(req,res)=>{
        res.sendFile(path.join(root_dir,'/views/add-product.html'))
    }),
    app.post('/admin/add-product',(req,res)=>{
        console.log("'",req.body.product,"' Added as Product")
        console.log("With Size: ",req.body.size)
        res.statusCode=302
        res.setHeader('Location','/admin/add-product')
        return res.end()
    })
}