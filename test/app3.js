var Board = require("firmata");
var board = new Board("path to serialport");
pixel = require("node-pixel");
var firmata = require('firmata');

board.on("ready", function() {

    strip = new pixel.Strip({
        pin: 3, // this is still supported as a shorthand
        length: 9,
        firmata: board,
        controller: "FIRMATA",

    });

    strip.on("ready", function() {
        // do stuff with the strip here.
        strip.color("#ff0000");
    });
});
