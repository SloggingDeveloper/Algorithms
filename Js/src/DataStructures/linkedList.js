'use strict';

function LinkedList(length){
    this._listKey = [];
    this._listPrev = [];
    this._listNext = [];
    let NIL = -1;

    this._length = length;
    this._freeList = [];
    this._freeListHead = 0;
    this._listHead = NIL;

    for(let i = 0; i < this._length-1; i++){
        this._freeList[i] = i+1;
    }
    this._freeList[this._length - 1] = NIL;

    this.insert = function(key){
       const indexAvailable =allocate(this);
        this._listKey[indexAvailable] = key;
        this._listPrev[indexAvailable] = NIL;
        this._listNext[indexAvailable] = this._listHead;

        if(this._listHead !== NIL)
        this._listPrev[this._listHead] = indexAvailable;

        this._listHead = indexAvailable;        
    };

    this.search = function(key){
       let index = this._listHead; 
       while(index !== NIL && this._listKey[index] !== key){
           index = this._listNext[index];
       }

       if(index !== NIL)
       return index;
       
       return undefined;
    };

    this.remove = function(key){
         const indexForKey = this.search(key);
         if(indexForKey === undefined){
           throw `no element ${key} found`;
         }

         const previousIndexForKey = this._listPrev[indexForKey]
         const nextIndexForKey = this._listNext[indexForKey]

         if(previousIndexForKey !== NIL){
           this._listNext[previousIndexForKey] = nextIndexForKey;
         }

         if(nextIndexForKey !== NIL){
             this._listPrev[nextIndexForKey] = previousIndexForKey;
         }

         if(previousIndexForKey === NIL){
             this._listHead = indexForKey;
         }

         reclaimMemory(this, indexForKey);
    };

    function allocate(that){
      if(that._freeListHead === NIL){
       throw "no memory";
      }
      
     const indexAvailable = that._freeListHead;
     that._freeListHead = that._freeList[that._freeListHead];

     return indexAvailable;
    };

    function reclaimMemory(that, index){
      that._freeList[index] = that._freeListHead;
      that._freeListHead = index;
    }
   
    this.printLinkedList = function(){
        let index = this._listHead;

        while(index !== NIL){
            console.log(`prev: ${this._listPrev[index]} key :${this._listKey[index]} next : ${this._listNext[index]}`);
            index = this._listNext[index];
        }
    }
    
}

module.exports = LinkedList;