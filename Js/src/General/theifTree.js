(function(){

 var findMaxTheftValue   = function(tree){
   if(!tree)
    return 0;

   return findMax(tree).maxValue;

 };
 
  var findMax = function(tree){
    if(!tree)
    return {maxValue: 0, childValue: 0, root: 0};

    var root = tree.val;
    var leftTreeMax = findMax(tree.left);
    var rightTreeMax = findMax(tree.right);
    
    var sumOfLeftAndRightTreeMaxValue = leftTreeMax.maxValue + rightTreeMax.maxValue;
    var sumOfLeftAndRightTreeChildValues = leftTreeMax.childValue + rightTreeMax.childValue;
    var rootAndSubsequentChildSum = root + sumOfLeftAndRightTreeChildValues;
  
    var maxValue =  rootAndSubsequentChildSum > sumOfLeftAndRightTreeMaxValue ? rootAndSubsequentChildSum : sumOfLeftAndRightTreeMaxValue;
    return {maxValue: maxValue, childValue: sumOfLeftAndRightTreeMaxValue, root: root}; 
 };


 module.exports = findMaxTheftValue;
})();