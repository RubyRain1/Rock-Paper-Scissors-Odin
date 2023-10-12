function randomNumber(){
    return Math.floor(Math.random() * 3) + 1
}


let playerR;
let cpuR;
let cpuW = 0;
let playerW = 0;
let timeT = 0;
let gameT
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
    alert("PLAYER WINS, cpu rock player paper");
    playerW++;
    gameT++;
} else if(cpuR == "rock" && playerR == "scissors"){
    alert("CPU WINS, cpu rock player scissors")
    cpuW++;
    gameT++;
} else if(cpuR == "paper" && playerR == "rock"){
    alert("CPU WINS cpu paper player rock")
    cpuW++;
    gameT++;
}else if(cpuR == "paper" && playerR == "scissors"){
    alert("PLAYER WINS cpu paper player scissors")
    playerW++;
    gameT++;
}else if(cpuR == "scissors" && playerR == "rock"){
    alert("PLAYER WINS cpu scissors player rock")
    playerW++
    gameT++;
}else if(cpuR == "scissors" && playerR == "paper"){
    alert("CPU WINS cpu scissors player paper")
    cpuW++
    gameT++;
} else{
    alert("TIE you both chose the same!")
    timeT++;
    gameT++;
}
}
let numW;
function wins(){
    let numW = "player wins: "+ playerW + " cpu wins: "+ cpuW +
    " Total Ties: "+ timeT + " total games: "+ gameT;
    
}
