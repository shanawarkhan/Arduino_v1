var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // The "custom" property is available
  // to all component class constructors
  var sensor = new five.Sensor({
    pin:[ "6","5","3"],
    custom: {
      a: 1,
      b: 2,
      c: 3,
    }
  });

  console.log(sensor.custom.a);
  console.log(sensor.custom.b);
});
