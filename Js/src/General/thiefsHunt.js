(function () {

    var findMaxTheftValue = function (data) {

        if (!data || data.length === 0)
            return 0;

        var f0 = data[0] === null ? 0 : data[0];
        var f1 = data[1] ? data[1] : 0;

        if (f1 < f0)
            f1 = f0;

        for (var i = 2; i < data.length; i++) {
            var currentElement =
                data[i] === null ? 0 : data[i];

            var sumOfNonConsecutiveNodes = currentElement + f0;

            if (sumOfNonConsecutiveNodes > f1) {
                var temp = f1;
                f1 = sumOfNonConsecutiveNodes;
                f0 = temp;
            }
            else {
                f0 = f1;
            }
        }
        return f1 > f0 ? f1 : f0;
    };

    module.exports = findMaxTheftValue;
})();
