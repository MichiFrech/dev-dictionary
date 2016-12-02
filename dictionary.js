var request = require('request'),
    _ = require('lodash'),
    fs = require('fs'),
    page = 1,
    dictionary = [];
request = request.defaults({
   gzip: true
});

var getDictionary = function () {
    request('https://api.stackexchange.com/2.2/tags?page=' + page + '&pagesize=100&order=desc&sort=popular&site=stackoverflow&key=LUtq9xxjnksDU1D4ZDAjsg((',
        function (error, response, body) {
            if (!JSON.parse(body)['error_message']) {
                if (JSON.parse(body).items.length > 0) {
                    _.forEach(JSON.parse(body).items, function (value) {
                        dictionary.push(value.name);
                    });
                    console.log(page + ' API calls; Fetched ' + dictionary.length + ' items');
                    page++;
                    getDictionary();
                } else {
                    fs.writeFile('dictionary.json', JSON.stringify(dictionary), function (err) {
                        if (err) return console.log(err);
                        console.log("SUCCESS!");
                    });
                }
            }
        });
};
getDictionary();
