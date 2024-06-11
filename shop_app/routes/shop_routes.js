let path=require('path')
let root_dir=require('../utils/path')

module.exports=function(app){
    app.get('/shop',function(req,res,next){
        res.sendFile(path.join(root_dir,'/views/shop.html'))
    })
}