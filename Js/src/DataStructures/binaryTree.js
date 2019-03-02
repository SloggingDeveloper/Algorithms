'use strict';

(function(){

    function Node(nodeValue, parent, leftChild, rightChild){
        this.nodeValue = nodeValue;
        this.leftChild = leftChild ? leftChild : null;
        this.rightChild = rightChild ? rightChild : null;
        this.parent = parent ? parent : null;

        this.hasLeftChild = function(node){
           return node.leftChild !== null;
        };

        this.hasRightChild = function(node){
            return node.rightChild !== null;
         };

         this.hasChild = function(node){
             return this.hasLeftChild || this.hasRightChild;
         };
    }
    
    function Tree(rootNodeValue){
      
        this._rootNodeValue = rootNodeValue;

        this._rootData = new Node(this._rootNodeValue);

        this.insert = function(nodeValue){
              const node = findParentNodeForInsertion(this._rootData, nodeValue);
              const newNode = new Node(nodeValue, node, null, null);
              if(nodeValue <= node.nodeValue){
                  node.leftChild = newNode;
              }
              else{
                  node.rightChild = newNode;
              }
        };

        this.search = function(value){
           return searchTree(this._rootData, value);
           
        };

        const searchTree = function(node, value){

            if(node === null)
            return null;

            if(node.nodeValue === value)
              return node;
            
              if(!node.hasChild){
                  return null;
              }

              if(value  < tree.nodeValue)
              return searchTree(node.leftChild, value);

              return searchTree(node.rightChild, value);
        }

        const findParentNodeForInsertion = function(rootData, value){

             if(value <= rootData.nodeValue){
                if(!rootData.hasLeftChild) 
                return rootData;

                return findNodeForInsertion(rootData.leftChild, value);
             }
              
             if(!rootData.hasRightChild)
             return rootData;

             return findParentNodeForInsertion(rootData.rightChild, value);
            
        };

    }  


})();