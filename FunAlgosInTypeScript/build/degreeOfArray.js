'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class DegreeOfArray {
    findMaxFrequecyWithLeastDistance(arr) {
        let arrayElementWithDistanceAndFrequency = {};
        let arrayElementWithMaxFrequencyAndLeastDistance;
        for (let i = 0; i < arr.length; i++) {
            if (arrayElementWithDistanceAndFrequency[arr[i]] === undefined) {
                arrayElementWithDistanceAndFrequency[arr[i]] = { frequency: 1, distance: 0, startIndex: i };
            }
            else {
                arrayElementWithDistanceAndFrequency[arr[i]].frequency += 1;
                arrayElementWithDistanceAndFrequency[arr[i]].distance = i - arrayElementWithDistanceAndFrequency[arr[i]].startIndex;
            }
            if (!arrayElementWithMaxFrequencyAndLeastDistance ||
                arrayElementWithDistanceAndFrequency[arr[i]].frequency > arrayElementWithMaxFrequencyAndLeastDistance.frequency ||
                (arrayElementWithDistanceAndFrequency[arr[i]].frequency === arrayElementWithMaxFrequencyAndLeastDistance.frequency &&
                    arrayElementWithDistanceAndFrequency[arr[i]].distance < arrayElementWithMaxFrequencyAndLeastDistance.distance)) {
                arrayElementWithMaxFrequencyAndLeastDistance =
                    {
                        frequency: arrayElementWithDistanceAndFrequency[arr[i]].frequency,
                        distance: arrayElementWithDistanceAndFrequency[arr[i]].distance, element: arr[i]
                    };
            }
        }
        return arrayElementWithMaxFrequencyAndLeastDistance;
    }
}
exports.DegreeOfArray = DegreeOfArray;
//# sourceMappingURL=degreeOfArray.js.map