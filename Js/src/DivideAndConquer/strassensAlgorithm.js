'use strict';

void function(){
    const multiply = function(m1, m2){
     return multiply4X4Matrix(m1, m2);
    }

    const multiply4X4Matrix = function(m1, m2){   
      const a = m1[0][0], b = m1[0][1], c = m1[1][0], d = m1[1][1],
      e = m2[0][0], f=m2[0][1], g = m2[1][0], h = m2[1][1];

      const p1= a * (f-h);
      const p2 = h * (a + b);
      const p3 = e * (c + d);
      const p4 = d * (g - e);
      const p5 = (a + d) * (e + h);
      const p6 = (b - d) * (g + h);
      const p7 = (a - c) * (e + f);

      return generateResultMatrix(p1, p2, p3, p4, p5, p6, p7);

    }

    const generateResultMatrix = function(p1, p2, p3, p4, p5, p6, p7){
       return [[p6 + p5 + p4 - p2, p1 + p2],  [p3 + p4, p1 + p5 - p3 - p7]];
    }

    module.exports = {
        multiply : multiply
    };
    
}();


