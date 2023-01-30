var card1 = document.querySelector(".start");
var card2 = document.querySelector(".question");
var Question = document.querySelector("#question");
var timerSpan = document.querySelector("#timer");
var choiceList = document.querySelector("#choices");
var startQuiz = document.querySelector("#start");

var quizQuestions = ["How would you access an HTML element by a specified classname?", "Which is NOT a data type in Javascript", "What symbol(s) would you use to express strict equalitiy?"];

var choice1 = ["getElementByClass", "getElementById", "getElementbyTagName", "querySelector"];
var choice2 = ["Array", "unction", "Boolean", "Object"];
var choice3 = [" !== ", " == ", " => ", " === "];

var quizChoices = [choice1, choice2, choice3];


// when the page loads, only card 1 will be visible
function loadQuiz() {
    card1.setAttribute("class", "visible");
}

// add event listener to start quiz
startQuiz.addEventListener("click", function () {
    if (startQuiz) {
        // set timer
        setTime();

        card1.removeAttribute("class", "visible");
        card1.setAttribute("class", "card");
        card2.setAttribute("class", "visible");

        populateQuiz();
    }
})

var secondsLeft = 100;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerSpan.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            //   sendMessage();
            // END QUIZ AND SHOW SCORE
            // define below
        }
    }, 1000);
}

function populateQuiz() {
    // questions
    for (let i = 0; i < quizQuestions.length;) {
        var currentQuestion = quizQuestions[i];

        var h1 = document.createElement("h1");
        h1.textContent = currentQuestion;
        Question.appendChild(h1);
    }
    // choices
    for (let i = 0; i < quizChoices.length;) {
        var currentChoices = quizChoices[i];
        currentChoices.forEach((item) => {
            let li = document.createElement("li");
            li.textContent = item;
            choiceList.appendChild(li);
        });
    }
}