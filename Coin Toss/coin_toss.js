// Initialize score variables
let playerScore = 0;  // Changed: player score initialized
let computerScore = 0;  // Changed: computer score initialized

// Select elements from the DOM
const heads = document.getElementById('Heads');
const tails = document.getElementById('Tails');
const playerScoreValue = document.getElementById('playerScoreValue');
const computerScoreValue = document.getElementById('computerScoreValue');
const resultMessage = document.getElementById('result');  // Changed: Added to show win/loss message

// Function to update score when Heads or Tails is clicked
const updateScore = (choice) => {
    const randomResult = Math.random() < 0.5 ? 'Heads' : 'Tails'; // Simulate coin toss

    if (choice === randomResult) {
        playerScore += 1; // Increase player score if guessed correctly
    } else {
        computerScore += 1; // Changed: Increase computer score if player guessed incorrectly
    }

    playerScoreValue.textContent = playerScore;  // Update player score display
    computerScoreValue.textContent = computerScore;  // Update computer score display

    // Check if any player has reached 5 points
    if (playerScore === 5) {  // Changed: Check if player wins
        resultMessage.textContent = 'You Win!';
        resultMessage.style.color = 'green';  // Change text color for win
    } else if (computerScore === 5) {  // Changed: Check if computer wins
        resultMessage.textContent = 'You Lost!';
        resultMessage.style.color = 'red';  // Change text color for loss
    }
}

// Add event listeners for the Heads and Tails buttons
heads.addEventListener('click', () => updateScore('Heads'));
tails.addEventListener('click', () => updateScore('Tails'));
