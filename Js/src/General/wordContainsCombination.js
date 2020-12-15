(function(){
    'use strict';
  const find = function(main, sub){
    
    if(sub.length > main.length)
      return 0;

    const match = initializeMatch(sub.length);
    
    for(let i = 0; i < main.length; i++){
        for(let j = sub.length; j >0; j--){
            if(main[i] === sub[j-1]){
                match[j]+= match[j-1];
            }
        }
    }

    return match[sub.length];

  };
  
  const initializeMatch = function(size){
    let match = [];
     match[0] = 1;
    for(let i = 1; i <= size; i++){
        match[i] = 0;
    }

    return match;
  };

    module.exports = find;
})();