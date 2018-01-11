var http = require("http");

module.exports.getFixtures = function(res) {
  var url = 'https://api.football-data.org/v1/competitions/450/fixtures';

  http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var ligue1Fixtures = JSON.parse(body);
        console.log(ligue1Fixtures);
    });
  }).on('error', function(e){
      console.log("Got an error: ", e);
    });
}
