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
        let node = sortedLinkedList;
        while (node) {
            if (node.next && node.value === node.next.value) {
                node.next = node.next.next;
                continue;
            }

            node = node.next;
        }
        return sortedLinkedList;
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