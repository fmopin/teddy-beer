var https = require("https");

module.exports.getFixtures = function(res) {
  var url = 'https://api.football-data.org/v1/competitions/450/fixtures';

  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
    });
  });

  res.send(body);
}
