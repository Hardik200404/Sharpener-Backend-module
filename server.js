let http=require('http')

let server=http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hi my name is Hardik');
    res.end();
})

server.listen(4000)