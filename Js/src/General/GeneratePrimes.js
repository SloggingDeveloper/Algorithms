//seivies of erosthonas

(function(){
 const count = Math.floor(100/(Math.log(100)));

 function generateNPrimes(total){
    const range = getRange(total);
    const primeNumbers = [2];
    const arr = [{value:0, marked: true}, {value:1, marked: true},{value:2, marked: true}];
    for(let i = 3; i <= range;i++){
       arr.push({value:i, marked: false});
    }
    
    
        for(let j= 3; j < arr.length; j++){
            if(!arr[j].marked){
                primeNumbers.push(arr[j].value);
            }
            for(let k = j+1; k < arr.length; k++){
                 if(k%j === 0)
                    arr[k].marked= true;
            }
        }
     return primeNumbers.slice(0, total);
 }

 function getRange(total){
    let expectedFactor  = Math.ceil(total/count);
    let expectedRange = 100;
    if(expectedFactor > 1){
       expectedRange = expectedRange +  Math.ceil(100*expectedFactor); 
    }

    return expectedRange;
 }

 module.exports = generateNPrimes;
})();