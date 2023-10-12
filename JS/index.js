function randomNumber(){
    return Math.floor(Math.random() * 3) + 1
}


let playerR;
let cpuR;
let cpuW = 0;
let playerW = 0;
let timeT = 0;
let gameT = 0;
let status = ""; /* this is what will show what moves the player and cpu do as well as show who wins */

function rollR(){
    playerR =("rock");
}
function rollP(){
    playerR=("paper");
}
function rollS(){
    playerR=("scissors")
}
function rollC(){ /*  this rolls for "CPU" on roll button */
    if (randomNumber() == 1 ){
        cpuR=("rock");
    } else if (randomNumber() == 2){
        cpuR=("paper")
    } else {
        cpuR=("scissors")
    }
   
}
function result(){
if(cpuR == "rock" && playerR == "paper"){
    status = ("PLAYER WINS, cpu rock player paper");
    playerW++;
    gameT++;
} else if(cpuR == "rock" && playerR == "scissors"){
    status=("CPU WINS, cpu rock player scissors")
    cpuW++;
    gameT++;
} else if(cpuR == "paper" && playerR == "rock"){
    status=("CPU WINS cpu paper player rock")
    cpuW++;
    gameT++;
}else if(cpuR == "paper" && playerR == "scissors"){
    status=("PLAYER WINS cpu paper player scissors")
    playerW++;
    gameT++;
}else if(cpuR == "scissors" && playerR == "rock"){
    status=("PLAYER WINS cpu scissors player rock")
    playerW++
    gameT++;
}else if(cpuR == "scissors" && playerR == "paper"){
    status=("CPU WINS cpu scissors player paper")
    cpuW++
    gameT++;
} else{
    status=("TIE you both chose the same!")
    timeT++;
    gameT++;
}
}
function statusG(){
    document.getElementById("statusN").innerHTML = (status);
}

function wins(){
    document.getElementById("winN").innerHTML =( "player wins: "+ playerW + " cpu wins: "+ cpuW +
    " Total Ties: "+ timeT + " total games: "+ gameT); /* for some reason this actually replaces the text in p with id "winN" on load  */
    
}
