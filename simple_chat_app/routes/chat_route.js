let fs=require('fs')
let path=require('path')
module.exports=function(app){
    app.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'../','/views/message.html'))
    }),
    app.get('/chats',(req,res)=>{
        let body,html
        if(fs.existsSync('./chat.txt')){
            body=fs.readFileSync('./chat.txt',{ encoding: 'utf8', flag: 'r' })
        }else{
            body='No Chats To Show'
        }
        res.render('../views/chat',{content:body})
    }),

        // html=`
        // <!DOCTYPE html>
        // <html>
        // <head><title>enter message</title></head>
        // <body>
        //     <p>${body}</p>
        //     <form action='/' method='POST'>
        //         <input type='text' name='message' placeholder='Enter Message'></input>
        //         <button type='submit'>Submit</button>
        //     </form>
        // </body>
        // <header>
        //     <nav>
        //         <ul>
        //             <li><a href="/login">Login</a></li>
        //         </ul>
        //     </nav>
        // </header>
        // </html>
        // `
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write(html)
        // return res.end()
    app.post('/submit-form',(req,res)=>{
        //console.log(req.body)
        let message=req.body.message
        fs.writeFileSync('./chat.txt',message)
        res.statusCode=302
        res.setHeader('Location','/chats')
        return res.end()  
    })
}