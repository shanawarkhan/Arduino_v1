// LED BLINK
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);
  // Blink every half second
  // led.blink(500)
  led.blink(500, function() {
    console.log("LED state: " +this.value);
  // console.log(second)
	});
});
