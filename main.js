const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
	player: 0,
	computer: 0,
};

// Play game
function play(e) {
	restart.style.display = 'inline-block';
	const playerchoice = e.target.id;
	const computerChoice = getComputerChoice();
	const winner = getWinner(playerchoice, computerChoice);
	showWinner(winner, computerChoice);
}
// computer choice
function getComputerChoice() {
	const random = Math.random();
	if (random < 0.34) {
		return 'rock';
	} else if (random < 0.67) {
		return 'paper';
	} else {
		return 'scissors';
	}
}
// get winner
function getWinner(p, c) {
	if (p === c) {
		return 'draw';
	} else if (p === 'rock') {
		if (c === 'paper') {
			return 'computer';
		} else {
			return 'player';
		}
	} else if (p === 'paper') {
		if (c === 'scissor') {
			return 'computer';
		} else {
			return 'player';
		}
	} else if (p === 'scissors') {
		if (c === 'rock') {
			return 'computer';
		} else {
			return 'player';
		}
	}
}

// result visulization
function showWinner(winner, computerChoice) {
	if (winner === 'player') {
		scoreboard.player++;
		result.innerHTML = `
        <h1 class = "text-win">YOU WIN </h1>
        <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `;
	} else if (winner === 'computer') {
		scoreboard.computer++;
		result.innerHTML = `
        <h1 class = "text-lose">Computer Won! You lose</h1>
        <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `;
	} else {
		result.innerHTML = `
        <h1>It's a draw</h1>
        <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `;
	}
	// show score
	score.innerHTML = `
    <p>Player: ${scoreboard.player} </p>
    <p>Computer : ${scoreboard.computer}</p>
    `;

	modal.style.display = 'block';
}
// clear modal
function clearModal(e) {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
}
// restart the game
function restartGame() {
	scoreboard.player = 0;
	scoreboard.computer = 0;
	score.innerHTML = `
    <p>Player : 0 </p>
    <p>Computer : 0 </p>
    `;
}

// event listener
choices.forEach((choice) => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
