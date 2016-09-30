const assert = require ('assert');
var fromWhere = function(regnumber){
  if(regnumber.startsWith("CY"))
  {
    return "Bellville"
  }
  else if(regnumber.startsWith("CJ")){
    return "Paarl"
  }
  else if(regnumber.startsWith("CA")){
    return "Cape Town"
  }
  else{
    return "Some other place!"
  }
};
assert.equal(fromWhere("CY"), 'Bellville');
assert.equal(fromWhere("CA"), 'Cape Town')
var locationResult = fromWhere("CA");
console.log(locationResult);
