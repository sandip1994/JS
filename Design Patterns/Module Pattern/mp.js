/* 
Part 1
Object Literals 
=====================*/

var myModule = {
    myProperty: "someValue",
    myConfig: {
        useCaching: true,
        language: "en"
    },
    myMethod: function(){
        console.log("Where in the world is Paul Irish today?");
    },
    myMethod2: function(){
        console.log("Caching is:" + (this.myConfig.useCaching) ? "enabled" : "disabled");
    },
    myMethod3: function(newConfig){
        if(typeof newConfig == "object"){
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

//outputs: Where is the world is Paul ....
myModule.myMethod();

//outputs: enable
myModule.myMethod2();

//outputs: fr
myModule.myMethod3({
    language: "fr",
    useCaching: false
})


/* Module Pattern
========================*/

var testModule = (function(){
    var counter = 0;

    return {
        incrementCounter: function(){
            return ++counter;
        },
        resetCounter: function(){
            console.log("counter value prior to reset: "+ counter);
            counter = 0;
        }
    };
})();

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset 
// Outputs: 1
testModule.resetCounter();


// Ex 2
var myNamespace = (function(){
    // A private counter variable
    var myPrivateVar = 0;

    // A private function which logs any arguments
    var myPrivateMethod = function(foo){
        console.log(foo);
    };

    return{
        // A public variable
        myPublicVAr: "foo",

        // A public function utilizing privates
        myPulicFunction: function(bar){

            // Increment our private counter
            // myPrivateVar++;

            // Call our private method using bar
            myPrivateMethod(bar)
        }
    }

})();

myNamespace.myPulicFunction("hell");

// Ex 3

var basketModule = (function(){

    // Privates
    var basket = [];

    function doSomethingPrivate(){
        console.log("Doing something in private");
    }

    function doSomethingElsePrivate(){

    }

    // Return an object exposed to the public
    return {

        // Add items to our basket
        addItem: function(values){
            basket.push(values);
        },

        // Get the count of items in the basket
        getItemCount: function(){
            return basket.length;
        },

        // Public alias to a private function
        doSomething: doSomethingPrivate,

        // Get the total value of items in the basket
        getTotal: function(){
            var itemCount = this.getItemCount(),total = 0;
            while(itemCount--){
                total += basket[itemCount].price;
            }
            return total;
        }
    };
})();

// basketModule return an object with public API we can use

basketModule.addItem({
    item: "bread",
    price: 0.5
});

basketModule.addItem({
    item: "butter",
    price: 0.3
});

// Outputs: 2
console.log(basketModule.getItemCount());

// Outputs: 0.8
console.log(basketModule.getTotal());

// However, the following will not work:

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our the public API
// console.log(basketModule.basket);

// This also won't work as it only exists within the scope of our
// basketModule closure, but not the returned public object
// console.log(basket);
