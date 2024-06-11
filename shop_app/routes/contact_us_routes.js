let path=require('path')
let root_dir=require('../utils/path')

module.exports=function(app){
    app.get('/contact-us',(req,res)=>{
        res.sendFile(path.join(root_dir,'/views/contact-us.html'))
    }),
    app.post('/success',(req,res)=>{
        console.log(req.body)
        res.send("Form successfuly filled")
    })
}