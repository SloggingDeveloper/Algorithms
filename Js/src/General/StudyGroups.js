
'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function addNumbers(a, b) {
  return a+b  
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());  
}

const getLookup = function(subjects){
    
    let lookup = {};
    for(let i = 0; i < subjects.length; i++){
        lookup[subjects[i]] = 0;
    }
  return lookup;  
};

this.calculateGroups = function(str, subjects){
  let lookup = getLookup(subjects);
  let chr;
  for(let i = 0; i  < str.length; i++){
       chr = str[i];
      lookup[chr] += 1;
  }
  
  return getMinimumCompleteGroupsCount(lookup);
};

const getMinimumCompleteGroupsCount = function(lookup){
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let prop in lookup){
        if(lookup.hasOwnProperty(prop) && min > lookup[prop]){
            min =  lookup[prop];
        }
    }
    
    if(min === Number.MAX_SAFE_INTEGER)
      return 0;
     return min;
}

console.log(calculateGroups('mppzbmbpzcbmpbmczczrr','pcmbzr'));
/*

The School of Languages and Science teaches five subjects: Physics, Chemistry, Math, Botany, and Zoology. Each student is skilled in one subject. The skills of the students are described by string of named skills that consists of the letters p, c, m, b, and z only. Each character describes the skill of a student.

Given a list of students' skills, determine the total number of different teams satisfying the following constraints:

A team consists of a group of exactly five students.
Each student is skilled in a different subject.
A student may only be on one team.
 

Example 1

skills = pcmbzpcmbz

 

There are 2 possible teams that can be formed at one time: skills[0-4] = pcmbz and skills[5-9] = pcmbz, for example.

 

Example 2

skills = mppzbmbpzcbmpbmczcz

 

The sorted string is bbbbcccmmmmppppzzzz. All of the skills are represented, but there are only 3 students skilled in Chemistry. Only 3 teams can be created.


*/