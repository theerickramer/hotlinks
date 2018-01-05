const fs = require('fs');
const axios = require('axios');
const $ = require('cheerio');

fs.readFile('./hotlinks.json', 'utf-8', (err, file) => {
  const json = JSON.parse(file);
  for (let i = 0; i < json.length; i++) {
    axios.get(json[i].hotlink).then(response => {
      console.log(response);
    });
  }
});
