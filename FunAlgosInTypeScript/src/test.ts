'use strict';

import {Epsilon} from './epsilonGreedyAlgorithm';
import {DegreeOfArray} from "./degreeOfArray";
const test = new Epsilon(0.2, 2);

// for(let i = 0; i < 1000; i++){
//    let armchosen = test.spinForArm();
//    test.updateRewardsForArm(armchosen, Math.random())
// }

// test.show();

let degreeOfArray = new DegreeOfArray();

console.log(degreeOfArray.findMaxFrequecyWithLeastDistance([0,1,0,0,1,1,0]));
