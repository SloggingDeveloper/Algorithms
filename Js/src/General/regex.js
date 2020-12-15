(function () {

    const isSpecficCharRepetition = function (word, index) {
        return (index + 1) <= word.length && word[index] !== '*' && word[index] !== '.' && word[index + 1] === '*';
    };

    const isAnyCharRepitition = function (word, index) {
        return (index + 1) <= word.length && word[index] === '.' && word[index + 1] === '*';
    };

    const isAnySingleChar = function(word, index){
        return (index + 1) <= word.length && word[index] === '.' && word[index + 1] !== '*'
    };


    const isMatch = function (word, regx) {
        var currentWordIndex = 0;
        var currentRegxIndex = 0;
        var canTrackBackWordto = 0;
        var valid = true;

        while (valid && currentRegxIndex < regx.length) {

            if (isSpecficCharRepetition(regx, currentRegxIndex)) {
                 if(regx[currentRegxIndex] === word[currentWordIndex]){
                   let rep =  word[currentWordIndex];
                   while(currentWordIndex < word.length && word[currentWordIndex] === rep){
                    currentWordIndex++;
                   };                    
                 }
                 currentRegxIndex = currentRegxIndex + 2;                
            }

            else if (isAnyCharRepitition(regx, currentRegxIndex)){
                currentRegxIndex = currentRegxIndex + 2;
                currentWordIndex = word.length;
            }

            else if(isAnySingleChar(regx, currentRegxIndex)){
                currentRegxIndex++;
                currentWordIndex++;
                canTrackBackWordto++;
            }

            else
            {
                currentWordIndex = currentWordIndex >= word.length ? word.length - 1 : currentWordIndex;

                    while(currentWordIndex > canTrackBackWordto && regx[currentRegxIndex] !== word[currentWordIndex]){
                        currentWordIndex--;
                    }

                    if(canTrackBackWordto < word.length && word[currentWordIndex] === regx[currentRegxIndex]){                       

                        while(regx[currentRegxIndex] !== word[canTrackBackWordto]){
                            canTrackBackWordto++;
                        }
                        
                        canTrackBackWordto++;
                        currentWordIndex++;
                        currentRegxIndex++;
                    }
                    
                    else{
                        valid = false;
                    }
              
            }
        }

        return valid && currentWordIndex === word.length;
         
    };


    module.exports = isMatch;
})();