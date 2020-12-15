'use strict';

(function(){

const findAllCombination = function(word){
    return permute(word, 0, 0);
};

const permute = function(word, index, count){
    if(word === undefined || word.length === 0){
        console.log('');
        return 0;
    }
  
    if(word[index + 1] === undefined)
    {
         count = count + 1;
        console.log(word);
        
        return count;
    }
    
     for(let i = index; i < word.length; i++){
       let wordCopy = word.split('');
        let temp = wordCopy[i];
        wordCopy[i] = wordCopy[index];
        wordCopy[index] = temp; 
        count = permute(wordCopy.join(''), index + 1, count);
     }
    
    return count;
};

    module.exports = findAllCombination;
})();