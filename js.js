// JavaScript Document
function generate_random(max_number) {
	return Math.round(Math.random()*max_number);
}

var button = document.querySelector("button");
var answer = document.querySelector("#answer");

button.addEventListener("click", function() {
	
	
	var randomNumber = generate_random(3);
	
	var answerText = "";
	
	  if (randomNumber == 0) {
		  answerText = "Yes definitely";
	  }  else if (randomNumber == 1) {
	     answerText = "No certainly not";
		 
	   } else if (randomNumber == 2) {
		   answerText = "Ask again later";
		   
	   } else {
		   answerText = "I really don't care";
	   }
	   answer.innerHTML = answerText;
});