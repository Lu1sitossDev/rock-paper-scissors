let finalPlayerChoice;
let finalComputerChoice;
let playerPoints = 0;
let computerPoints = 0;
let playerStr;
let computerStr;

function getComputerChoice(){
    function getRandomInt(max) {
        finalComputerChoice = Math.floor(Math.random() * max);
        return finalComputerChoice;
      }
        let n = getRandomInt(3);
        getComputerstring(n);
        return n;
        
}

function getPlayerChoice(){
    playerChoice = prompt("choose between: 'rock, paper or scissors'");
    playerChoiceLower = playerChoice.toLowerCase();
    return getPlayerIndex(playerChoiceLower);

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
    
    console.log("computer: " + computerStr +" |" + " player: " + playerStr);
    
    if(player == computer){
        console.log("it's a tie")   
    }else if(player == 0 && computer == 1){
        console.log("computer won!")
        computerPoints++;
    }else if(computer == 0 && player == 1){
        console.log("player won!")
        playerPoints++;
    }else if(computer == 1 && player == 2){
        console.log("player won!")
        playerPoints++;
    }else if(computer == 2 && player == 1){
        console.log("computer won!")
        computerPoints++;
    }else if(computer == 2 && player == 0){
        console.log("player won!")
        playerPoints++;
    }else if(computer == 0 && player == 2){
        console.log("computer won!")
        computerPoints++;
    }

    console.log("Computer Points: " + computerPoints.toString() +" | " + "Player Points: "+ playerPoints.toString());
    console.log("---------------")
    
}

function playGame(times){
    for(let i = 0; i < times; i++){
        playRound(getPlayerChoice(),getComputerChoice());
    }
}

playGame(5);
