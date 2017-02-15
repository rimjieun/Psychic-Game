var winPoint = 0;
var lossPoint = 0;
var turns = 9;
var guessList = [];

var alphabet = "abcdefghijklmnopqrstuvwxyz";

var result = {

	win: function() {
		winPoint++;
		document.getElementById("winStm").innerHTML = "Wins: " + winPoint;
	},

	miss: function() {
		turns--;
		guessList.push(guess);
		document.getElementById("turnStm").innerHTML = "Guesses Left: " + turns;
		document.getElementById("guessStm").innerHTML = "Your Guesses so far: " + guessList;
	},

	lose: function() {
		lossPoint++;
		document.getElementById("lossStm").innerHTML = "Losses: " + lossPoint;
	},

	reset: function() {
		turns = 9; guessList = [];
		document.getElementById("turnStm").innerHTML = "Guesses Left: " + turns;
		document.getElementById("guessStm").innerHTML = "Your Guesses so far: " + guessList;
	}
};

document.onkeyup = function(event) {

	guess = event.key.toLowerCase();
	letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	
	if (alphabet.includes(guess)) {

		if (guess === letter) {
			result.win();
			result.reset();
		}

		if ((guess !== letter) && (turns >= 1)) {
			result.miss();
		}

		if ((guess !== letter) && (turns < 1)) {
			result.lose();
			result.reset();
		}
	}

	else {
		alert("That's not a letter!");
	}

}