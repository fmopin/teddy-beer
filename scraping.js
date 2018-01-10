var Xray = require('x-ray');
var x = Xray();
var utils = require('./utils');

module.exports.getBars = function(res, match) {

  var baseUrl = 'http://www.allomatch.com';

  var html = baseUrl + '/retransmission-match-bar/france/football/' + match + '.html';

  x(html, '.match-bar', [{
      // data: '.bar-left @data-bar',
      // barName: 'div > .match_bar_top > div.match_bar_name > a@title',
      // latitude:'div > .match_bar_top > div.match_bar_name > p > .latitude > span@title',
      // longitude:'div > .match_bar_top > div.match_bar_name > p > .longitude > span@title',
      // street: 'div > div.match_bar_info > div > p > .street-address',
      // zipCode: 'div > div.match_bar_info > div > p > .postal-code',
      // city: 'div > div.match_bar_info > div > p > .locality',
      // phone: 'div > div.match_bar_info > div > .match-bar-info-phone > span',
      // picture: 'div > div.match_bar_detail > div.match_bar_picture > a > img@src'

      title: 'div > .match_bar_top > div.match_bar_name > a@title',
      image_url: 'div > div.match_bar_detail > div.match_bar_picture > a > img@src',
      subtitle: 'div > div.match_bar_info > div > p > .street-address',
      buttons: []
  }])(function(err, bars) {
      if (err) {
          defer.reject(err);
      } else {

          res.send({
            messages: [
               {
                 attachment:{
                   type:"template",
                   payload:{
                     template_type:"list",
                     top_element_style:"large",
                     elements: utils.normalizeBars(bars)
                   }
                 }
               }
             ]
           });
        };
      });
};
