'use strict';

export class MathUtil {
    static randomize(startNumber: number, endNumber : number){
        console.log('random:' + Math.random())
         return startNumber + Math.floor(Math.random() * (endNumber - startNumber + 1));
    }
}

export class Randomize {
    _input : number[];

    constructor(input : number[]){
        this._input = input;
    }

    randomizeInPlace(){
        
        for(let i = 0; i < this._input.length - 1; i++){                    
             let index = MathUtil.randomize(i + 1, this._input.length - 1);
             console.log(index);  
             let temp = this._input[index];
             this._input[index] = this._input[i];
             this._input[i] = temp;
        }
    }
}