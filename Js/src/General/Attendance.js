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
 * Complete the 'is_employee_coverage_healthy' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY requests
 *  2. INTEGER N
 *  3. INTEGER M
 */

function atleast_m_employees_available(requests, N, M) {
    let lookup = getLookup(requests);
    console.log(lookup);
  var available = true;  
  for(let item in lookup){
      if(!lookup.hasOwnProperty(item))
        continue;
     
     if(lookup[item] &&  (N - lookup[item]) < M)
     {
         available = false;
         break;
     } 
  }
    
 return available;
}

const getLookup = function(requests){
    let lookup =  {};
     for(let i = 0; i < requests.length; i++){
         for(let j = requests[i][0]; j < requests[i][1]; j++){
             if(typeof lookup[j] === 'undefined'){
                 lookup[j] = 0;
             }
             lookup[j] += 1; 
         }
    }
    
    return lookup;
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const requestsRows = parseInt(readLine().trim(), 10);

    const requestsColumns = parseInt(readLine().trim(), 10);

    let requests = Array(requestsRows);

    for (let i = 0; i < requestsRows; i++) {
        requests[i] = readLine().replace(/\s+$/g, '').split(' ').map(requestsTemp => parseInt(requestsTemp, 10));
    }
    console.log(requests);
    const N = parseInt(readLine().trim(), 10);

    const M = parseInt(readLine().trim(), 10);

    const result = atleast_m_employees_available(requests, N, M);
    
    ws.write((result ? 1 : 0) + '\n');

    ws.end();
}


