(function(){

function findMaxStockProfitForTwoPurchase(list){
let maxArr = [0,0];

if(!list || !list.length || list.length < 2 )
   return 0;

let min = a[0];
let max = a[0];
for(let i =1; i < list.length; i++){
    if(a[i] >= max){
        max = a[i];
    }
    else{
        let profit = max - min;
       if(maxArr[1] < profit)
       {           
           maxArr[0] = maxArr[1];
           maxArr[1] = profit;
       }
       else if(maxArr[0] < profit){
           maxArr[0] = profit;
       }
       max = min = a[i];
    }
}
  return maxArr[0] + maxArr[1];
}
module.exports = findMaxProfitForTwoPurchase    
});