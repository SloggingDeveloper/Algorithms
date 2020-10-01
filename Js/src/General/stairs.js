(function(){
 function waysToReachTopOfStair1Or2Steps(totalStairs){
    return waysToReach(totalStairs-2) + waysToReach(totalStairs-1);
 }

 function waysToReach(totalStairs){
     if(totalStairs===1)
     return 1;

     if(totalStairs===2)
       return 2;

       return waysToReach(totalStairs-2) + waysToReach(totalStairs-1);
 }

 module.exports = waysToReachTopOfStair1Or2Steps;
})();