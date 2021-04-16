(function () {
    'use strict';

    class LinkedList {
        constructor() {
            this.list = null;
            this._currentPointer = null;
        };

        push(inputValue) {
            let newValue = { value: inputValue, next: null };

            if (this._currentPointer === null)
                this.list = newValue;

            else
                this._currentPointer.next = newValue;

            this._currentPointer = newValue;
        }
    }
    module.exports = LinkedList;
})();