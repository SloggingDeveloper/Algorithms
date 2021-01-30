(function () {

    var getMaxArea = function (points) {
        var maxArea = 0;
        for (var i = 0; i < points.length; i++) {
            for (var j = i + 1; j < points.length; j++) {
                var height = points[j] < points[i] ? points[j] : points[i];
                var width = Math.abs(i - j);
                var area = height * width;
                if (area > maxArea)
                    maxArea = area;
            }
        }
        return maxArea;
    };
    module.exports = getMaxArea;
})();