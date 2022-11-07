const button = document.querySelector("button");
const answer = document.querySelector("#answer");

button.addEventListener("click", function () {
	var answerText = Math.random() < 0.5 ? "Сара вели ДА" : "Сара вели не";

	answer.innerHTML = answerText;
});