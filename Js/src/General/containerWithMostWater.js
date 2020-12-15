(function(){
'use strict';
function getMaxVolumeCoordinates(points){

    let max = new MaxVolume(-1, new Point(-1,-1), new Point(-1,-1));

    for(let i = 0; i < points.length - 1; i++){
      let newMax =  getMaxForPoint(points, points[i], i+1);
      if(newMax.value > max.value)
       max = newMax;
    }
    return max;
}

let getMaxForPoint = function(points, currentValue, nextPoint){
    let currentX = nextPoint,
    currentY = currentValue,
    max = new MaxVolume(-1, new Point(currentX, currentY), new Point(-1,-1))

      for(let i = nextPoint; i < points.length; i++){
          let newY = points[i];
          let newX = i + 1;
          
          let minY = newY > currentY ? currentY: newY;

          let volume = (newX - currentX)*(minY);

          if(volume > max.value){
              max.value = volume;
              max.point2.x = newX;
              max.point2.y = newY;
          }            

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

module.exports = getMaxVolumeCoordinates;
})();