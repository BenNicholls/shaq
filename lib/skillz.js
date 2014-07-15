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

      raps[0] = shaqsHead + 'I\'m a big big man like Tom DeLay!'
      raps[1] = shaqsHead + 'I\'m in a big hurry so get out of my way!' 
      raps[2] = shaqsHead + 'There\'s a serious problem with the state of science education in the USA!'
      raps[3] = shaqsHead + 'I\'m on the farm and I\'m bailing some hay!'
      raps[4] = shaqsHead + 'Grab the basketballs and come to my house to play!'
      raps[5] = shaqsHead + 'I had a really big ham and cheese sandwich today!'
      //ensure you have enough raps! check your numRaps!

      console.log(raps[Math.floor(Math.random() * numRaps)])
    },
    recite: function recite(){

      //a poem. watch out, it's a tearjerker.
      console.log(shaqsHead + 'Shaquille O\'Neal was a man of steel,')
      console.log(shaqsHead + 'But a man with a plan he was not.')
      console.log(shaqsHead + 'He was quick with a joke, or to light up a smoke')
      console.log(shaqsHead + 'And whenever he spoke, something magic awoke')
      console.log(shaqsHead + 'At least, that\'s what the legends have taught\n')
      console.log(shaqsHead + 'So when Shaq came by, with a glint in his eye,')
      console.log(shaqsHead + 'And the people did lay at his feet.')
      console.log(shaqsHead + 'Looking down from that height, like a beacon of light,')
      console.log(shaqsHead + 'As the people did fight, for a glimpse of his might,')
      console.log(shaqsHead + 'He asked \"Who wants to buy the BIG MAN a cheeseyburger, I ain\'t got a lot of cash on me.\"')
    },
    joke: function joke(){

      var numJokes = 2
      var setup = new Array(numJokes)
      var punchline = new Array(numJokes)

      //shaq is a renowned b-ball comedian
      setup[0] = 'What do you get when you cross a basketball and a Big Man?'
      punchline[0] = 'A mad dunk! Yeeaaah!'
      setup[1] = 'Why did the b-ball cross the road?'
      punchline[1] = 'Because it was mercilessly dunked! It had nowhere else to go!!!!'

      var joke = Math.floor(Math.random() * numJokes)
      console.log(shaqsHead + setup[joke])

      setTimeout(function() {console.log(shaqsHead + punchline[joke])}, 1500)
    },
    play: function play(){
      var hour = new Date().getHours()

      if (hour <= 8 || hour > 21) {
        console.log(shaqsHead + 'Naw baby, you know the Big Man needs 10 solid.')
      } else if (hour > 9 && hour <= 13) {
        console.log(shaqsHead + 'Can\'t play now baby, this is my breakfast and/or lunch eating time!')
      } else if (hour > 13 && hour <= 18) {
        console.log(shaqsHead + 'Sorry champ, I\'m marathoning Coronation Street right now and it\'s juuuuuust starting to get good.')
      } else {
        console.log(shaqsHead + 'Are you kidding? It\'s dinner time! The Big Man has to get his steakey steak on.')
      }




    }
  };

};
