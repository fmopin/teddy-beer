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

      titleScraped: 'div > .match_bar_top > div.match_bar_name > a@title',
      imageScraped: 'div > div.match_bar_detail > div.match_bar_picture > a > img@src',
      subtitleScraped: 'div > div.match_bar_info > div > p > .street-address',
  }])(function(err, bars) {
      if (err) {
          defer.reject(err);
      } else {

          var str = '{"messages":[{"attachment":{"type":"template","payload":{"template_type":"list","top_element_style":"large","elements":['

          bars.forEach(function(object, index) {

            if (index == bars.length - 1) {
              str += '{"title":"' + object.titleScraped + '", "image_url":"' + object.imageScraped + '", "subtitle":"' + object.subtitleScraped + '"}';
            }
            else {
              str += '{"title":"' + object.titleScraped + '", "image_url":"' + object.imageScraped + '", "subtitle":"' + object.subtitleScraped + '"},';
            }

          })

          str += ']}}}]}'

          var str = str.replace(/&\/\\#,+()$~%'":*?<>/g, '');

          // var str = '{"messages":[{"attachment":{"type":"template","payload":{"template_type":"list","top_element_style":"large","elements":[{"title":"Ceci est un titre avec l\'apostrophe","image_url":"http://rockets.chatfuel.com/img/shirt.png","subtitle":"ceci est un subtitle"},{"title":"Ceci est un titre","image_url":"http://rockets.chatfuel.com/img/shirt.png","subtitle":"ceci est un subtitle"}]}}}]}'



          // var str = '{"messages":[{"attachment":{"type":"template","payload":{"template_type":"list","top_element_style":"large","elements":[{"title":"Chatfuel Rockets T-Shirt","image_url":"http://rockets.chatfuel.com/img/shirt.png","subtitle":"Soft white cotton t-shirt with CF Rockets logo","buttons":[{"type":"web_url","url":"https://rockets.chatfuel.com/store/shirt","title":"View Item"}]},{"title":"Chatfuel Rockets Hoodie","image_url":"http://rockets.chatfuel.com/img/hoodie.png","subtitle":"Soft gray cotton t-shirt with CF Rockets logo","buttons":[{"type":"web_url","url":"https://rockets.chatfuel.com/store/hoodie","title":"View Item"}]}]}}}]}'
          // console.log(str);

          // console.log("Obj to str : ");
          var object = JSON.parse(str);
          // console.log(object);

          res.send(object);
        };
      });
};
