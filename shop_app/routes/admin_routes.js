let product_controllers=require('../controllers/products_controller')

module.exports=function(app){
    app.get('/admin/add-product',product_controllers.add_product_get),
    app.post('/admin/add-product',product_controllers.add_product_post)
}