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
while (playerPoints != 5 || PCpoints != 0){
    for (let i = 0; i < buttons.length; i++){
        let button = buttons[i];
        button.onclick = function () {
            let playerMove = button.id;
            let PCmove = computerPlay();
            let winner = game(playerMove, PCmove);
            if (winner == "player") playerPoints++;
            if (winner == "pc") PCpoints++;
            console.log("player: "+playerPoints);
            console.log("PC: "+PCpoints);
        }
    }
}

