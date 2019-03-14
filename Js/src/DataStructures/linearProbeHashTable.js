'use strict';

(function(){

    function HashTable(size){
     this._size = size;
     this._hashTable = [];

     const hashKey = function(key, length){
        const [primeKey, b] = [703, 3];
        return (key + b)%length;   
     };
    
     this.insert = function(key, value){
        let hashValue = hashKey(key, this._size);
        for(let i = 0; i < this._size; i ++){
           hashValue = (hashValue + i)%this._size;
           
            if(!this._hashTable[hashValue]){
               this._hashTable[hashValue] = {key: key, value: value};
               return;
            }
        }

        if(this._hashTable.length === this._size){
             throw new HashTableError("error: no space");
        }
        
             throw new HashTableError($`error: key ${key} already exists`);
    }

    this.search =  function(key){
        let hashValue = hashKey(key, this._size);
        for(let i = 0; i < this._size; i ++){           
            hashValue = hashValue + i;
            if((this._hashTable[hashValue] || {}).key === key){
               return hashValue;
            }
        }
        throw new HashTableError(`could not find key: ${key}`);
    }
}

   function HashTableError(message){
       this.message = message;
   }
     
   module.exports = {HashTable, HashTableError};

})();