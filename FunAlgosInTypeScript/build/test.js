'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const epsilonGreedyAlgorithm_1 = require("./epsilonGreedyAlgorithm");
const test = new epsilonGreedyAlgorithm_1.Epsilon(0.2, 2);
for (let i = 0; i < 1000; i++) {
    let armchosen = test.spinForArm();
    test.updateRewardsForArm(armchosen, Math.random());
}
test.show();
//# sourceMappingURL=test.js.map