(function(){
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

module.exports =  {LinkedList, generateLinkedList}
})();