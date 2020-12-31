//input matrix
// ["1000","1110","1110","0001"];

(function () {

    const getGroupsCount = function (matrix) {

        const visitedMatrix = [];
        const allGroups = [];
        const input = [];
        for (let item of matrix) {
            input.push(item.split(''));
        }

        for (let i = 0; i < input.length; i++) {
            visitedMatrix[i] = [];
            for (let j = 0; j < input.length; j++) {
                visitedMatrix[i][j] = 0;
            }
        }

        for (let i = 0; i < visitedMatrix.length; i++) {
            let group = [i];
            for (let j = 0; j < visitedMatrix.length; j++) {
                if (i === j) {
                    visitedMatrix[i][j] = 1;
                    continue;
                }
                if (input[i][j] === '1') {
                    visitedMatrix[i][j] = 1;
                    buildAssociation(visitedMatrix, input, j, group)
                }
            }
            allGroups.push(group);
        }

        return mergeGroups(allGroups);
    };


    const buildAssociation = function (visitedMatrix, input, nextItem, group) {
        if (group.indexOf(nextItem) === -1) {
            group.push(nextItem);
        }
        for (let i = 0; i < input.length; i++) {
            if (nextItem === i) {
                visitedMatrix[nextItem][i] = 1;
                continue;
            }

            if (visitedMatrix[nextItem][i] === 1) {
                if (group.indexOf(i) === -1) {
                    group.push(i);
                }
                break;
            }

            if (input[nextItem][i] === '1') {
                visitedMatrix[nextItem][i] = 1;
                buildAssociation(visitedMatrix, input, i, group)
            }
        }
    };


    const mergeGroups = function (allGroups) {        
        let nomergeLeft = false;
        while (!nomergeLeft) {
            let newGroups = [];
            let anythingMerged = false;
            for (let i = 0; i < allGroups.length - 1; i++) {
                let childMerged = false;
                for (let j = i + 1; j < allGroups.length; j++) {
                    if (intersect(allGroups[i], allGroups[j])) {                        
                        for (let item of allGroups[i]) {
                            if (allGroups[j].indexOf(item) === -1) {
                                allGroups[j].push(item);
                            }
                        }

                        newGroups.push(allGroups[j]);
                        if (j < (allGroups.length - 1)) {                            
                            newGroups =  newGroups.concat(allGroups.slice(j + 1));
                        }
                        childMerged = true;                        
                        break;
                    }
                    newGroups.push(allGroups[j]);
                }
                if (childMerged) {
                    anythingMerged = true;                    
                    break;
                }
                newGroups.push(allGroups[i]);
            }

            nomergeLeft = !anythingMerged;          
            allGroups = newGroups;
        }
        return allGroups;
    };

    const intersect = function (arr1, arr2) {
        for (let item of arr1) {
            if (arr2.indexOf(item) !== -1) {
                return true;
            }
        }
        return false;
    }

    module.exports = getGroupsCount;

})();