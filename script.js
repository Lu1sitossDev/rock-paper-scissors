//let finalPlayerChoice;
let finalComputerChoice;
let playerPoints = 0;
let computerPoints = 0;
let playerStr;
let computerStr;
let defaultString = "computer: "+" |" + " player: ";

const container = document.querySelector(".container");
const paraGame = document.querySelector("#game");
const paraResult = document.querySelector("#result");
const paraPoints = document.querySelector("#points");

paraGame.textContent = defaultString;
paraPoints.textContent = "Computer Points: " + computerPoints.toString() +" | " + "Player Points: "+ playerPoints.toString();

const menu = document.querySelector(".menu");
    menu.addEventListener("click", (event) => {
        let target = event.target.id;
        getPlayerChoice(target)
    });


function getComputerChoice(){
    function getRandomInt(max) {
        finalComputerChoice = Math.floor(Math.random() * max);
        return finalComputerChoice;
      }
        let n = getRandomInt(3);
        getComputerstring(n);
        return n;
        
}

function getPlayerChoice(choice){
    let finalPlayerChoice = getPlayerIndex(choice);
    return finalPlayerChoice;
}

function getComputerstring(computer){
    switch(computer){
        case 0:
            computerStr = "rock";
            break;
        
        case 1:
            computerStr = "paper";
            break;

        case 2:
            computerStr = "scisssors";
            break;
    }
}

function getPlayerIndex(playerChoice){
    switch(playerChoice){
        case "rock":
            finalPlayerChoice = 0;
            playerStr = "rock";
            break;
        
        case "paper":
            finalPlayerChoice = 1;
            playerStr = "paper";
            break;

        case "scissors":
            finalPlayerChoice = 2;
            playerStr = "scisssors";
            break;
    }
    return finalPlayerChoice;
}

function playRound(player,computer){
    if(playerStr !== undefined){
        paraGame.textContent = "computer: " + computerStr +" |" + " player: " + playerStr;
        
        if(player == computer){
            paraResult.textContent = "it's a tie";
        }else if(player == 0 && computer == 1){
            paraResult.textContent = "computer won!";
            computerPoints++;
        }else if(computer == 0 && player == 1){
            paraResult.textContent = "player won!";
            playerPoints++;
        }else if(computer == 1 && player == 2){
            paraResult.textContent = "player won!";
            playerPoints++;
        }else if(computer == 2 && player == 1){
            paraResult.textContent = "computer won!";
            computerPoints++;
        }else if(computer == 2 && player == 0){
            paraResult.textContent = "player won!";
            playerPoints++;
        }else if(computer == 0 && player == 2){
            paraResult.textContent = "computer won!";
            computerPoints++;
        }

        if(playerPoints == 5){
            alert("Player won the game!");
            playerPoints = 0;
            computerPoints = 0;
            paraGame.textContent = "computer: "+" |" + " player: ";
            paraResult.textContent = "";
        } 
        if(computerPoints == 5){
            alert("Computer won the game!");
            playerPoints = 0;
            computerPoints = 0;
            paraGame.textContent = "computer: "+" |" + " player: ";
            paraResult.textContent = "";
        } 

        paraPoints.textContent = "Computer Points: " + computerPoints.toString() +" | " + "Player Points: "+ playerPoints.toString();
    }
    
}

function playGame(){
    playRound(getPlayerChoice(),getComputerChoice()); 
    
}

menu.addEventListener("click", () => {
    playGame();
    
})
