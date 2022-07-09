(function(){
'use strict';

class Stack{
    constructor(){
        this.arr = [];
    }

    push(item){
       this.arr.push(item);
    }
    
    get length(){
        return this.arr.length;
    }
    pop(){
     if(this.arr.length === 0)  
      throw new Error("stack underflow");

      return this.arr.splice(this.arr.length-1,1)[0];
    }
}

module.exports = Stack;
})();
