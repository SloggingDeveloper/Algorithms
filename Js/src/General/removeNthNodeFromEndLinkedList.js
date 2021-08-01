const { LinkedList } = require('./linkedListv1');
(function () {
    const removeNthNodeFromEndOfLinkedList = function (linkedList, positionFromEndToRemove) {
        if (!linkedList || linkedList.constructor.name !== LinkedList.name)
            return null;
        
        let node = linkedList;
        let elementToBeRemoved = node;
        let previousPointer = null;
        let currentCount = 1;
        while (node) {
            if (currentCount === positionFromEndToRemove) {
                if (node.next) {
                    previousPointer = elementToBeRemoved;
                    elementToBeRemoved = elementToBeRemoved.next;
                }                
            }
            else {
                currentCount++;
            }
            node = node.next;
        }

        if (previousPointer === null)
            return linkedList.next;
        previousPointer.next = elementToBeRemoved.next;
        return linkedList;
    }

    module.exports = removeNthNodeFromEndOfLinkedList;
})();