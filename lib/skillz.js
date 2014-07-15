module.exports = function (colours) {
  var fs = require('fs');
  var path = require('path');
  var shaqsHead = colours.yellow('( ° ͜ ʖ °)  ');

  return {
    hello: function hello() {
      console.log(shaqsHead + 'Hi there. I am Shaq');
    },
    rap: function rap() {
      console.log(shaqsHead + 'My name\'s Shaq, and I\'m here to say')

      var numRaps = 6
      var raps = new Array(numRaps)

      raps[0] = shaqsHead + 'I\'m a big big man like Tom Delay!'
      raps[1] = shaqsHead + 'I\'m in a big hurry so get out of my way!' 
      raps[2] = shaqsHead + 'There\'s a serious problem with the state of science education in the USA!'
      raps[3] = shaqsHead + 'I\'m on the farm and I\'m bailing some hay!'
      raps[4] = shaqsHead + 'Grab the basketballs and come to my house to play!'
      raps[5] = shaqsHead + 'I had a really big ham and cheese sandwich today!'
      //ensure you have enough raps! check your numRaps!


      console.log(raps[Math.floor(Math.random() * numRaps)])
    }
  };

};
