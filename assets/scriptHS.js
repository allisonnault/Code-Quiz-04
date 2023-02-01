var scoreCard = document.querySelector('#score-card');

function listScores() {
    var storedScores = JSON.parse(localStorage.getItem("playerScore"));
    storedScores.sort(function (a, b) { return b.finalScore - a.finalScore });

    if (storedScores !== []) {
        for (var i = 0; i < 5; i++) {
            var li = document.createElement("li");
            li.textContent = storedScores[i].player.toUpperCase() + " - " + storedScores[i].finalScore;
            scoreCard.appendChild(li);
        }
    }
}



function init() {
    listScores();
}

init();



