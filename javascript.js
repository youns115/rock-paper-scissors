// Rock Paper Scissors game

let computerWin = 0;
let playerWin = 0;
let gameHistory = [];

// Random choice for the computer
function computerChoice() {
    const choices = [
        "rock",
        "paper",
        "scissors"
    ];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Single round game
function playRound(playerSelection) {
    const computerSelection = computerChoice();
    console.log(`The computer chose ${computerSelection}`);

    updateChoiceDisplay("player-choice", playerSelection);
    updateChoiceDisplay("computer-choice", computerSelection);

    // Player ties with the computer
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    }
    // Player wins
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        console.log("You won this round!");
        playerWin++;
    }
    // Player loses
    else {
        console.log("You lost against the computer");
        computerWin++;
    }

    // Add the round history to the game history
    gameHistory.push({ player: playerSelection, computer: computerSelection });

    updateResultDisplay();
    updateHistoryDisplay();
    checkWinner();
}

// UI
function updateResultDisplay() {
    const resultDisplay = document.getElementById("result");
    resultDisplay.textContent = `Player Wins: ${playerWin}, Computer Wins: ${computerWin}`;
}

function updateChoiceDisplay(elementId, choice) {
    const choiceDisplay = document.getElementById(elementId);
    choiceDisplay.textContent = choice;
}

function updateHistoryDisplay() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";

    gameHistory.forEach((round) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Player: ${round.player} - Computer: ${round.computer}`;
        historyList.appendChild(listItem);
    });
}


function checkWinner() {
    if (playerWin >= 5) {
        alert("YOU WON THE GAME!");
        resetGame();
    } else if (computerWin >= 5) {
        alert("YOU LOST");
        resetGame();
    }
}

function resetGame() {
    playerWin = 0;
    computerWin = 0;
    gameHistory = [];
    updateResultDisplay();
    updateChoiceDisplay("player-choice", "");
    updateChoiceDisplay("computer-choice", "");
    updateHistoryDisplay();
}

function onClickButton(playerSelection) {
    playRound(playerSelection);
}

// Event listeners for the buttons
const rockButton = document.getElementById("rock-button");
rockButton.addEventListener("click", () => onClickButton("rock"));

const paperButton = document.getElementById("paper-button");
paperButton.addEventListener("click", () => onClickButton("paper"));

const scissorsButton = document.getElementById("scissors-button");
scissorsButton.addEventListener("click", () => onClickButton("scissors"));

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);
