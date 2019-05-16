const {countryList} = require('./promiseChaining');

countryList.then(data => console.log(data)).catch(error => console.log(error));