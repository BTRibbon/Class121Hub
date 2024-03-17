function clicked(button) {
    //move
    var container = document.getElementById("button-container");
    var buttons = container.getElementsByTagName("input");

    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i] !== button) {
            buttons[i].style.display = "none";
        }
    }

    button.className += " move";

    //play game
    playGame();
}

function computerMove() {
    var moves = ["rock", "scissors", "paper"];
    var randomIndex = Math.floor(Math.random() * moves.length);
    if(randomIndex=="rock"){
        document.getElementById("computer").src="resource/búa.png";
    }
    else if(randomIndex=="scissors"){
        document.getElementById("computer").src="resource/kéo.png";

    }
    else if (randomIndex=="paper"){
        document.getElementById("computer").src ="resource/bao.png";

    }
    return moves[randomIndex];
}

function checkWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        return "win";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        return "win";
    } else if (playerMove === "paper" && computerMove === "rock") {
        return "win";
    } else {
        return "lose";
    }
}

function playGame() {
    var playerMove = document.querySelector(".move").id;
    var computerMove = computerMove();;

    var winner = checkWinner(playerMove, computerMove);

    //display winner
    var winnerElement = document.getElementById("winner");
    winnerElement.textContent = "You " + winner + "!";
}
document.getElementById("testingimage").src="resource/búa.png";