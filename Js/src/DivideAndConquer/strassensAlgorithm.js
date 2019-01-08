'use strict';

(function(){

    const generateResultMatrix = function(...p){
        return [[p[5] + p[4] + p[3] - p[1], p[0] + p[1]],
        [p[2] + p[3], p[0] + p[4] - p[2] - p[6]]];
     };

    const multiply2X2Matrix = function(m1, m2){
      const [a, b, c, d] = m1,
      [e, f, g, h] = m2;

      // Variables: p1-p7
      const p1 = a * (f - h),
      p2 = h * (a + b),
      p3 = e * (c + d),
      p4 = d * (g - e),
      p5 = (a + d) * (e + h),
      p6 = (b - d) * (g + h),
      p7 = (a - c) * (e + f);

      return generateResultMatrix(p1, p2, p3, p4, p5, p6, p7);
    };

    const multiply = function(m1, m2){
        return multiply2X2Matrix(m1, m2);
       };

    module.exports = { multiply };
}());