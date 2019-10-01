/*
    Revealing Module Pattern
    ============================*/


// Ex 1    
var myRevealingModule = function(){
    var privateVar = "Ben Cherry", publicVar = "Hey there!";

    function privateFunction(){
        console.log("Name:"+privateVar);
    }

    function publicSetName(strName){
        privateName = strName;
    }

    function publicGetName(){
        privateFunction();
    }

    // Reveal public pointers to
    // private functions and properties

    return{
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };

}();

myRevealingModule.setName("Paul Kinlan");



// Ex 2
var myRevealingModule2 = function(){
    var privateCounter = 0;

    function privateFunction(){
        privateCounter++;
    }

    function publicFunction(){
        publicIncrement();
    }

    function publicIncrement(){
        privateFunction();
    }

    function publicGetCount(){
        return privateCounter;
    }

    // Reveal public pointers to private functions and properties

    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };
}();

myRevealingModule2.start();

