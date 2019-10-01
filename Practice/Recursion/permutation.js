var results = [];
function permutation(input, oldElm = ""){
    for(let i = 0; i < input.length; i++){
        let first = oldElm + input[i] ;
        let rest = getRest(input, i);
        if(rest.length > 2){
            // console.log(first);
            // console.log(rest);
            permutation(rest,first);
        }else{
            const prevElem = first;
            const firstResult = prevElem + rest.join("");
            results.push(firstResult);
            if(rest.length > 1){
                const secondResult = prevElem + rest.reverse().join(""); 
                results.push(secondResult);
                // console.log(secondResult);
            }
            // console.log(firstResult);   
        }
    }
}

function getRest(input,exclude){
    const remainElm = input.filter(function(str,key){
        return key != exclude;
    });
    return remainElm;
}

const input = "abcde";
let inputToArray = input.split("");
permutation(inputToArray);
console.log(results);