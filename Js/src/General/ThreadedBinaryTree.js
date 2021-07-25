(function(){

    class Tree {
        constructor(value, left, right){
            this.value = value;
            this.left = left;
            this.right = right;
            this.visited = false;
            this.predecessorNode = null;
            this.rightThread = null;           
        }

        _getInorderTreeString(tree, state){           
            if(!tree)
             return state;
           
            state = this._getInorderTreeString(tree.left, state);   
            state = state === '' ? tree.value : `${state}--${tree.value}`;
            state = this._getInorderTreeString(tree.right, state);
        
            return state;
        }

        printInorderTree(){               
            console.log(this._getInorderTreeString(this,''));
        }
        
        
    }
    const  getTraversedTreeList = function(tree){
        let visited = [];
        let currentNode = tree;

       while(currentNode){
         
        if(currentNode.predecessorNode){
            visited.push(currentNode);
            currentNode.predecessorNode.rightThread = null;
            currentNode.predecessorNode = null;       
            currentNode = currentNode.right ? currentNode.right : currentNode.rightThread;
        }

        let predecessor = findPredecessor(currentNode);
        if(predecessor){           
            predecessor.rightThread = currentNode;
            currentNode.predecessorNode = predecessor;
            currentNode = currentNode.left;
            continue;
        }       
           
        visited.push(currentNode);       
        currentNode = currentNode.right ? currentNode.right : currentNode.rightThread;
    }
    return visited;
};

const findPredecessor = function(node){
  let currentPredecessor = node.left;  
    while(currentPredecessor && currentPredecessor.right){
        currentPredecessor = currentPredecessor.right
    }
    return currentPredecessor;
};

const generateTest = function(){
    return new Tree(8, new Tree(1,new Tree(3, null, null), new Tree(4, null, null)), new Tree(14, new Tree(11, null, null), new Tree(15, null, null)));
};

const fixSearchTree = function(tree){
    let traversed = getTraversedTreeList(tree);
    let firstMismatchNode = null;
    let secondMismatchNode = null;
    for(let i = 0; i < traversed.length-1; i++){
       if(traversed[i].value > traversed[i+1].value){
          if(!firstMismatchNode && !secondMismatchNode){
            firstMismatchNode = traversed[i];
            secondMismatchNode = traversed[i+1];
            continue;
          }
          secondMismatchNode = traversed[i+1];
       }
    }

    let temp = firstMismatchNode.value;
    firstMismatchNode.value = secondMismatchNode.value;
    secondMismatchNode.value = temp;
}

module.exports= { Tree, generateTest, fixSearchTree};
})();