/* This js file will contain the program code for TOP rock paper scissors exercise.
 
    Math.floor() will round down to the nearest integer
    Math.random() * x; // Will generate a random number from 0 to x. 0 inclusive. x not inclusive.
    Math.random() * 10; // Generates a number between 0 and 9.99999
    Math.floor(Math.random() * 10); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    Math.floor(Math.random() * 10) + 1; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    We only want to choose Rock, Paper or Scissors.
    Math.floor(Math.random() * 3) + 1; // 1, 2, 3
*/

function humanPick() {
    return(parseInt(prompt("Press 1 for ROCK. Press 2 for PAPER. Press 3 for SCISSORS: ")));
}

function compPick() {
    return(Math.floor(Math.random() * 3) + 1); // 1, 2 or 3
}

function whoWins(human, computer) {
    if (human == "ROCK" && computer == "SCISSORS") {
        return("HUMAN ROCK SMASHED COMPUTER SCISSORS!");
    } else 
    if (human == "ROCK" && computer == "PAPER") {
        return("HUMAN ROCK SUFFOCATED BY COMPUTER PAPER!");
    } else
    if (human == "PAPER" && computer == "SCISSORS") {
        return("HUMAN PAPER SHREDDED BY COMPUTER SCISSORS!");
    } else
    if (human == "PAPER" && computer == "ROCK") {
        return("HUMAN PAPER SUFFOCATES COMPUTER ROCK!");
    } else
    if (human == "SCISSORS" && computer == "ROCK") {
        return("HUMAN SCISSORS SMASHED BY COMPUTER ROCK!");
    } else
    if (human == "SCISSORS" && computer == "PAPER") {
        return("HUMAN SCISSORS SHREDS COMPUTER PAPER!");
    } else
    if (human == computer) {
        return("IT'S A DRAW!!!");
    }
}

const choices = ["ROCK", "PAPER", "SCISSORS"];

let myPick = humanPick() - 1;
let cpuPick = compPick() - 1;

console.log("You picked " + choices[myPick]);
console.log("CPU Picked " + choices[cpuPick]);

console.log(whoWins(choices[myPick], choices[cpuPick]));