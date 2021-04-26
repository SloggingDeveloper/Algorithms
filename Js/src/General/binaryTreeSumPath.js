(function () {
    'use strict';
    const pathExists = function (tree, total) {
        if (!tree || tree.value === null)
            return total === 0;

        let remainingTotal = total - tree.value;     
       return pathExists(tree.left, remainingTotal) ||
        pathExists(tree.right, remainingTotal);
    };



    module.exports = pathExists;
})();