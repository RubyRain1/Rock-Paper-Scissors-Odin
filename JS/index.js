function randomNumber(){
    return Math.floor(Math.random() * 3) + 1
}


let playerR;
let cpuR;
function rollP(){ /* this does a random roll for player */
    if (randomNumber() == 1 ){
        playerR =("rock");
    } else if (randomNumber() == 2){
        playerR=("paper")
    } else {
        playerR=("scissors")
    }
   return;
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
    alert("PLAYER WINS");
} else if(cpuR == "rock" && playerR == "scissors"){
    alert("CPU WINS")
} else if(cpuR == "paper" && playerR == "rock"){
    alert("CPU WINS")
}else if(cpuR == "paper" && playerR == "scissors"){
    alert("PLAYER WINS")
}else if(cpuR == "scissors" && playerR == "rock"){
    alert("PLAYER WINS")
}else if(cpuR == "scissors" && playerR == "paper"){
    alert("CPU WINS")
} else{
    alert("TIE")
}
}

