(function(){

    function inorderTraversal(inputArr){
      return traverse(inputArr, 0, false);
    }

    function traverse(inputArr, curIndex, resetTree){
        
        if(curIndex >= inputArr.length)
          return [];
        
         
          var left = 2*curIndex + 1;
          var right = 2*curIndex + 2;


          var isLeftEmpty = left < inputArr.length && inputArr[left] === '#';
          var isRightEmpty = right < inputArr.length && inputArr[right] === '#';

          if(isLeftEmpty){
            inputArr.splice(left,1);
            return [].concat(inputArr[curIndex]).concat(traverse(inputArr,right-1, true));
          }

           if(isRightEmpty){
            inputArr.splice(right,1);
            return traverse(inputArr,left-1, true).concat(inputArr[curIndex]);
          }

          if(resetTree){
            return traverse(inputArr, curIndex + 1, false).concat(inputArr[curIndex])
            .concat(traverse(inputArr, curIndex + 2, false));
          }
          
           return traverse(inputArr, left, false).concat(inputArr[curIndex]).concat(traverse(inputArr, right, false));
          }
    

    module.exports = inorderTraversal;

})();