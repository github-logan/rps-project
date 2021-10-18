// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        let randomSelection = Math.floor(Math.random() * 3);
        let computerSelection = "";
        if (randomSelection == 2) {
            computerSelection = Selections.SCISSORS;
        } else if (randomSelection == 1) {
            computerSelection = Selections.PAPER;
        } else {
            computerSelection = Selections.ROCK;
        }
        console.log("The Computer selected: " + computerSelection);
        return computerSelection;
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
let results = "";
switch (this.playerSelection + this.computerSelection) {
    case "rockrock":
        case "scissorsscissors":
            case "paperpaper":
                results = Outcomes.TIE;
                return results;
    case "rockscissors":
        case "paperrock":
            case "scissorspaper":
                results = Outcomes.PLAYER_WINS;
                return results;
    case "rockpaper":
        case "paperscissors":
            case "scissorsrock":
                results = Outcomes.COMPUTER_WINS;
                return results;

};




}

}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;