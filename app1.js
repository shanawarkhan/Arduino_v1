var pixel = require("node-pixel");
var firmata = require('firmata');
var five = require('johnny-five');
var board = new five.Board();



board.on("ready", function() {
  // Arduino is ready to communicate
  	strip = new pixel.Strip({
        pin: 2, // this is still supported as a shorthand
        length: 8,
        firmata: board,
        controller: "FIRMATA",

    });

    strip.on("ready", function() {
        // do stuff with the strip here.
        strip.color("#ff0000");
    });
});  