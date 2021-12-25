(function () {
    const traverseVerticalLTR = function (tree) {
        const order = {};        
        traverseAndUpdateLookup(tree, order, 0);
        return displayOrder(order);
    };

    const displayOrder = function (order) {
        const result = [];       
        for (let item in order) {
            if (order.hasOwnProperty(item)) {
                result.push(order[item]);
            }
        }
        return result;
    };

    const traverseAndUpdateLookup = function (tree, order, currentPosition) {
        if (!tree || !tree.value)
            return;

        if (!order[currentPosition])
            order[currentPosition] = [tree.value];
        else
            order[currentPosition].push(tree.value);
        
        if (tree.left) {
            traverseAndUpdateLookup(tree.left, order, currentPosition - 1);
        }
        if (tree.right) {
            traverseAndUpdateLookup(tree.right, order, currentPosition + 1);
        }
    };

    module.exports = traverseVerticalLTR;
})();