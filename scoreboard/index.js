//initializes the scores at the beginning of the game
let score1 = 0;
let score2 = 0;


//stores the id of score1 and score2 into variables
let homeScore = document.getElementById("score1");
let guestScore = document.getElementById("score2");


function homeAdd1Point() {
    score1 += 1;
    homeScore.textContent = score1
}

function homeAdd2Points() {
    score1 += 2;
    homeScore.textContent = score1;
}

function homeAdd3Points() {
    score1 += 3;
    homeScore.textContent = score1;
}

function guestAdd1Point() {
    score2 += 1;
    guestScore.textContent = score2;
}

function guestAdd2Points() {
    score2 += 2;
    guestScore.textContent = score2;
}

function guestAdd3Points() {
    score2 += 3;
    guestScore.textContent = score2;
}

function resetHome() {
    let reset = 0;
    homeScore.textContent = reset;
    score1 = 0;
}

function resetGuest() {
    let reset = 0;
    guestScore.textContent = reset;
    score2 = 0;
}