var scoreCard = document.querySelector('#score-card');
var allScores = [];

function listScores() {
    var storedScores = JSON.parse(localStorage.getItem("playerScore"));
    allScores.push(storedScores);
    if (storedScores !== []) {
        for (var i = 0; i < storedScores.length; i++) {
            var li = document.createElement("li");
            li.textContent = storedScores[i].player + " - " + storedScores[i].finalScore;
            scoreCard.appendChild(li);
        }
    }
}

function init() {
    listScores();
}

init();
console.log(allScores);
