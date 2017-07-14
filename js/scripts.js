//Business Logic
var userInput = 0;
var userArray = [];
var pingpong = function (userInput){
  for (i=1; i<=userInput; i++){
    return userArray.slice(i);
  }
}




// User Interface Logic
$(document).ready(function(){
  $("#ping-pong").submit(function(event){
    event.preventDefault();
    userInput = $("#userInput").val();
    var result = pingpong(userInput);
    $("#result").append("<li>"+result+"</li>");
  });
});
