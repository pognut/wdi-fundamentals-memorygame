//var cardOne = "king";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "queen";

var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

function makeBoard() {
for (var i = 0; i < cards.length; i++) {
    var cardMaker=document.createElement('div');
    cardMaker.className = 'card';
    cardMaker.setAttribute('data-card',cards[i]);
    cardMaker.addEventListener('click', isTwoCards);
    board.appendChild(cardMaker);
    board.appendChild(cardMaker);


}
}



function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card')==='king') {
		this.innerHTML = "<img src='Spades13.png' alt='King of Spades' />";
	}
	else {
		this.innerHTML = '<img src="Spades12.png" alt="Queen of Spades" />';
	}

	if (cardsInPlay.length===2)
	{
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}

}

var isMatch = function() {
				

	if (isTwoCards=true) {
		if (cardsInPlay[0]===cardsInPlay[1])
		{
			alert("You found a match!");

		}
		else {
			alert("Try again.");
		}
			var cardReset = document.getElementsByClassName('card');
			for (var i = 0; i < cardReset.length; i++) {
    		cardReset[i].innerHTML="";
	}
}	
}


makeBoard();
//if (cardOne==cardTwo)
//{
//	alert("You found a match!");
//} else if (cardThree==cardFour) {
//	alert("You found a match!")
//}
//else {
//	alert("Try again.")
//}