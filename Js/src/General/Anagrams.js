'use strict';
const getPrimes = require('./GeneratePrimes');
(function(){
    const charToPrimeMap = (function(){
        const primes = getPrimes(26);
        const map = {};
        for(let i =97; i<=122; i++){
            map[String.fromCharCode(i)] = primes[i-97];
        }
        console.log(map);
        return map;
    })();     
    function findAnagrams(arr){
        var hashes = {};
        var distinctHashes = [];
        for(let i = 0; i < arr.length; i++){
            var hash = getHashcode(arr[i]);
            if(hashes[hash] === undefined){
                hashes[hash] = {};
                hashes[hash].count = 0;
                hashes[hash].value = [];
                distinctHashes.push(hash);
            }
            hashes[hash].count++;
            hashes[hash].value.push(arr[i]);
        }

        return hashes;
    }
   
    function getHashcode(str){
        let hash = 1;       
        for(let i =0; i < str.length;i++){
            hash = hash * charToPrimeMap[str[i]];
        }
        return hash;
    }

    module.exports = findAnagrams;

})();