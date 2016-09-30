var assert = require('assert');
var transportFee = function(shift){
  if(shift=="morningshift"){
    return "R20"
  }
  else if(shift=="afternoonshift"){
    return "R10"
  }
  else{
    return "No fee!"
  }
};
assert.equal(transportFee("morningshift"), "R20");
assert.equal(transportFee("nightshift"), "No fee!");
var transportFeeResult = transportFee("nightshift");
console.log(transportFeeResult);
