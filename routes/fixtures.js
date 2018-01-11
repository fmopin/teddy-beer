var express = require('express');
var axios = require('axios');
var router = express.Router();
// var utils = require('./../utils');
var getFixtures = require('./../fixtures');

/* GET bicoin currency */
router.get('/', function(req, res, next) {

    return scraping.getFixtures(res);

});

module.exports = router;
