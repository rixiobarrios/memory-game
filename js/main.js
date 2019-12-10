// ========================
//       CARDS ARRAYS
// ========================
// all cards 
let cards = [
    { rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"}, 
    { rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"}, 
    { rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"}, 
    { rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}, 
];

// cards currently in play 
let cardsInPlay = [];

// ========================
//   GENERATING THE BOARD
// ========================
const createBoard = () => {
    // accessing the game board 
    let gameBoard = document.getElementById('game-board');
    // looping through the cards array to create them as html elements
    for (let i = 0; i < cards.length; i++) {
        // creating the image 
        let cardElement = document.createElement('img');
        // setting the img src 
        cardElement.setAttribute('src', 'images/back.png');
        // setting the card's data-id 
        cardElement.setAttribute('data-id', i);
        // adding a click event listener on the card
        cardElement.addEventListener('click', flipCard);
        // appending the card to the game board 
        gameBoard.appendChild(cardElement);
    }
    // adding event listener to the reset button 
    document.getElementById('reset').addEventListener('click', resetGame);
}

// ========================
//       GAME LOGIC
// ========================
// flipping a card 
function flipCard() {
    // getting the clicked card's id 
    let cardId = this.getAttribute('data-id');
    // pushes the flipped card into cardsInPlay
    cardsInPlay.push(cards[cardId].rank);
    // show the front image 
    this.setAttribute('src', cards[cardId].cardImage);
    // checks if two cards have been played  
    if(cardsInPlay.length === 2) {
        // calls on checkForMatch if so
        checkForMatch();
    }
}

// checking if cards match
function checkForMatch() {
    // if matching, alert the user
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("It's a match!");
    } else { // if not a match...
        // alert that it's not 
        alert("Sorry, try again.");
    } 
}

// resets game 
function resetGame () {
    // clears the cards in play
    cardsInPlay = [];
    // flips the cards back over by re-setting the attributes 
    for(let i = 0; i < document.getElementsByTagName('img').length; i++) {
        document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
    }
}

// calling createBoard method
createBoard();