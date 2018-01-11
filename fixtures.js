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

  next10games.forEach(function(object, index) {

    if (index == next10games.length - 1) {
      str += '{"title":"' + object.homeTeamName + ' vs ' + object.awayTeamName + ' ", "image_url":"http://www.allomatch.com/uploads/gallery/thumbnails/photo-heuresup-4bb500ab59df8441025666bf561f7fa4.jpg", "subtitle":"' + object.date + '", "buttons":[{"type":"web_url","url":"https://rockets.chatfuel.com/store/hoodie","title":"View Item"}]}';
    }
    else {
      str += '{"title":"' + object.homeTeamName + ' vs ' + object.awayTeamName + ' ", "image_url":"http://www.allomatch.com/uploads/gallery/thumbnails/photo-heuresup-4bb500ab59df8441025666bf561f7fa4.jpg", "subtitle":"' + object.date + '", "buttons":[{"type":"web_url","url":"https://rockets.chatfuel.com/store/hoodie","title":"View Item"}]},';
    }

  })

  str += ']}}}]}';

  var object = JSON.parse(str);
  // console.log(object);

  res.send(object);
}
