let Product=require('../models/product_model')

exports.add_product_get=(req,res)=>{
    res.render('../views/add-product', {
        path: '/admin/add-product',
    });
}

exports.add_product_post=(req,res)=>{   
    let new_product=new Product(req.body.title)
    new_product.save()
    res.redirect('/shop');
}

exports.shop=(req,res)=>{
    Product.fetch_all((products)=>{
        res.render('../views/shop', {
            prods: products,
            path: '/shop',
        });
    })
}