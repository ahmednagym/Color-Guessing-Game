var numOfSquares = 6;
var colours = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorGuess = document.getElementById("colorDisplay");
var caseDisplay = document.querySelector("#case");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

initialize();

function initialize(){
	setButtons();
	setSquares();	
	resetUp();
}

function setSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				caseDisplay.textContent = "correct";
				reset.textContent = "Play Again";
				changeColor(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				caseDisplay.textContent = "Try Again";
			}
		});
	}

}

function setButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("buttonColor");
			modeButtons[1].classList.remove("buttonColor");
			this.classList.add("buttonColor");
			if (this.textContent === "Easy") {
				numOfSquares = 2;
			} else {
				numOfSquares = 6;
			}
			resetUp();
		});
    }
}

function resetUp(){
	h1.style.background = "steelbue";
	colours = randomColors(numOfSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	reset.textContent = "New colours";
	caseDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
			if (colours[i]) {
				squares[i].style.display = 'block';
				squares[i].style.background = colours[i];
			} else {
				squares[i].style.display = "none";
			}
		}	
}

reset.addEventListener("click", function(){
	resetUp();	
});

function changeColor(colours){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colours;
	}
}

function randomColor(){
	var randomPick = Math.floor(Math.random() * colours.length);
	return colours[randomPick];
}

function randomColors(num){
	var arr = [];

	for(var i = 0; i <= num; i++){
		arr.push(generateRandomColor());
	}

	return arr;
}

function generateRandomColor(){
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";

}