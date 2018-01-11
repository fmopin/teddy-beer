var https = require("https");

module.exports.getNext10Games = function(res, games) {

  var nextGames = []
  var next10games = []

  games.forEach(function(game, index) {

    if (game.status != "FINISHED") {
      nextGames.push(game)
    }
  });

  nextGames.forEach(function(nextGame, index) {

    console.log(nextGame);

    if (index < 10) {
      next10games.push(nextGame)
    }
  });

  // REAL DATA WITHTOUT TITLE

  var str = '{"messages":[{"attachment":{"type":"template","payload":{"template_type":"generic","image_aspect_ratio":"square","elements":['

  var bars = bars.slice(0,4);

  next10games.forEach(function(object, index) {

    if (index == bars.length - 1) {
      str += '{"title":"' + object.homeTeamName + ' vs ' + object.awayTeamName + ' ", "image_url":"http://www.allomatch.com/uploads/gallery/thumbnails/photo-heuresup-4bb500ab59df8441025666bf561f7fa4.jpg", "subtitle":"' + object.date + '"}';
    }
    else {
      str += '{"title":"' + object.titleScraped + '", "image_url":"' + object.imageScraped + '", "subtitle":"' + object.subtitleScraped + '"},';
    }

  })

  str += ']}}}]}'

  res.send(next10games);
}
