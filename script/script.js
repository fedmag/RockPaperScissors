function computerPlay () {
    let numb = Math.random()* 3;
    console.log(numb)
    let res = "";
    if (numb <= 1) return "rock";
    if (numb <=2) return "paper";
    else return "scissors";
}
function game (playerMove, PCmove) {
    let winner = "player";
    if (playerMove == "rock" && PCmove == "paper") winner = "pc";
    if (playerMove == "scissors" && PCmove == "rock") winner = "pc";
    if (playerMove == "paper" && PCmove == "scissors") winner = "pc";
    if (playerMove == PCmove) winner = "tie";
    return winner;
}


let playerPoints = 0;
let PCpoints = 0;
let buttons = document.getElementsByClassName('button');
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let score = document.getElementById("written-score");
let reset = document.getElementById("reset");
reset.onclick = function () {
    playerPoints = 0;
    PCpoints = 0;
    score.innerHTML = "0 : 0";
    p1.innerHTML = "";
    p2.innerHTML = "";
}

for (let i = 0; i < buttons.length; i++){
    let button = buttons[i];
    button.onclick = function () {
        if (playerPoints < 5 && PCpoints < 5){
            let playerMove = button.id;
            let PCmove = computerPlay();
            let winner = game(playerMove, PCmove);
            if (winner == "player") playerPoints++;
            if (winner == "pc") PCpoints++;
            score.innerHTML = ""+ playerPoints + " : " + PCpoints;
            p1.innerHTML = "The human chose " + playerMove + ", the computer chose " + PCmove;
            p2.innerHTML = "The winner is: " + winner;
        }
        else {
            if (playerPoints == 5) {
                p1.innerHTML = "The player is the winner!";
                p2.innerHTML = "";
            }
            else {
                p1.innerHTML = "The PC is the winner!";
                p2.innerHTML = "";
            }
        }
    }
    

}

