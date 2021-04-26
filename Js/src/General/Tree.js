(function () {
    class Tree {

        constructor(value, left, right) {
            this.value = value;
            this.left = left;
            this.right = right;
        }

        static create(arr) {
            if (!arr || typeof arr.length === 'undefined' || arr.length < 1)
                return null;
            return Tree._createInternal(0, arr);
        }

        static _createInternal(i, arr) {
            if (i >= arr.length || arr[i] === null)
                return null;

            return new Tree(arr[i], Tree._createInternal((2 * i) + 1, arr),
                Tree._createInternal((2 * i) + 2, arr));
        }
    }

    module.exports = Tree;
})();