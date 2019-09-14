(function () {
    var findMaxTheftValue = function (data) {

        if (!data || data.length === 0)
            return 0;
        
        var maxPair = findMaxValue(data);

        var maxValue = maxPair.f1.hasFirstNode && maxPair.f1.hasLastNode ? maxPair.f0.value : maxPair.f1.value;
        
        if(maxPair.f1.hasFirstNode){            
         var maxValueWithoutFirstNode = findMaxValue(data.slice(1));
         if(maxValueWithoutFirstNode.f1.value > maxValue)
           return maxValueWithoutFirstNode.f1.value;
        }

        return maxValue;
        
    };
    
    var findMaxValue = function(data){
        var f0 = { value: data[0] === null ? 0 : data[0], hasFirstNode: true, hasLastNode: false };
        var f1 = { value: data[1] ? data[1] : 0, hasFirstNode: false, hasLastNode: false };  
        
        if (f1.value < f0.value) {
            f1.value = f0.value;
            f1.hasFirstNode = f0.hasFirstNode;
        }

        updateConsecutiveTrackingElements(f0, f1, data);

        return {f0: f0, f1: f1};
    };

    var updateConsecutiveTrackingElements = function(f0, f1, data){
        for (var i = 2; i < data.length; i++) {
            var currentElement =
                data[i] === null ? 0 : data[i];

            var sumOfNonConsecutiveNodes = currentElement + f0.value;
           
            if (sumOfNonConsecutiveNodes > f1.value) {

                f0.value = f1.value;
                f1.value = sumOfNonConsecutiveNodes;               

                var sumHasFirstNode = f0.hasFirstNode;
                f0.hasFirstNode = f1.hasFirstNode;
                f1.hasFirstNode = sumHasFirstNode;

                if (i === data.length - 1)
                    f1.hasLastNode = true;
            }
            
            else {        
                
                if(sumOfNonConsecutiveNodes === f1.value){
                    var bothHaveFirstNode = (f1.hasFirstNode && f0.hasFirstNode);
                    f0.hasFirstNode = f1.hasFirstNode;
                    f1.hasFirstNode = bothHaveFirstNode;
                    f0.value = f1.value;
                    continue;
                }
                f0.value = f1.value;
                f0.hasFirstNode = f1.hasFirstNode;
            }            

        }
    };
    module.exports = findMaxTheftValue;
})();