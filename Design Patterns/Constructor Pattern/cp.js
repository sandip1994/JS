// Part 1- Object Creation

// Create a new empty object
var newObject = {};
// Or
var newObject = new Object();

/* 1. Dot syntax
******************/

// Set properties
newObject.someKey = "Hello World";

// Get properties
var key = newObject.someKey;

/* 2. Square bracket syntax
*******************/

// Set properties
newObject["someKey"] = "Hello World";

// Get properties
var key = newObject["someKey"];

/* 3. Object.defineProperty
********************/

// Set Properties
Object.defineProperty(newObject,"someKey",{
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});

// Or
var defineProp = function(obj, key, value){
    config.value = value;
    Object.defineProperty(obj, key, config);
}

var person = Object.create(null);
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

/* 4. Object.defineProperties
**********************/

// Set properties
Object.defineProperties( newObject, {
    "someKey":{
        value: "Hello World",
        writable: true
    },
    "":{
        value: "Foo bar",
        writable: false
    }
});

// Usage:
var driver = Object.create(person);
defineProp(driver, "topSpeed", "100mph");

// Get an inherited property
console.log(driver.dateOfBirth);

// Get the property we set 
console.log(driver.topSpeed)


// Part 2 - Basic Constructors

function Car(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function(){
        return this.model + " has done " + this.miles + " miles";
    }
}

// Usage:
var civic = new Car("Honds Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 50000);

console.log(civic.toString());
console.log(mondeo.toString());


// Part 3 - Constructor with Prototypes

function Car(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.test = function(){
        return "hello";
    }
}

Car.prototype.toString = function(){
    return this.model + " has done " + this.miles + " miles";
}
Car.prototype.toTest = function(){
    return this.test();
}

// Usage:
var civic = new Car("Honds Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 50000);

console.log(civic.toString());
console.log(mondeo.toString());