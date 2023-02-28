const getAPIData = require('./index');

getAPIData().then((data) => {
  console.assert(typeof data === 'object');
})