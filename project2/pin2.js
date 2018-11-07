var five = require("johnny-five");
var temporal = require("temporal");
var board = new five.Board();

board.on("ready", function() {
  var events = [];
 var led = new five.Led(13);
  // Blink every half second
  // led.blink(500
  led.blink(500);

});