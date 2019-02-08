'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const epsilonGreedyAlgorithm_1 = require("./epsilonGreedyAlgorithm");
const randomize_1 = require("./randomize");
const test = new epsilonGreedyAlgorithm_1.Epsilon(0.2, 2);
// for(let i = 0; i < 1000; i++){
//    let armchosen = test.spinForArm();
//    test.updateRewardsForArm(armchosen, Math.random())
// }
// test.show();
// let degreeOfArray = new DegreeOfArray();
// console.log(degreeOfArray.findMaxFrequecyWithLeastDistance([0,1,0,0,1,1,0]));
let input = [2, 4, 5, 6];
let randomObj = new randomize_1.Randomize(input);
randomObj.randomizeInPlace();
console.log(input);
//# sourceMappingURL=test.js.map