/*
 Imperative
 ======================*/

 var data = [1,1,3,5,5];

 var total = 0;
 for(var i=0; i<data.length; i++){
     total += data[i];
 }
 var mean = total/data.length;
 
 var total = 0;
 for(var i=0; i<data.length; i++){
     
     var deviation = data[i] - mean;
     total += deviation * deviation;
 }
 var stddev = Math.sqrt(total/(data.length - 1));
 
 
 /*
  Declarative/Functional 
  ===========================*/
  
 var sum = function(x,y) { return x+y };
 var square = function(x,y) { return x*y };
 var data = [1,1,3,5,5];
 console.log(data.reduce(sum));
 
 var mean = data.reduce(sum)/data.length;
 var deviation = data.map(function(x){ return x-mean; });
 var stddev = Math.sqrt(deviation.map(square).reduce(sum)/(data.length-1));
 