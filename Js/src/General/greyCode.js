(function(){
  'use strict';
 
  const generate = function(bits){
    var result = generateBinary(bits);
    var decimalCoverted = [];    
    result.forEach(element => {
        decimalCoverted.push(parseInt(element,2));
    });
    return decimalCoverted;
  }
  const generateBinary = function(bits){
     if(bits < 1)
        return [];

     if(bits === 1){
         return ['0','1']
     }
     
      let bitn = generateBinary(bits-1);
      for(let i=0; i < bitn.length; i++){
           bitn[i] = '0'+bitn[i];
      }
     
      for(let i = bitn.length-1; i >=0; i--){
          const currentValue = bitn[i];
          bitn.push('1'+currentValue.substring(1))
      }
      return bitn;
  };

  module.exports = generate;
})();