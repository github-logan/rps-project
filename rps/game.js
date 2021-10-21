class Game{
    constructor(){
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }
    incrementPlayerWins(){
        //*********************************ADD CODE HERE *************************************/
        // Add 1 to the countOfPlayerWins property
        if (round.determineWinner() == "player") {
            Game.countOfPlayerWins++;
            return Game.countOfPlayerWins;
        }
    }

    incrementComputerWins(){
        //*********************************ADD CODE HERE *************************************/
        // Add 1 to the countOfComputerWins property
        if (round.determineWinner() == "computer") {
            game.countOfComputerWins++;
            return Game.countOfComputerWins;
        }
    }

    incrementCountOfTies(){
        //*********************************ADD CODE HERE *************************************/
        // Add 1 to the countOfTies property

        if (round.determineWinner() == "tie") {
            Game.countOfTies++;
            return Game.countOfTies;
        }
    }


    setNumberOfRounds(numberOfRounds){
        //*********************************ADD CODE HERE *************************************/
        // Set the numberOfRounds property to the parameter
      this.numberOfRounds = numberOfRounds;
      console.log("Great, let's play: " + this.numberOfRounds + " round(s).");
      return this.numberOfRounds;
    }

    newGame(){
        //*********************************ADD CODE HERE *************************************/
        // Clear all properties to their default values
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }

     /**
     * tests the numberOfRounds global variable and determines if it is a valid value
     * @returns boolean
     */
     isNumberOfRoundsValid(num) {
        //*********************************ADD CODE HERE *************************************/
        // return a boolean value that shows if the parameter is a valid user input (A number from 1 - 5)      
            return (num >= 1 && num <= 5);
        }
      
}



// DO NOT TOUCH THIS CODE
let unit_test  = Game;