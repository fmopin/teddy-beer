var express = require('express');
var axios = require('axios');
var router = express.Router();
// var utils = require('./../utils');
var scraping = require('./../scraping');

/* GET bicoin currency */
router.get('/:match', function(req, res, next) {

    var match = req.params.match;

    return getFixtures.getBars(res, match);

});

module.exports = router;
