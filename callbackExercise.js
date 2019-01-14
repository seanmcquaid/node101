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

// parameterFunction(array);
// parameterFunction(printFunction);
// parameterFunction("hello");


function findEvens(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            return array[i];
        } 
    }
}

function findElement(array, callback){
    return callback(array);
}

console.log(findElement([1,3,5,8,9,10], findEvens));