let path=require('path')
let root_dir=require('../utils/path')

exports.contact_us=(req,res)=>{
    res.sendFile(path.join(root_dir,'/views/contact-us.html'))
}

exports.success=(req,res)=>{
    console.log(req.body)
    res.send("Form successfuly filled")
}