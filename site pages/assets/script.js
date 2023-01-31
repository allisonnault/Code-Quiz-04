var card1 = document.querySelector("#one");
var card2 = document.querySelector("#two");
var card3 = document.querySelector("#three")
var Question = document.querySelector("#question");
var timerSpan = document.querySelector("#timer");
var choiceList = document.querySelector("#choices");
var startBtn = document.querySelector("#start");
var spanMessage = document.querySelector("#message");
var score = 0;
var questionIndex = 0;
var secondsLeft = 15;
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
var currentObject = questionList[questionIndex];

// when the page loads, only card 1 will be visible
function loadQuiz() {
    card1.setAttribute("class", "visible");
}

// add event listener to start quiz
startBtn.addEventListener("click", function () {
    console.log("hello world");
    if (startBtn) {
        // set timer
        setTime();

        card1.removeAttribute("class", "visible");
        card1.setAttribute("class", "hidden");
        card2.setAttribute("class", "visible");

        populateQuiz();
    }
})

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerSpan.textContent = secondsLeft + " seconds left";

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            secondsLeft = 0;
            clearInterval(timerInterval);
            card2.removeAttribute("class", "visible");
            card2.setAttribute("class", "hidden");
            card3.setAttribute("class", "visible");

        }
        console.log(questionIndex);
    }, 1000);
}

function populateQuiz() {
    currentObject = questionList[questionIndex];
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
    if (questionIndex === questionList.length) {
        secondsLeft = 0;
        card2.removeAttribute("class", "visible");
        card2.setAttribute("class", "hidden");
        card3.setAttribute("class", "visible");

    } else {
        spanMessage.textContent = " ";
        populateQuiz();
    }
}

// add event listener to choices
choiceList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button") === true)
        console.log(event);

    if (element.innerHTML === currentObject.correct) {
        spanMessage.textContent = "Correct!";
        score = score + 5;
        setTimeout(() => {nextQuestion();}, 1000);
    } else {
        spanMessage.textContent = "Incorrect!";
       secondsLeft = secondsLeft-10;
       if (secondsLeft < 0) {
        secondsLeft = 0
       }  setTimeout(() => {nextQuestion();}, 1000);
    }
})

//  TO DO:
// figure out how to deduct 10 seconds from time for wrong answer


// submit scores and initials
var submitBtn = document.querySelector("#submit")
var initialsInput = document.querySelector("#initials");


submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = initialsInput.value;
    if (initials === "") {
        alert("Initials cannot be empty");
        // tried displayMessage, but that wasn't working
    } else {
        localStorage.setItem("initials", initials);
        localStorage.setItem("score", score);
        window.location.href = "./highscore.html"
    }
});

// To end quiz:
// if time runs out, or questionIndex > questionList.lenght
