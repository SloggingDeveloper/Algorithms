(function(){
function getTree(arr){

    if(!arr || arr.length === 0)
      return null;

      var left =  arr[0];
      var right = arr.length >2 ? arr[2] : null;      
      var rootArr =  arr.slice(arr.length > 2 ? 3 : 2, arr.length);
   
      var rootValue = arr.length > 1 ? arr[1] : null;
       if(rootValue !== null)
        rootArr = [rootValue].concat(rootArr);
      
 return new Node(left, getTree(rootArr), right);   
}

function Node(left, root, right){ 
 this.left = left;
 this.root = root;
 this.right = right;
}

module.exports = getTree;
})();