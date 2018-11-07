const EventEmitter = require('events');
var five = require("johnny-five");
var board = new five.Board();

class MyEmitter extends EventEmitter {}



// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');


const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);
  // Blink every half second
  // led.blink(500)
 led.blink(500);

  myEmitter.on(led.blink, () => console.log('a'));
});