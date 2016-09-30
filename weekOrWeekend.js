const assert = require('assert');

var weekOrWeekend = function(day){
  if (day.startsWith('S')) {
      return 'weekend'}
      else {
        return "week"
      }

  };
assert.equal(weekOrWeekend('Wednesday'), 'week')
;
assert.equal(weekOrWeekend('Sunday'), 'weekend');
var dayResult = weekOrWeekend("Monday");
console.log(dayResult);
