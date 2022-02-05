let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()*9);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) =>
 {
if (Math.abs(targetGuess - humanGuess) <= Math.abs(targetGuess - computerGuess))
 {
 return true;
} 
}


const updateScore = (winner) => {
if (winner === 'human') {
  humanScore = humanScore + 1;
} else if (winner === 'computer') {
  computerScore = computerScore + 1;
}
}

const advanceRound = () => {
   currentRoundNumber = currentRoundNumber + 1
   return currentRoundNumber;
}
