(function () {
    'use strict';

    const sort = function (list, key) {       
        let currentInsertPointer = null, pointer = list, previousPointer = null;

        if (list.value < key) {
            currentInsertPointer = list;
            previousPointer = pointer;
            pointer = pointer.next;
        }

        while (pointer !== null) {           
            if (pointer.value < key) {
                previousPointer.next = pointer.next;
               
                if (currentInsertPointer === null) {
                    console.log("within");
                    currentInsertPointer = pointer;
                    currentInsertPointer.next = list;                   
                    list = currentInsertPointer;
                }
                else{
                    pointer.next = currentInsertPointer.next;
                    currentInsertPointer.next = pointer;
                }
                 currentInsertPointer = pointer;               
            }
            else{
                previousPointer = pointer;
            }           

            pointer = pointer.next;
        }

        return list;
    };


    module.exports = sort;
})();