module.exports.normalizeBars = function(bars) {
  var normalizedBars = [];

  bars.forEach(function(object, index) {
    var newObject = object;

    newObject.buttons = [{
      type:"web_url",
      url:"https://rockets.chatfuel.com/store/shirt",
      title:"Ignorer le bouton"
    }];

    normalizedBars.push(newObject);
  });

  return normalizedBars;
};
