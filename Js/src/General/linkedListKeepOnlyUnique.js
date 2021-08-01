(function () {
    class LinkedList {
        constructor(value) {
            this.value = value;
            this.next = null;
        }

        addElement(element, prev = null) {
            let value = element;
            if (prev) {
                prev.next = value;
            }
        }

        print() {
            let node = this;
            let result = '';
            while (node) {
                result = result === '' ? node.value : `${result}--${node.value}`;
                node = node.next;
            }
            console.log(result);
        }
    }

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

    const generateLinkedList = function (arr) {

        if (!arr || arr.length === 0)
            return null;

        let list = new LinkedList(arr[0]);
        let prev = list;
        for (let i = 1; i < arr.length; i++) {
            let newElement = new LinkedList(arr[i]);
            list.addElement(newElement, prev);
            prev = newElement;
        }

        return list;
    };

    module.exports = { LinkedList, generateLinkedList, removeDuplicate };
})();