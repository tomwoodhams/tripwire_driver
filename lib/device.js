var stream = require('stream')
  , util = require('util')
  , exec = require('child_process').exec,
    child;
 
// Give our module a stream interface
util.inherits(Device,stream);
 
// Export it
module.exports=Device;

/**
 * Creates a new Device Object
 *
 * @property {Boolean} readable Whether the device emits data
 * @property {Boolean} writable Whether the data can be actuated
 *
 * @property {Number} G - the channel of this device
 * @property {Number} V - the vendor ID of this device
 * @property {Number} D - the device ID of this device
 *
 * @property {Function} write Called when data is received from the cloud
 *
 * @fires data - Emit this when you wish to send data to the cloud
 */

 
function Device() {
 
  var self = this;

 // This device will emit data
   this.readable = true;
   // This device can be actuated
   this.writeable = false;
 
   this.G = "0"; // G is a string a represents the channel
   this.V = 0; // 0 is Ninja Blocks' device list
   this.D = 260; // this is the device type 

   process.nextTick(function() {
     setInterval(function() {
 
       child = exec('sudo python /opt/ninja/drivers/tripwire_driver/data.py',
       function (error, stdout, stderr) {
 
         console.log("laser is now at " + stdout);


/**
  * needs to only emit if data is different this will stop the constant data emitting,
  */
         self.emit('data',stdout);
       });
 
       }, 3000);

   });
	

 };

 
 /**
  * Called whenever there is data from the cloud
  * This is required if Device.writable = true
  *
  * @param  {String} data The data received
  */
 Device.prototype.write = function(data) {
 
 };
 
 
 
 