/* Define your own function property
=====================================*/

callMeInside.outside = "From OUT side!";
function callMeInside(){
    console.log(callMeInside.outside);
}

/* Ex 1 
=================*/

counter.inc = 0;
function counter(){
    counter.inc++;
}
counter.getCounter = function(){
    return counter.inc;    
}

counter();
console.log(counter.getCounter());
counter();
console.log(counter.getCounter());
counter();
console.log(counter.getCounter());


/* Ex 2
=================*/


counter2.inc = 0;
function counter2(){
    counter2.inc++;
    console.log(counter2.inc);
} 

console.log(counter2());
console.log(counter2());
console.log(counter2());




/* Hoisting 
===================*/

//1
console.log(variable); // Output: ReferenceError: variable is not defined


//2
console.log(hoist); // Output: undefined
var hoist = 'The variable has been hoisted.';

//3
var hoist;
console.log(hoist); // Output: undefined
hoist = 'The variable has been hoisted.';



/**
Basically, when Javascript compiles all of your code, 
all variable declarations using var are hoisted/lifted to the top of their 
functional/local scope (if declared inside a function) or 
to the top of their global scope (if declared outside of a function) 
regardless of where the actual declaration has been made. 
This is what we mean by “hoisting”.
*/