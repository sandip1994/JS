/* Class-base 
================= */

class Test_1{
    test1(){
        return "test1";
    }
}

class Test_2 extends Test_1{
    test2(){
        return "test2";
    }
}

class Test_3 extends Test_2{
    test3(){
        return "test3";
    }
}

console.dir(new Test_3());

/* Function-base
=================*/

function Test1(){
    this.test1_prop = "A1";
}
Test1.prototype.test1 = function(){
    return "test1";        
}


function Test2(){
    this.test2_prop = "A2";
}
Test2.prototype = Object.create(Test1.prototype);
Test2.prototype.constructor = Test1;
Test2.prototype.test2 = function(){
    return "test2";        
}


function Test3(){
    this.test3_prop = "A3";
}
Test3.prototype = Object.create(Test2.prototype);
Test3.prototype.constructor = Test2;
Test3.prototype.test3 = function(){
    return "test3";
}

console.dir(new Test3());


/* Object Literals
===================*/

let toyota = {
    drive(){
        return "driving toyota";
    }
}

let camry = {
    wifi(){
        return "using wifi";
    }
}

Object.setPrototypeOf(camry, toyota);
console.log(camry);
console.log(camry.drive());
console.log(camry.wifi());

toyota.newMethod = function(){
    return "new method from toyoto";
}
console.log(camry);