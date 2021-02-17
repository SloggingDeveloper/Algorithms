(function(){
'use strict';

const getMaxArea = function(input){
   
    let stack =  [],  maxArea=0, currentStackTop=-1, i =0;
    for(i = 0; i < input.length;i++){
       if(stack.length === 0){
           stack.push(i);
           continue;
       }
       
       currentStackTop = stack.length-1;
       if(input[stack[currentStackTop]] <= input[i]){
           stack.push(i);
           continue;
       }
       
       while(currentStackTop >=0 && input[stack[currentStackTop]] > input[i]){       
        const topElementIndex = stack.pop();     
        currentStackTop = stack.length-1;
        const area = input[topElementIndex]*(i-topElementIndex);        
        if(maxArea < area)
           maxArea = area;
       }
       
        stack.push(i);
    }
    
    i--;
    if(stack.length > 0){
        const topElementIndex = stack.pop();
        const area = input[topElementIndex]*(i-topElementIndex+1);
       
        if(maxArea < area)
            maxArea = area;         
    }

    return maxArea;

};

module.exports = getMaxArea;
})();