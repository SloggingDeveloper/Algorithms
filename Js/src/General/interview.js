const badge_records_1 = [
    ["Martha",   "exit"],
    ["Paul",     "enter"],
    ["Martha",   "enter"],
    ["Martha",   "exit"],
    ["Jennifer", "enter"],
    ["Paul",     "enter"],
    ["Curtis",   "exit"],
    ["Curtis",   "enter"],
    ["Paul",     "exit"],
    ["Martha",   "enter"],
    ["Martha",   "exit"],
    ["Jennifer", "exit"],
    ["Paul",     "enter"],
    ["Paul",     "enter"],
    ["Martha",   "exit"],
  ];
  
const findViloations = function(input){
  
    var personRecord =  {};
    var exitViolations =  {};
    var entryViolations =  {};
    
    for(let item of input){    
      var entry = personRecord[item[0]];
      if(!entry){
          personRecord[item[0]]= [];        
         if(item[1] === 'exit')
           entryViolations[item[0]] = true;  
        else
           personRecord[item[0]].push('enter')
        continue;
      }     
      
      let lastEntry = entry.pop();
           if(item[1] === 'exit'){
             continue;
           }
        exitViolations[item[0]] = true;
    }  
    
    let uniqueExitViolations = [];
    let uniqueEntryViolations = [];  
    for(let item in exitViolations){
       if(exitViolations.hasOwnProperty(item))
          uniqueExitViolations.push(item);
    }
    
     for(let item in entryViolations){
       if(exitViolations.hasOwnProperty(item))
          uniqueEntryViolations.push(item);
    }
    
    
    return [uniqueExitViolations, uniqueEntryViolations];
  };
    
  
  var result = findViloations(badge_records_1);
  console.log(result[0], result[1]);
    