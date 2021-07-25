(function(){

    class Tree {
        constructor(value,left, right){
            this.value = value;
            this.left = left;
            this.right = right;
            this.rightThread = null;
            this.visited=false;
        }
    }
    const swap = function(tree){
        let visited = [];
        let currentNode = tree;
        
       

       while(currentNode){     
        
        if(currentNode.left && currentNode.left.visited){
            visited.push(currentNode);
            
        }
          
        let predecessor = findPredecessor(currentNode);

        if(!predecessor){
           visited.push(currentNode);
           currentNode.visited=true;

           if(currentNode.right)
             currentNode = currentNode.right;
             else{
              let right = currentNode.rightThread;
              currentNode.rightThread = null;
              currentNode = right;
             }
              
           continue;
        }

         predecessor.rightThread = currentNode;
         currentNode = currentNode.left;
       }
       
    };

module.exports= {swap, Tree};
})();