let fs=require('fs')
let path=require('path')
module.exports=function(app){
    app.get('/',(req,res)=>{
        let body
        if(fs.existsSync('./chat.txt')){
            body=fs.readFileSync('./chat.txt',{ encoding: 'utf8', flag: 'r' })
        }else{
            body='No Chats To Show'
        }
        res.render('../views/chat',{content:body})
    }),
    app.post('/submit-form',(req,res)=>{
        //console.log(req.body)
        let username=req.body.username
        let message=req.body.message
        let chat_message=username+": "+message+`\n`
        fs.writeFileSync('./chat.txt',chat_message,{flag: 'a'})
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end()  
    })
}