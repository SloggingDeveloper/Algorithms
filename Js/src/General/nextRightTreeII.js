(function () {
    'use strict';

    const formRightTree = function (tree) {
        
        if(!tree)
        return tree;

        tree.next = null;       
        construct(tree);
        return tree;
    };

    const construct = function (node) {
        if (!node)
            return;

        if (node.left) {
            node.left.next = node.right ? node.right : null;
        }
       
        let leftSideRightmostNode = getleftSideRightmostNode(node);
        let rightSideLeftMostNode = getrightSideLeftMostNode(node.next);

        if (leftSideRightmostNode !== null) {
            leftSideRightmostNode.next = rightSideLeftMostNode;
        }

        construct(node.left, node);
        construct(node.right, node);
    };

    const getleftSideRightmostNode = function (node) {
        if (!node)
            return null;

        return node.right ? node.right : node.left;
    };

    const getrightSideLeftMostNode = function (node) {
        if (!node)
            return null;

        return node.left ? node.left : node.right;
    };

    module.exports = formRightTree;
})();