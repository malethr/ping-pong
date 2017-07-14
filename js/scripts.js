//Business Logic
var userInput = 0;




// User Interface Logic
$(document).ready(function(){
  $("#ping-pong").submit(function(event){
    event.preventDefault();
    userInput = $("#userInput").val();
    var result = userInput
    $("#result").append("<li>"+result+"</li>");
  });
});
