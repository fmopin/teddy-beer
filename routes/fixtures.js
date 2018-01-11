var express = require('express');
var axios = require('axios');
var router = express.Router();
// var utils = require('./../utils');
var api = require('./../fixtures');

/* GET bicoin currency */
router.get('/', function(req, res, next) {

    return api.getFixtures(res);

});

module.exports = router;
