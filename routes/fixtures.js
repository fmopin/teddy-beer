var express = require('express');
var axios = require('axios');
var router = express.Router();
// var utils = require('./../utils');
var fixtures = require('./../fixtures');

/* GET bicoin currency */
router.get('/next10games', function(req, res, next) {

  axios
      .get('https://api.football-data.org/v1/competitions/450/fixtures')
      .then(function(response) {

          let games = response.data.fixtures;

          return fixtures.getNext10Games(res, games);

        })
      .catch(function(error) {
          return console.log(error);
      });

});

module.exports = router;
