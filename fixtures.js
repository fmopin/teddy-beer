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

  res.send(next10games);
}
