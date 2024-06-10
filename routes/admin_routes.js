module.exports=function(app){
    app.get('/admin/add-product',(req,res)=>{
        let html=`
        <!DOCTYPE html>
        <html>
        <head><title>enter message</title></head>
        <body>
            <form action='/admin/add-product' method='POST'>
                <input type='text' name='product'></input>
                <input type='text' name='size'></input>
                <button type='submit'>Submit</button>
            </form>
        </body>
        </html>
        `
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html)
        return res.end()
    }),
    app.post('/admin/add-product',(req,res)=>{
        console.log("'",req.body.product,"' Added as Product")
        console.log("With Size: ",req.body.size)
        res.statusCode=302
        res.setHeader('Location','/admin/add-product')
        return res.end()
    })
}