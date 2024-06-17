let fs=require('fs')
let path=require('path')
let root_path=require('../utils/path')
let file_path=path.join(root_path,'data','products.json')

module.exports = class Product{
    constructor(title){
        this.title=title
    }
    save(){
        //need arrow function, inorder to use this inside it
        let products=[]
        fs.readFile(file_path,(err,file_content)=>{
            if(!err){
                products=JSON.parse(file_content)
            }
            products.push(this)
            fs.writeFile(file_path,JSON.stringify(products),(err)=>{
                console.log(err)
            })
        })
    }
    static fetch_all(callback){
        fs.readFile(file_path,(err,file_content)=>{
            if(err){
                console.log(err,"Sending empty Array")
                return callback([])
            }
            return callback(JSON.parse(file_content))
        })
    }
}