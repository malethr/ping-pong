//Business Logic
var userInput = 0;
var userValues = [];
var pingpong = function (userInput){
  for (num=1;num<=userInput;num++){
    userValues.push(num);
  }
  userValues.forEach(function(value){
    if (value % 15 === 0) {
      userValues[value-1]="pingpong";
    } else if (value % 5 === 0) {
      userValues[value-1]="pong";
    } else if (value % 3 === 0) {
      userValues[value-1]="ping";
    }
  });
  return userValues;
};





// User Interface Logic
$(document).ready(function(){
  $("#ping-pong").submit(function(event){
    event.preventDefault();
    userInput = $("#userInput").val();
    var result = pingpong(userInput);
    $("#result").text(result);
  });
});
