(function(){
const alphabetslookup = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const  decode= function(input){
   const inputSplit = input.toString().split('');

   return combinations(inputSplit);
};

const combinations = function(inputSplit){
   if(!inputSplit || inputSplit.length < 1)
      return null;

   const twoLetters = inputSplit.length > 1 ? alphabetslookup[Number.parseInt(inputSplit[0].toString()+inputSplit[1].toString())-1] : null;
   const oneletter =  alphabetslookup[inputSplit[0]-1];
   
   const withTwoLettersChosen = combinations(inputSplit.slice(2,4));
   const withOneLetterChosen = combinations(inputSplit.slice(1,inputSplit.length));
   const result = [];

   if(inputSplit.length == 2 && typeof(twoLetters) !== 'undefined' && twoLetters !== ''){
       result.push(twoLetters);
   }

   if(inputSplit.length == 1 && typeof(oneletter) !== 'undefined' && oneletter !== ''){
    result.push(oneletter);
   }
   if(withTwoLettersChosen && withTwoLettersChosen.length > 0){
       for(let item of withTwoLettersChosen){
          result.push(twoLetters+item);
       }
   }
   if(withOneLetterChosen && withOneLetterChosen.length > 0){
    for(let item of withOneLetterChosen){
       result.push(oneletter+item);
    }
}

    if(result.length > 0)
      return result;

      return null;  
};

module.exports = decode;
})();