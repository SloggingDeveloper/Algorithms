(function(){

    const removeDuplicates = function(sortedArr){
       
        for(let i = 0; i < sortedArr.length -1; i++){

            if(sortedArr[i] === sortedArr[i+1])
              sortedArr.splice(i+1, 1);
        }
        return sortedArr;
    };

    module.exports = removeDuplicates;
})();