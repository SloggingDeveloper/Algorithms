(function(){
'use strict';

function getMaxVolume(points){

 let start = 0;
 let end = points.length -1;
 let max = new MaxVolume(Number.MIN_SAFE_INTEGER, null, null);
 while(start < end){
   
    let area = (end- start)*Math.min(points[start], points[end]);

    if(area > max.value){
        max.value = area;
        max.point1 = new Point(start + 1, points[start]);
        max.point2 = new Point(end + 1, points[end]);
    }
  
    if(points[start] < points[end])
     start++;
     else
      end--;
 }

 return max;
}


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class MaxVolume {
    constructor(value, point1, point2) {
        this.value = value;
        this.point1 = point1;
        this.point2 = point2;
    }
}

module.exports = getMaxVolume;
})();