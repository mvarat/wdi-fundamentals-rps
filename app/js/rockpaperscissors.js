////////////////////////////////////////////////
/*   Michelle's Rock Paper Scissors Game  */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getPlayerMove(move) {
    if (move === null){
		move = getInput();
    }
    return move;
}

function getComputerMove(move) {
   if (move === null){
		move = randomPlay();
	}
    return move;
}

function getWinner(playerMove,computerMove) {
	var winner;
	if ((playerMove == 'rock') && (computerMove == 'rock')){
	winner = 'tie';								
	}
	else if ((playerMove == 'rock') && (computerMove == 'paper')){
	winner = 'computer';								
	}
	else if ((playerMove == 'rock') && (computerMove == 'scissors')){
	winner = 'player';								
	}
	else if ((playerMove == 'paper') && (computerMove == 'rock')){
	winner = 'player';								
	}
	else if ((playerMove == 'paper') && (computerMove == 'paper')){
	winner = 'tie';								
	}
	else if ((playerMove == 'paper') && (computerMove == 'scissors')){
	winner = 'computer';								
	}
	else if ((playerMove == 'scissors') && (computerMove == 'rock')){
	winner = 'computer';								
	}
	else if ((playerMove == 'scissors') && (computerMove == 'paper')){
	winner = 'player';								
	}
	else {
	winner = 'tie';								
	}
								
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
	for (var round = 1; round <= 5; round += 1){
		var playerMove = getPlayerMove(null);
		var computerMove = getComputerMove(null);
		var winner = getWinner(playerMove, computerMove);
		if (winner === 'player'){
			playerWins += 1;
		}
		else if (winner === 'computer'){
			computerWins += 1;
		}
		console.log('Round #' + round + ': Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
		console.log('Winner is ' + winner + '!');
        console.log('The score is currently Player ' + playerWins + ' to Computer ' + computerWins);
	}
    return [playerWins, computerWins];
}
