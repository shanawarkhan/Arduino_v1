var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var leds = new five.Leds([ ]);
  // var pot = new five.Sensor("A0");
  console.log(leds.length);

});