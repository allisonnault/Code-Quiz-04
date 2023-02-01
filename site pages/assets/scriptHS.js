var scoreCard = document.querySelector('#score-card')
var allScores = [];

function listScores() {
    var storedScores = JSON.parse(localStorage.getItem("playerScore"));
    allScores.push(storedScores);
    console.log(allScores[0].player);
    if (allScores !== []) {
        for (var i = 0; i < 5; i++) {
            var li = document.createElement("li");
            li.textContent = allScores[i].player + " - " + allScores[i].finalScore;
            scoreCard.appendChild(li);
        }
    }
}

function init() {
    listScores();
}

init();

