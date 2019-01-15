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
        const scriptFile = fs.readFileSync("scripts.js");
        res.end(scriptFile);
    } else if (req.url === "/styles.css"){
        res.writeHead(200,{"content-type": "text/css"});
        const stylesFile = fs.readFileSync("styles.css");
        res.end(stylesFile);
    } else if (req.url.indexOf("monster")){
        res.writeHead(200,{"context-type": "image/png"})
        const imageFile = fs.readFileSynch()
        res.end(imageFile)
    } else{
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("This page does not work")
    }
});

server.listen(3030);