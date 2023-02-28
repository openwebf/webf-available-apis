const { parse } = require('yaml');
const fs = require('fs');
const path = require('path');

let cachedYaml;

function getAPIData() {
  return new Promise((resolve, reject) => {
    if (cachedYaml) {
      return resolve(cachedYaml);
    }

    fs.readFile(path.join(__dirname, './data.yaml'), { encoding: 'utf-8' }, function (err, data) {
      if (err) {
        return reject(err);
      }
      yamlStr = data;
      cachedYaml = parse(data);
      resolve(cachedYaml);
    });
  });
}

module.exports = getAPIData;