const httpRequest = require('request');

(function(){
    const options = {
        url: 'https://restcountries-v1.p.rapidapi.com/all',
        headers: {
          'X-RapidAPI-Host': 'restcountries-v1.p.rapidapi.com',
          'X-RapidAPI-Key': '8d43b89665mshaa31b9b177ab39ep1036a2jsn6c6ad969efe7'
        },
        method: 'GET'
      };
    const legacyPromise = new Promise(function(resolve, reject){
        
        httpRequest(options, function(err, response, data){
            if(err){
                reject(err);
                return;
            }

            if(response.statusCode === 200){
                console.log(data);
                resolve(data);
                return;
            }
            reject(response);
        });
        
    });
     

    module.exports = {legacyPromise};
}
)();
