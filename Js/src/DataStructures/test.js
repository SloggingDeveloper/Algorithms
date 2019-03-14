'use strict';

const hash = require('./hashTable');

var hashTable = new hash.HashTable(20);
const keys = [];
try{
for(let i = 0; i < 20; i ++){
   let key = Math.floor(Math.random()*1000);
   keys.push(key);
   hashTable.insert(key, 100);
}

console.log(hashTable._hashTable);
console.log(hashTable._hashTable.length);
console.log(`key ${keys[15]} found in index ${hashTable.search(keys[15])}`);
}

catch(e){
    console.log(hashTable._hashTable.length);
    console.log(hashTable._size);
    console.log(hashTable._hashTable);
    if(e instanceof hash.HashTableError){
        console.log(e.message);
    }
}