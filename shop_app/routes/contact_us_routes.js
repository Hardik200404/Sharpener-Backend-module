let contact_us_controllers=require('../controllers/contact_us_controller')

module.exports=function(app){
    app.get('/contact-us',contact_us_controllers.contact_us),
    app.post('/success',contact_us_controllers.success)
}