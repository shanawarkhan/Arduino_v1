pixel = require("node-pixel");
five = require("johnny-five");

var board = new five.Board();
var strip = null;

board.on("ready", function() {
  // Define our hardware.
  // It's a 12px ring connected to pin 6.
  strip = new pixel.Strip({
    board: this,
    controller: "FIRMATA",
    strips: [ {pin: 3, length: 9}, ],
    gamma: 2.8,
  });

  // Just like DOM-ready for web developers.
  strip.on("ready", function() {
    // Set the entire strip to pink.
    strip.color('#903');

    // Set first and seventh pixels to turquoise.
    strip.pixel(0).color('#074');
    strip.pixel(3).color('#074');

    // Display initial state.
    strip.show();

    // Loop the following command forever
    // at 12fps until Arduino powers down.
    var loop = setInterval(function () {
      // Shift all pixels clockwise
      strip.shift(1, pixel.FORWARD, true);
      strip.show();
    }, 1000 / 12);
  });
});