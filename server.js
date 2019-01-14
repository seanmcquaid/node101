// we dont need npm to install http because it's native

const http = require("http");

// console.log(http);

// createServer takes 1 argument
// a function to run when someone makes 
// an http connection to run this program

const server = http.createServer((req,res)=>{
    console.log("someone hit our http server");
});

server.listen(3000);

