var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


app.get('/scrape', function(req, res){

url = 'https://www.thenorthface.com/';

	request(url, function(error, response, html){
	    if(!error){
	        var $ = cheerio.load(html);

	        header = $('.masthead').html();

	        console.log('check your browser at http://localhost:8080/scrape');

		} else {
			console.log("We’ve encountered an error: " + error);
		}

		// Finally, we'll just send out a message to the browser 
		res.send('<div class="masthead header">' + header + '</div>')
	});
});

app.listen('8080')
console.log('Magic happens on port 8080');
exports = module.exports = app;