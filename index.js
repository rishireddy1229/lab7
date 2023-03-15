//event
console.log("welcome")
const event=require('events');
var a=new event.EventEmitter();
/*const util=require('util');
let person=function(name){
    this.name=name;
}
util.inherits(person,event.EventEmitter);
let cvr=new person("cvr");
let cse=new person("cse");
let people=[cvr,cse];
people.forEach((person)=>{*/
    a.on("someEvent",()=>{
        console.log("emitt")
    })
//})
a.emit("someEvent","fefwergf")


//os
const os=require('os');
console.log(os.arch())
console.log(os.hostname())
console.log(os.freemem())

//file system sync
const fs=require('fs');
fs.writeFileSync("abc.txt","welcome to file system usin sync ")
fs.appendFileSync("abc.txt","how are you")
let d=fs.readFileSync("abc.txt","utf-8")
let d1=fs.readFileSync("abc.txt")
console.log(d1)
console.log(d)

//file system async
fs.readFile("abc.txt","utf-8",(err,data)=>{
    console.log(data)
    fs.writeFile("xyz.txt",data,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("how are you")
        }
    })
})

//streams and buffers
let rs=fs.createReadStream("a.txt","utf-8")
rs.on("data",(chunk)=>{
    console.log("chunk")
});
console.log("end of index")

//web server
/*let http=require('http')
let server=http.createServer((req,res)=>{
    console.log(req.url)
    res.write("welcome to http server");
    res.end();
})
server.listen(3000)
console.log("servr started");*/

const express=require('express')
const app = express(); 
const path = require('path'); 
const router = express.Router(); 
// Setup essential routes 
router.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname + '/index.html')); 
    //__dirname : It will resolve to your project folder. 
}); 
router.get('/about', function(req, res) { 
    res.sendFile(path.join(__dirname + '/about.html')); 
}); 
router.get('/sitemap', function(req, res) { 
    res.sendFile(path.join(__dirname + '/contact.html')); 
}); 
//add the router 
app.use('/', router); 
app.listen(process.env.port || 3000); 
console.log('Running at Port 3000'); 