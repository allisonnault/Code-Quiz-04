var card1 = document.querySelector("#one");
var card2 = document.querySelector("#two");
var card3 = document.querySelector("#three")
var Question = document.querySelector("#question");
var timerSpan = document.querySelector("#timer");
var choiceList = document.querySelector("#choices");
var startBtn = document.querySelector("#start");
var spanMessage = document.querySelector("#message");

var questionIndex = 0
var secondsLeft = 5;
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

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            card2.removeAttribute("class", "visible");
            card2.setAttribute("class", "hidden");
            card3.setAttribute("class", "visible");

        }
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
    spanMessage.textContent = " ";
    populateQuiz();
}

// add event listener to choices
choiceList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button") === true)
        console.log(event);

    if (element.innerHTML === currentObject.correct) {
        spanMessage.textContent = "Correct!";
        console.log("Correct!");
        nextQuestion();
    } else {
        spanMessage.textContent = "Incorrect!";
        console.log("incorrect");
        // secondsLeft-10;
    }

})

//  TO DO:
// figure out how to deduct 10 seconds from time for wrong answer
// set up data storage for quiz scores

// submit scores and initials
var submitBtn = document.querySelector("#submit")
var initialsInput = document.querySelector("#initials");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("working");

    var initials = initialsInput.value;
    var score = secondsLeft;
    if (initials === "") {
        // displayMessage isn't working
        // displayMessage("error", "Initials cannot be blank");
    }

    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
});


// To end quiz:
// if time runs out, or questionIndex > questionList.lenght
