let http=require('http')
let request_handler=require('./routes')

let server=http.createServer(request_handler)

server.listen(4000)

