var temporal = require("temporal");

temporal.on("idle", function() {
  console.log("Temporal is idle");  
});

// Wait 500 milliseconds, execute a task
temporal.delay(500, function() {

  console.log("500ms later...");

});

// Loop every n milliseconds, executing a task each time
temporal.loop(500, function() {

  console.log("Every 500ms...");

  // |this| is a reference to the temporal instance
  // use it to cancel the loop by calling:
  //
  // this.stop();

  // The number of times this loop has been executed:
  this.called; // number

  // The first argument to the callback is the same as |this|
});

