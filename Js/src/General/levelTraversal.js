(function () {

    function Tree(node, left, right) {
        this.node = node;
        this.left = left;
        this.right = right;
    }
    function getLevelTraversal(tree) {
        var result = [];
        traverseLevel(tree,0, result);
        return result;
    }

    function traverseLevel(tree, level, result) {

        if (!tree || typeof tree.node === 'undefined' )
            return;

        result[level] = result[level] || [];

        result[level].push(tree.node);

        if (tree.left)
         traverseLevel(tree.left, level + 1, result);

         if (tree.right)
         traverseLevel(tree.right, level + 1, result);

    }

    module.exports.getLevelTraversal = getLevelTraversal;
    module.exports.Tree = Tree;
})();