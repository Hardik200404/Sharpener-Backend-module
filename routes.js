const fs = require('fs')
function request_handler(req,res){
    let url=req.url
    let method=req.method

    if(url==='/'){
        let body=fs.readFileSync('message.txt',{ encoding: 'utf8', flag: 'r' })
        
        let html=`
            <!DOCTYPE html>
            <html>
            <head><title>enter message</title></head>
            <body>
                <p>${body}</p>
                <form action='/message' method='POST'>
                    <input type='text' name='message'></input>
                    <button type='submit'>Submit</button>
                </form>
            </body>
            </html>
            `
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html)
        return res.end()
    }
    if(url==='/message' && method==='POST'){
        let body=[]
        req.on('data',(chunk)=>{
            body.push(chunk)
        })
        req.on('end',()=>{
            let parsed_message=Buffer.concat(body).toString()
            let message=parsed_message.split('=')[1]
            console.log(message)
            fs.writeFileSync('message.txt',message)
        })
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end()
    }

    res.end('Hello')

}

module.exports=request_handler