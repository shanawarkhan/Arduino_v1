var five = require("johnny-five");
var board = new five.Board();
var pin = new five.Pin(12);

pin.query(function(state) {
  console.log(state);
});