// rock paper scissors game

// random choice for the computer
function computerChoice(choices,randomChoice){ 
    choices = [
        "rock",
        "paper",
        "scissors"
    ];
    return randomChoice = choices[Math.floor(Math.random()*choices.length)];
    
}

let computerWin = 0;
let playerWin = 0;

// single round game
function playGround(playerSelection,computerSelection){ 
    
    playerSelection = prompt("rock, paper or scissors?").toLocaleLowerCase()
    computerSelection = computerChoice()
    console.log(`the computer chose ${computerSelection}`)
    
    // player ties with the computer
    if (playerSelection == computerSelection){ 
        console.log("its a tie")
        
    }

    // player wins
    else if ((playerSelection=="rock" && computerSelection =="scissors")||(playerSelection=="scissors" && computerSelection=="paper")||(playerSelection=="paper" && computerSelection=="rock")){ 
         console.log("you won this round!")
         playerWin++
    }

    // player loses
    else{ 
        console.log("you lost against a fkin robot retard")
        computerWin++
    }
    
    
    
}
// 5 round game
function game(){ 
    for (let i =0; i<5;i++){ 
        playGround()
        
    }
    if(playerWin>computerWin){ 

        alert("YOU WON THE GAME!")
    }
    else if(playerWin==computerWin){ 
        alert("ITS A TIE")
    }
    else{ 
        alert("YOU LOST")
        
    }
    console.log(`player round wins: ${ playerWin}`)
    console.log(`computer round wins: ${computerWin}`)
    
}
game()
