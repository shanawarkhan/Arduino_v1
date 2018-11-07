five.Motion.toString
[Function: toString]
> five.Motion.toString()

function Motion(opts) { 
  if (!(this instanceof Motion)) {
    return new Motion(opts);  
}  

var freq = opts.freq || 25;
var last = false;
var controller; 
var state;

Board.Component.call(    
  this, 
  opts = Board.Options(opts)  
);

  if (typeof opts.controller === "string") {
    controller = Controllers[opts.controller];  
  } else { 
    controller = opts.controller || Controllers["PIR"];  
  }  

Board.Controller.call(this, controller, opts);
state = { 
  value: false,    
  isCalibrated: false  
}

priv.set(this, state);

Object.defineProperties(this, {
    /*     
    * [read-only] Current sensor state    
    * @property detectedMotion     
    * @type Boolean     
    */    
    
    detectedMotion: { 
      get: function() {        
        return this.toBoolean(state.value);
      }    
    },    

    /*     
    * [read-only] Sensor calibration status     
    * @property isCalibrated     
    * @type Boolean\n     
    */    
    isCalibrated: {
      get: function() {        
        return state.isCalibrated;      
      }    
    },  
});  

if (typeof this.initialize === "function") {
  this.initialize(opts, function(data) {      
    state.value = data;
  });  
}
setInterval(function() {
  var isChange = false;    
  var eventData = {      
    timestamp: Date.now(),      
    detectedMotion: this.detectedMotion,      
    isCalibrated: state.isCalibrated    
  };    

  if (state.isCalibrated && this.detectedMotion && !last) {
        this.emit("motionstart", eventData);    
    }    

  if (state.isCalibrated && !this.detectedMotion && last) {      
      this.emit("motionend", eventData);
    }
  if (last !== this.detectedMotion) {
        isChange = true;    
    }    

    this.emit("data", eventData);    

    if (isChange) {      
      this.emit("change", eventData);    
    }

    last = this.detectedMotion;  
  }.bind(this), freq);
}


// ========================================
// ========================================
// ========================================

> five.Motion.Collection
{ [Function]
>five.Motion.Collection.toString()


function(numsOrObjects) {
  if (!(this instanceof Motion.Collection)) {
    return new Motion.Collection(numsOrObjects);  
  }

  Object.defineProperty(this, "type", {
    value: Motion
  });

  Collection.Emitter.call(this, numsOrObjects);
}



five.Motion.valueOf()
{ [Function: Motion]
  super_: 
   { [Function: EventEmitter]
     EventEmitter: [Circular],
     usingDomains: true,
     defaultMaxListeners: [Getter/Setter],
     init: [Function],
     listenerCount: [Function] },
  Collection: { [Function] super_: { [Function] super_: [Function] } },
  domain: 
   Domain {
     domain: null,
     _events: 
      { removeListener: [Function: updateExceptionCapture],
        newListener: [Function: updateExceptionCapture],
        error: [Function: debugDomainError] },
     _eventsCount: 3,
     _maxListeners: undefined,
     members: [] },
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined }


// ========================================
// ========================================
// ========================================