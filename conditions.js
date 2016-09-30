var autoAlarm = function(tomorrow){
  if(!(tomorrow.endsWith("day")))
  {
return "not a weekday"
}
else if(tomorrow.startsWith('Sat'))
    {
  return "8:00am"
}
    else if(tomorrow.startsWith('Sun')){
            return "7:00am"
          }
        else {
        return "5:00am"
      }
      };
var upTime = autoAlarm('Saterday');
var upTime1 = autoAlarm('Monday');
var upTime2 = autoAlarm('Sam');
var upTime3 = autoAlarm('Sam');
console.log(upTime);
console.log(upTime1);
console.log(upTime2);
console.log(upTime3);
