/*
Test Data:
const prereqs_courses1 = [
  ["Foundations of Computer Science", "Operating Systems"],
  ["Data Structures", "Algorithms"],
  ["Computer Networks", "Computer Architecture"],
  ["Algorithms", "Foundations of Computer Science"],
  ["Computer Architecture", "Data Structures"],
  ["Software Design", "Computer Networks"]
];

expected output: Data Structures

const prereqs_courses2 = [
  ["Data Structures", "Algorithms"],
  ["Algorithms", "Foundations of Computer Science"],
  ["Foundations of Computer Science", "Logic"]
];

expected output : Algorithms

const prereqs_courses3 = [
  ["Data Structures", "Algorithms"]
];

expected output : Data Structures
*/

(function(){
'use strict';
 
const getMidCourse = function(input){
    
    let result = [];

   for(let i = 0; i < input.length; i++){
      result = buildDependencyChain(input[i], result);
   }
  
    return getMidPathCourse(result);
};

const buildDependencyChain = function(course, result){
      
      const currentLength = result.length;
      for(let i = currentLength-1; i >= 0; i--){
           if(course[0] === result[i][1]){              
              return insertInBetween(result, course, i+1);
           }
         
           if(course[1] === result[i][0])
           {
                 insertInBetween(result, course, i);
           }
      }

      result.push(course);
      return result;
};

const insertInBetween = function(result, course, index){
    let left = result.splice(0,index);
    left.push(course);
    return left.concat(result.splice(index));
};

const getMidPathCourse = function(result){
   
    if(result.length % 2 === 0){
        return result[(result.length/2)-1][1];
    }

    return result[Math.floor(result.length/2)][0];
};

 module.exports = getMidCourse;
}
)();