'use strict';

const Queue = require('./queue');
const Stack = require('./stack');
const LinkedList = require('./linkedList');

// let queue = new Queue(4);

// console.log('queue:');
// queue.enQueue(1);
// queue.enQueue(2);
// queue.enQueue(3);
// queue.enQueue(4);

// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());

// console.log('stack');

// let stack = new Stack(4);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

const linkedList = new LinkedList(5);

try{
linkedList.insert(10);
linkedList.insert(11);
linkedList.insert(12);
linkedList.remove(11);


}
catch(e){
    console.log(e);    
}

finally{
    linkedList.printLinkedList();
}
