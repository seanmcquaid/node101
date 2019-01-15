const http = require("http");
// fs = file system
const fs = require("fs");


// req = what the browser is asking
// res = the thing we use to talk back to the browser
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        console.log("someone requested this page")
        console.log(req.url);
        res.writeHead(200,{"content-type": "text/html"});
        const homePageHTML = fs.readFileSync("homePage.html");
        res.end(homePageHTML);
    } else if (req.url === "/scripts.js"){
        res.writeHead(200,{"content-type": "text/javascript"});
        const scriptFile = fs.readFileSync("/scripts.js");
        res.end(scriptFile);
    } else{
        res.writeHead(404, {"content-type": "text/html"});
        res.end("This page does not work")
    }
});

server.listen(3030);