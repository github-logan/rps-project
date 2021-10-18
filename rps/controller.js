var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
game.newGame();

    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    // Use game.IsNumberOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the user again

    let numberOfRounds = prompt("How many rounds would you like to play?");
    if (game.isNumberOfRoundsValid(numberOfRounds) == true) {
        console.log("next step");
        game.setNumberOfRounds(numberOfRounds);
    } else {
        console.log('Type "playGame()" to play, then select a number between 1 and 5 to set your rounds.');
    }





    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 

    while (numberOfRounds > 0) {
        playRound(numberOfRounds);
        numberOfRounds--;
        console.log("Number of rounds left: " + numberOfRounds);
    } 

    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object

}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    console.log(Game.countOfPlayerWins);

    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);


    //Play the Round
    var outcome = round.determineWinner();

    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
if (outcome == "tie") {
    console.log("It's a tie!");
} else {
    console.log("The winner is: " + outcome + ".");
}



}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
let playerChoice = prompt("Choose your weapon: rock, paper or scissors...");
playerChoice = playerChoice.toLowerCase();
if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
    console.log("You've selected: " + playerChoice);
    return playerChoice;
} else {
    console.log("No " + playerChoice + ", lizard, or Spock allowed. Try again.");
getPlayerSelection();
};


}

