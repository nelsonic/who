var gs  = require('github-scraper');
var fs  = require('fs');
var org = 'dwyl'; // change this if you want to scrape a diff org.
var url = 'https://github.com/orgs/' + org + '/people';

gs(url, function(err, data) {
  console.log(data.entries); // or what ever you want to do with the data
  fs.writeFileSync(__dirname+'/_members.csv', data.entries.join('\n'));
})
