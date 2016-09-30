var assert = require('assert');
var trafficLight = function(light){
  if(light == "green"){
    return "go"
  }
  else if(light == "amber"){
    return "slow down"
  }
  else{
    return "Stop!"
  }
};
assert.equal(trafficLight("amber"), "slow down");
assert.equal(trafficLight("red"), "Stop!");
var traffic = trafficLight("green");
console.log(traffic);
