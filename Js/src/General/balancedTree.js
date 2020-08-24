(function () {
    function Tree(left, right) {
        this.left = left;
        this.right = right;
    }

    function verifyTreeBalnaced(tree) {
        var result = checkTreeBalanced(tree, { depth: -1, notBalanced: false })
        return !result.notBalanced;
    }

    var checkTreeBalanced = function (tree) {

        if (!tree || (!tree.left && !tree.right)) {
            return { depth: 0, notBalanced: false };
        }

        var leftTree;       
        if (tree.left) {
            leftTree = checkTreeBalanced(tree.left);
        }

        if (leftTree && leftTree.notBalanced)
            return leftTree;
        
        var rightTree;
        if (tree.right) {
            rightTree = checkTreeBalanced(tree.right);
        }

        if (rightTree && rightTree.notBalanced)
            return rightTree;


        var diff =  ((leftTree || {}).depth || 0) - ((rightTree || {}).depth || 0);
        if (Math.abs(diff) > 1) {
            return { depth: 0, notBalanced: true };
        }

        if (diff > 0) {
            leftTree.depth = leftTree.depth + 1;
            return leftTree;
        }
        
        var validTree = leftTree || rightTree;

        validTree.depth = validTree.depth + 1;
        return validTree; 
    };

    module.exports = {Tree, verifyTreeBalnaced};    
})();