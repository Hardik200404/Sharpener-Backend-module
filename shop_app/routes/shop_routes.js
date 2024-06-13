let controllers=require('../controllers/products_controller')

module.exports=function(app){
    app.get('/shop',controllers.shop)
}