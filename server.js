// we dont need npm to install http because it's native

const http = require("http");

// console.log(http);

// createServer takes 1 argument
// a callback function to run when someone makes 
// an http connection to run this program
// req object and res object

const server = http.createServer((req,res)=>{
    console.log("someone hit our http server");
    res.end("<h1>I went to Monday Night Garage</h1>")
    res.end("<h1>Go Champs!</h1>");
});

server.listen(3000);