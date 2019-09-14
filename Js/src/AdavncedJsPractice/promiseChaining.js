const request = require('request');

(function(){
const countryList = new Promise(function(resolve, reject){

    request({url: 'https://restcountries-v1.p.rapidapi.com/all', method: 'GET', headers :{
        'X-RapidAPI-Host': 'restcountries-v1.p.rapidapi.com',
         'X-RapidAPI-Key': '8d43b89665mshaa31b9b177ab39ep1036a2jsn6c6ad969efe7'
    }},
     function(error, response, body){
          if(error){
              reject(error);
          }

          else if(response.statusCode !== 200)
             reject(`api failed with statusCode: ${response.statusCode}`);
          
             resolve(body);
    });
});

module.exports = {countryList};
})();
