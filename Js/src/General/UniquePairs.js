'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. INTEGER k
 */

function countPairs(numbers, k) {
   
   const lookup = getLookup(numbers);
   let uniquePairs = 0;
   for(let item in lookup){
       if(lookup.hasOwnProperty(item)){
           let valueToCheck = Number.parseInt(item) + k;
           if(lookup.hasOwnProperty(valueToCheck)){
               uniquePairs++;
           }
       }
   }
   
   return uniquePairs;
}

const getLookup = function(numbers){
    let obj = {};   
    for(let i = 0; i  < numbers.length; i++){
        if(typeof obj[numbers[i]] === 'undefined'){
            obj[numbers[i]] = 0;
        }
    }    
    return obj;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numbersCount = parseInt(readLine().trim(), 10);

    let numbers = [];

    for (let i = 0; i < numbersCount; i++) {
        const numbersItem = parseInt(readLine().trim(), 10);
        numbers.push(numbersItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = countPairs(numbers, k);

    ws.write(result + '\n');

    ws.end();
}
