const {Tree, flatten} = require('./flattenTreeTolinkedList');
let result = flatten(new Tree(1, new Tree(6,null, new Tree(7,new Tree(11, null, null),null)), new Tree(3, new Tree(4,null,null), new Tree(5, null, null))));

while(result){
    console.log(result.value);
    result = result.next;
}
