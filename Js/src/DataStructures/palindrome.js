

var longestPalindrome = function(s) {
    return findLongestPalindrome(s);
};

var findLongestPalindrome = function(s){

    if(s === undefined || s.length === 0)
    return s;   

    if(s.length  === 1)
    return s[0];
    
    return search(s);
   
};

var search = function(s){
    var currentPalindrome = {
        value : s[0],
        length : 1,
        hasSameCharacters : true
    };   
   
    var tempString = "";
    var continouslySameCharacters = true;
    var contnouslysamestring = s[0];    
    for(var i = 1; i < s.length; i++){       

        if(continouslySameCharacters && (s[i] ===  s[i-1])){
             var contnouslysamestring = contnouslysamestring + s[i]; 
            if(currentPalindrome.length < contnouslysamestring.length){
                currentPalindrome.length = contnouslysamestring.length;
                currentPalindrome.value = contnouslysamestring;
                currentPalindrome.hasSameCharacters = true;
            }
            continue;
        }

        continouslySameCharacters = false;        
        if(currentPalindrome.hasSameCharacters && (i + 1 - currentPalindrome.length) < currentPalindrome.length){          
           continue;
        }

        tempString = s[i];  
        for(var j = i-1; j >=0;j--){
            tempString = tempString + s[j];

            if(s[j] !== s[i]){               
               continue;
            }
            
            if(currentPalindrome.length <= tempString.length && tempString === s.substring(j,i + 1)){
                currentPalindrome.length = tempString.length;
                currentPalindrome.value = tempString;
                currentPalindrome.hasSameCharacters = false;
            }
        }
    }

    return currentPalindrome.value;
};


console.log(longestPalindrome("cbbd"));