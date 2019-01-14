'use strict';

import {Epsilon} from './epsilonGreedyAlgorithm';

const test = new Epsilon(0.2, 2);

for(let i = 0; i < 1000; i++){
   let armchosen = test.spinForArm();
   test.updateRewardsForArm(armchosen, Math.random())
}

test.show();