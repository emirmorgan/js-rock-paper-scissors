
let playerScoreboard = document.querySelector("#playerScore");
let machineScoreboard = document.querySelector("#machineScore");

let playerScore = 0;
let machineScore = 0;

let playerImg = document.querySelector("#playerImg");
let machineImg = document.querySelector("#machineImg");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerOptions = [rock, paper, scissors];
let machineoptions = ["rock", "paper", "scissors"];

let userChoice;
let result = document.querySelector("#result");

playerOptions.forEach(choice => {
    choice.addEventListener('click', function() {
        userChoice = choice.id;

        //Machine Choice Set
        let x = Math.floor(Math.random() * 3);
        let machineChoice = machineoptions[x];

        //Image set
        playerImg.className = '';
        machineImg.className = '';
        playerImg.classList.add(userChoice);
        machineImg.classList.add(machineChoice);

        //Same choice
        if (userChoice == machineChoice) {
            result.style.color = "#00bedb";
            result.innerHTML = "TIE!";
        }
        //User win variations
        else if(userChoice == "rock" && machineChoice == "scissors") {
            result.style.color = "#00db0f";
            result.innerHTML = "YOU WIN!";

            playerScore++
            playerScoreboard.innerHTML = playerScore;
        }
        else if (userChoice == "paper" && machineChoice == "rock") {
            result.style.color = "#00db0f";
            result.innerHTML = "YOU WIN!";


            playerScore++
            playerScoreboard.innerHTML = playerScore;
        }
        else if (userChoice == "scissors" && machineChoice == "paper") {
            result.style.color = "#00db0f";
            result.innerHTML = "YOU WIN!";

            playerScore++
            playerScoreboard.innerHTML = playerScore;
        }
        else {
            result.style.color = "red";
            result.innerHTML = "MACHINE WIN!";

            machineScore++;
            machineScoreboard.innerHTML = machineScore;
        }

        // Win - Reset
        if (machineScore == 3 || playerScore == 3) {
            machineScore = 0;
            playerScore = 0;

            playerScoreboard.innerHTML = playerScore;
            machineScoreboard.innerHTML = machineScore;
            result.style.color = "black";
        }
    })
})