var card1 = document.querySelector(".start");
var card2 = document.querySelector(".question");
var Question = document.querySelector("#question");
var timerSpan = document.querySelector("#timer");
var choiceList = document.querySelector("#choices");
var startQuiz = document.querySelector("#start");
var questionIndex = 0


var questionList = [
    {
        question: "How would you access an HTML element by a specified classname?",
        choices: ["getElementByClass", "getElementById", "getElementbyTagName", "querySelector"],
        correct: "getElementByClass"
    },
    {
        question: "Which is NOT a data type in Javascript?",
        choices: ["Array", "Function", "Boolean", "Object"],
        correct: "Function"
    },
    {
        question: "What symbol(s) would you use to express strict equalitiy?",
        choices: [" !== ", " == ", " => ", " === "],
        correct: " === "
    }

]


// when the page loads, only card 1 will be visible
function loadQuiz() {
    card1.setAttribute("class", "visible");
}

// add event listener to start quiz
startQuiz.addEventListener("click", function () {
    console.log("hello world");
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
    var currentObject = questionList[questionIndex];
    var currentQuestion = currentObject.question;

    Question.textContent = currentQuestion;

    choiceList.innerHTML = " ";
    for (let i = 0; i < currentObject.choices.length; i++) {
        let btn = document.createElement("button");
        btn.textContent = currentObject.choices[i];
        choiceList.appendChild(btn);
    };
}

function nextQuestion() {
    questionIndex++;
    populateQuiz();
}

