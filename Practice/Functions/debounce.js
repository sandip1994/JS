let counter = 0;
const getData = () => {
  var str = document.getElementById("search").value
  console.log("Fetching data...", str,counter++);
}

const debounce = function (fn, d){
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {  
        fn.apply(this, []);
    }, d);
  }
}

const reduceExecution = debounce(getData, 300);
// const reduceExecution = getData