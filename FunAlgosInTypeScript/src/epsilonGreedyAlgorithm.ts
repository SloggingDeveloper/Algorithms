'use strict'

export class Epsilon {
    factor: number;
    _arms : number[];
    _armsValues : number[];
    constructor(factor: number, numberofArms: number) {
        this.factor = factor;
        this._arms = [];
        this._armsValues = [];
        for(let i = 0; i < numberofArms; i++){
        this._arms.push(0);
        this._armsValues.push(0);
        }
    }

    spinForArm(){
      if(Math.random() > this.factor){
        return this._armsValues.indexOf(Math.max(...this._armsValues)) + 1;
      }

      return Math.round(Math.random()*(this._arms.length -1)) + 1;
      
    }

    updateRewardsForArm(arm : number, rewards: number){
        const currentValueOfArm = this._armsValues[arm-1];
        const currentCount = this._arms[arm-1];

        this._armsValues[arm-1] = ((currentCount*currentValueOfArm) + rewards)/(currentCount + 1);
        this._arms[arm-1] += 1;
    }

    show() {
        for(let i = 0; i < this._arms.length; i++){
            console.log(`arm ${i + 1} tested for ${this._arms[i]} with average rewards of ${this._armsValues[i]}`);
        }
    }
}