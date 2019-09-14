(function () {    
    var getMaxTheftValue = function (tree) {
        return parseTreeAndFindMax(tree);
    };

    var parseTreeAndFindMax = function(tree){
       var MaxSumOfNodesValueAtEachLevel = [{sum:0, parentValue : 0, maxValue: 0}];
        currentLevel = 0;
      updateDp(MaxSumOfNodesValueAtEachLevel, currentLevel, tree, 0);
      return findMax(MaxSumOfNodesValueAtEachLevel);
    };

    var findMax = function(MaxSumOfNodesValueAtEachLevel){
        if(MaxSumOfNodesValueAtEachLevel.length >= 2){            
            if(MaxSumOfNodesValueAtEachLevel[0].maxValue > MaxSumOfNodesValueAtEachLevel[1].maxValue)
              MaxSumOfNodesValueAtEachLevel[1].maxValue = MaxSumOfNodesValueAtEachLevel[0].maxValue;
        }

       for(var i = 2; i < MaxSumOfNodesValueAtEachLevel.length ;i++){
           var sumOfNonConsecutiveLevel = MaxSumOfNodesValueAtEachLevel[i].sum + MaxSumOfNodesValueAtEachLevel[i-2].maxValue;
           var sumOfCurrent MaxSumOfNodesValueAtEachLevel[i-1].sum - MaxSumOfNodesValueAtEachLevel[i].parentValue;
           
           
            if(sumOfNonConsecutiveLevel > MaxSumOfNodesValueAtEachLevel[i-1].maxValue){
                MaxSumOfNodesValueAtEachLevel[i].maxValue = sumOfNonConsecutiveLevel;
            }
            else{
                MaxSumOfNodesValueAtEachLevel[i].maxValue = MaxSumOfNodesValueAtEachLevel[i-1].maxValue;
            }
       }

       return MaxSumOfNodesValueAtEachLevel[MaxSumOfNodesValueAtEachLevel.length - 1].maxValue;
    };

    var updateDp = function(MaxSumOfNodesValueAtEachLevel, currentLevel, tree, parentValue){
       if(tree === null)
         return;

         if(MaxSumOfNodesValueAtEachLevel[currentLevel] === undefined) 
          MaxSumOfNodesValueAtEachLevel[currentLevel] = {sum: 0, parentValue: parentValue, maxValue: 0};
          
          MaxSumOfNodesValueAtEachLevel[currentLevel].sum += tree.val;       
          MaxSumOfNodesValueAtEachLevel[currentLevel].maxValue = MaxSumOfNodesValueAtEachLevel[currentLevel].sum;

        updateDp(MaxSumOfNodesValueAtEachLevel, currentLevel + 1, tree.left, tree.val);
        updateDp(MaxSumOfNodesValueAtEachLevel, currentLevel + 1, tree.right, tree.val);
    };
    module.exports =  getMaxTheftValue;
})();