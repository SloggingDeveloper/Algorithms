(function(){

function FormTree(inorder, preorder){
    return getTree(preorder, inorder, {currentRootIndex: 0});
}

var getTree = function(preorder, tree, pointer){

    if(pointer.currentRootIndex >= preorder.length)
        return null;
   
    if(!tree)
     return null;

    let rootElement =  preorder[pointer.currentRootIndex];

    let indexInTree = tree.indexOf(rootElement);
    
    if(indexInTree < 0)
    return null;   

    let left = tree.slice(0,indexInTree == 0 ? 1 : indexInTree);
    let right = tree.slice(indexInTree+1, tree.length);     
    
    pointer.currentRootIndex += 1;
    var leftTree = getTree(preorder, left, pointer);
    var rightTree = getTree(preorder, right, pointer);

    return new Tree(rootElement, leftTree, rightTree);
};

function Tree(root, left, right){
    this.root = root;
    this.left = left;
    this.right = right;
}

module.exports = FormTree;    
})();