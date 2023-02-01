var scoreCard = document.querySelector('#score-card')
var topScores = [];

function listScores() {
    var storedScores = JSON.parse(localStorage.getItem("playerScore"));
    console.log(storedScores.finalScore);
    console.log(storedScores.player);


    // for (var i = 0; i < 5; i++) {

    var li = document.createElement("li");
    li.textContent = storedScores.player+" - "+storedScores.finalScore;
    scoreCard.appendChild(li);
}


function init() {
listScores();   
}

init();
// console.log(topScores);