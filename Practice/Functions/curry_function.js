/*
Currying is the process of taking a function with multiple arguments 
and returning a series of functions 
that take one argument and eventually resolve to a value.
*/

// Ex1
function addition(x){
    return function(y){
        return x+y;
    }
}
console.log(addition(4)(5));


// Ex2
function curry(f){
    // console.log(a);
    return function(a){
        return function(b){
            return f(a,b);
        }
    }
}
function sum(a,b){
    return a+b;
}
console.log(curry(sum)(1)(2));


