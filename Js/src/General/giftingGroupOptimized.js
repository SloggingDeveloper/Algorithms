//input matrix
// ["1000","1110","1110","0001"];

(function () {

    const getGroupsCount = function (matrix) {

        const visited = [];
        let groupCount = 0;       
        const input = [];
        for (let item of matrix) {
            input.push(item.split(''));
        }

        for (let i = 0; i < input.length; i++) {
            visited[i] = 0;            
        }

        for(let i = 0 ;i < input.length;i++){
            for(let j=0;j < input.length; j++){
                if(input[i][j] ==='1'){
                    input[j][i] = '1';
                }
            }
        }       

        for (let i = 0; i < input.length; i++){
            if(visited[i] === 1)
             continue;           
             for(let j = 0; j < input.length; j++){
             if(input[i][j] === '1' && i !== j){
                 visited[i] = 1;
                 setAssociations(input,j, visited);
             }
            }

            visited[i] = 1;
            groupCount++;
        }        

        return groupCount;
    };


    const setAssociations = function(input, currentIndex, visited){
        visited[currentIndex] = 1;
        for(let j = 0; j < input.length; j++){
            if(input[currentIndex][j] === '1' && currentIndex !== j && visited[j] === 0){               
                setAssociations(input,j, visited);
            }
        }
    };

    module.exports = getGroupsCount;

})();