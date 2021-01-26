const readline = require('readline');
const getMidCourse = require('./courseDependencies');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");


let input = [];

rl.on('line', (data) => {
  // TODO: Log the answer in a database
  for(let item of data.split(' ')){
    input.push(Number.parseInt(item));
  }
}).on('close',() => {  
  console.log(input);
    console.log(getMidCourse([
      ["Foundations of Computer Science", "Operating Systems"],
      ["Data Structures", "Algorithms"],
      ["Computer Networks", "Computer Architecture"],
      ["Algorithms", "Foundations of Computer Science"],
      ["Computer Architecture", "Data Structures"],
      ["Software Design", "Computer Networks"]
    ]));
});
