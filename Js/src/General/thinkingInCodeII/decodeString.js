(function(){
'use strict';
const Stack = require('./stack');
const close = ']';
const open = '[';
const getDecodedString = function(encodedStr){
   //assuming input is aleays valid as per the problem  "3[a2[c]]"
    let decodedstr = '';
    const stack = new Stack();   
    let  currentNumber = '';
    for(let str of encodedStr){
        if(!isNaN(str)){
            currentNumber += str;
            continue;
        }

        if(str === open){            
            stack.push(currentNumber);            
            stack.push(open);
            currentNumber = '';
            continue;
        }

        if(str !== close)
         {
             stack.push(str);
             continue;
         }
         
         decodeAndPushOnClose(stack);
    }

    while(stack.length > 0){
        decodedstr = stack.pop() + decodedstr;
    }
    return decodedstr;

};

const decodeAndPushOnClose = function(stack){
    var repStr = '';      

    while(stack.length > 0){
       const poppedElement = stack.pop();
       if(poppedElement === open){
           let repFormedStr = '';
           let number = Number.parseInt(stack.pop());       
           for(let i = 1; i <= number; i++){
               repFormedStr += repStr;
           }
           stack.push(repFormedStr);     
         break;
       }
      
       repStr = poppedElement + repStr;
    }
};

module.exports = getDecodedString;
})();