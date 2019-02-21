'use strict';

(function(){

    function Queue(size){
       this._arr = [];
       this._size = size;
       
       this.enQueue = function(element){
        if(this._arr.length === this._size)
        throw 'queue reached max capacity';

        this._arr.push(element);        
       };

       this.deQueue = function(){
        if(this._arr.length === 0)
        throw 'queue is empty';         
        return this._arr.splice(0, 1)[0];        
       };
    }

 module.exports = Queue;   
})();