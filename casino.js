import Bank from './bank.js'
const bookie = new Bank();
export default class Casino{
    casinoGamesMessage = () => {
        //-generate a new message for users to select a new game.
        //-a user selects a reaction to start the new game. Once a user has selected the game
        //we need to store the user's ID and only respond with that user until the game is complete
        //-once a game is selected we need to delete the first message. 
        //-After the game is complete generate a new message and wait for next user.
    }
    highLow = (userID, bet) => {
        

    }
    blackjack = (userID) => {

    }
    rngGuesser = (userID) => {
        
    }
}