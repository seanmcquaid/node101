function printFunction(n){
    console.log(n);
}

function parameterFunction(callback){
    if(Array.isArray(callback) == true){
        console.log(callback[0]);
    } else if (typeof callback == "function"){
        return callback("this is a function!!!")
    } else {
        console.log((callback));
    }
    // if callback typeof then return callback(datatype);
}

const array = [1,2,3,4];

parameterFunction(array);
parameterFunction(printFunction);
parameterFunction("hello");