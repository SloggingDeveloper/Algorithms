'use strict';

(function(){

    function Stack(size){
       this._arr = [];
       this._size = size;
       
       this.push = function(element){
        if(this._arr.length === this._size)
        throw 'stack has reached max capacity';

        this._arr.push(element);        
       };

       this.pop = function(){
        if(this._arr.length === 0)
        throw 'stack is empty';
                 
        return this._arr.pop();        
       };
    }

 module.exports = Stack;   
})();