/* 
  Method Chaining
  ====================*/
  
  var obj = (function(){

    var counter = 0;

    return{
        inc : function(){
            counter++;
            return this;
        },
        dec : function(){
            counter--;
            return this;
        },
        reset : function(){
            counter = 0;
        },
        print : function(){
            console.log(counter);
        }
    }

})();

console.log(obj.inc().inc().print());