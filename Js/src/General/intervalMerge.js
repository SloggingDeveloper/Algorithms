(function () {
    'use strict';
    const merge = function (intervals, newInterval) {
        let newIntervals = [],
        newIntervalInserted = false,
        i =0;
        while (i < intervals.length) {
            let currentInterval = intervals[i];
            if (!newIntervalInserted && newInterval[0] > currentInterval[1]) {
                newIntervals.push(currentInterval);
                i++;
                continue;
            }

            if (!newIntervalInserted && newInterval[1] < currentInterval[0]) {
                newIntervals.push(newInterval);
                newIntervalInserted = true;
                break;
            }

            let newMergedEntry = [];
            newMergedEntry[0] = newInterval[0] <= currentInterval[0] ?
                newInterval[0]:currentInterval[0];            
            
            if(newInterval[1] <= currentInterval[1]){
            newMergedEntry[1] = currentInterval[1];
            newIntervals.push(newMergedEntry);
            i++;
            newIntervalInserted = true;
            break;
            }
            
            i++;
            while(intervals[i][1] < newInterval[1] && i < intervals.length){
               i++;
            }
            if(i === intervals.length){
              newMergedEntry[1] = newInterval[1];
            }
              else{
                if(newInterval[1] < intervals[i][0]){
                    newMergedEntry[1] = newInterval[1];
                }
                else{
                    newMergedEntry[1] = intervals[i][1];
                    i++;
                }
              }

            newIntervals.push(newMergedEntry)
            newIntervalInserted = true;
            break;
        }
        console.log(newIntervalInserted);
        if (!newIntervalInserted) {
            newIntervals.push(newInterval);
        }

        if (i < intervals.length) {
            for (let j = i; j < intervals.length; j++) {
                newIntervals.push(intervals[i]);
            }
        }

        

        return newIntervals;
    };

    module.exports = merge;

})();