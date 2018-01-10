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

          // var str = '{"messages":[{"attachment":{"type":"template","payload":{"template_type":"list","top_element_style":"compact","elements":['
          //
          // bars.forEach(function(object, index) {
          //
          //   if (index == bars.length - 1) {
          //     str += '{"title":"' + object.titleScraped + '", "image_url":"' + object.imageScraped + '", "subtitle":"' + object.subtitleScraped + '", "buttons": [{ "type":"web_url", "url":"http://google.com", "title":"Ignorer le boutton"}]}';
          //   }
          //   else {
          //     str += '{"title":"' + object.titleScraped + '", "image_url":"' + object.imageScraped + '", "subtitle":"' + object.subtitleScraped + '", "buttons": [{ "type":"web_url", "url":"http://google.com", "title":"Ignorer le boutton"}]},';
          //   }
          //
          // })
          //
          // str += ']}}}]}'

          var str = '{"messages":[{"attachment":{"type":"template","payload":{"template_type":"list","top_element_style":"compact","elements":[{"title":"Ceci est un titre", "image_url":"https://www.google.fr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjU14OLxs3YAhXKthQKHbAhDMgQjRwIBw&url=https%3A%2F%2Fwww.w3schools.com%2Fw3css%2Fw3css_images.asp&psig=AOvVaw3vAAU3G6yZFW4NSPbvBaSl&ust=1515678911588184", "subtitle":"ceci est un subtitle", "buttons": [{ "type":"web_url", "url":"http://google.com", "title":"Ignorer le boutton"}]}]}}}]}'

          // console.log(str);

          // console.log("Obj to str : ");
          var object = JSON.parse(str);
          // console.log(object);

          res.send(object);
        };
      });
};
