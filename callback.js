// a callback is a function for some  other function to run
// a function to be called by another function

// In JS functions are first class objects
// That means you can do almost anythign with a function that you can do with any object
// pass them around
// assign it to a variable
// overwrite it

function x(){};

// console.log(typeof(x));

const myFunction = function(n){
    console.log(n);
}

// console.log(myFunction);

function otherFunction(callback){
    callback(5);
}

otherFunction(myFunction);

$.getJSON(url,(data)=>{

});

window.$ = {};

$.getJSON = function(url,callback){
    // jquery does something cool with the url (xmlhttprequest)
    // it gets some data back
    // it calls the data mydata
    callback(myData);
}


const http = {};

http.createServer = function(callback){
    // handle the http traffic
    // do a bunch of networking stuff
    // now I'm done and i have a req bject and a res object
    // can I can get that code you wanted me to run?
    callback(req,res);
};