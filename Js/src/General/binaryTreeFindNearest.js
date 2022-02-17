(function () {

    const findNearest = function (tree, value) {
        return getNearest(tree, value);
    };

    const getNearest = function (tree, value) {
        if (!tree)
            return null;

        let nearest = tree.value;
        let leftNearest = getNearest(tree.left, value);
        let rightNearest = getNearest(tree.right, value);        
        nearest = getNearestValue(value, leftNearest, nearest);
        return getNearestValue(value, rightNearest, nearest);        
    };

    const getNearestValue = function (value, toCompare, currentNearest) {
        if (toCompare === null)
            return currentNearest;

        return Math.abs(value - toCompare) < Math.abs(value - currentNearest)
            ? toCompare : currentNearest;
    };

    module.exports = findNearest;
})();