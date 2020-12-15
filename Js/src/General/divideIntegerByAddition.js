(function(){
 'use strict';

const divide = function(a,b){

    if(a === 0)
      return 0;

    if(b === 0)
      return null;
      
      const sign = (a > 0 ? 1: -1) * (b > 0? 1: -1);
      const aunsigned = a > 0 ? a: -a;
      const bunsigned = b > 0 ? b: -b;

      if(aunsigned < bunsigned)
      return 0;    
     
      if(aunsigned === bunsigned)
       return sign*1;

    let i = 0;
    let divisor = bunsigned;
    let result = 0;
    
    while((aunsigned - divisor) >= 0){
        divisor += bunsigned;
        i++;
    }
    return sign * i;

}

 module.exports = divide;
})();