let path=require('path')
let root_dir=require('../utils/path')

exports.add_product_get=(req,res)=>{
    res.sendFile(path.join(root_dir,'/views/add-product.html'))
}

exports.add_product_post=(req,res)=>{
    console.log("'",req.body.title,"' Added as Product")
    res.statusCode=302
    res.setHeader('Location','/admin/add-product')
    return res.end()
}

exports.shop=(req,res)=>{
    res.sendFile(path.join(root_dir,'/views/shop.html'))
}