var scoreCard = document.querySelector('#score-card')

var topScores = [];

function listScores() {
    for (var i = 0; i < 5; i++) {
        var scoreLi = topScore[i];

        var li = document.createElement("li");
        li.textContent = scoreLi;
        scoreCard.appendChild(li);
    }
}

function init() {
 
}

init();
console.log(topScores);