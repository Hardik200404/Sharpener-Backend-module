let path=require('path')
let root_dir=require('../utils/path')

let products=[]

exports.add_product_get=(req,res)=>{
    res.render('../views/add-product', {
        path: '/admin/add-product',
    });
}

exports.add_product_post=(req,res)=>{   
    products.push({ title: req.body.title });
    console.log(products)
    res.redirect('/shop');
}

exports.shop=(req,res)=>{
    res.render('../views/shop', {
        prods: products,
        path: '/shop',
    });
}