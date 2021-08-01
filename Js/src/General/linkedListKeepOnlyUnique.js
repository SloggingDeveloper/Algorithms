const {LinkedList} = require('./linkedListv1');

(function () {
    const removeDuplicate = function (sortedLinkedList) {
        let dummyStart = new LinkedList(Number.MIN_VALUE);
        dummyStart.next = sortedLinkedList;

        let start = null;
        let currentDuplicate = null
        let node = dummyStart;
        while (node) {

            if (node.next && node.next.value === node.value) {
                currentDuplicate = node;
                node = node.next;
                continue;
            }

            if (currentDuplicate && node.value === currentDuplicate.value) {
                if (!start) {
                    start = node.next;
                }
                else{
                    start.next = node.next;
                }
                node = node.next;
                continue;
            }

            start = node;
            node = node.next;
        }

        return dummyStart.next;
    };    

    module.exports = removeDuplicate;
})();