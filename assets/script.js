var card1 = document.querySelector(".start");
var card2 = document.querySelector(".question");

var Questions = [
    {question: "How would you access an HTML element by a specified classname?", 
    choices:{
        A: "A. getElementByClass",
        B: "B. getElementById",
        C: "C. getElementbyTagName",
        D: "D. querySelector",
    }},
    {question: "Which is NOT a data type in Javascript",
    choices:{
        A: "A. Array",
        B: "B. Function",
        C: "C. Boolean",
        D: "D. Object",
    }},
    {question: "What symbol(s) would you use to express strict equalitiy?",
    choices:{
        A: "A. !== ",
        B: "B. == ",
        C: "C. => ",
        D: "D. === ",
    }}
   ]

// when the page loads, only card 1 will be visible
function loadQuiz() {
    card1.setAttribute("class", "visible");
}

var startQuiz = document.querySelector("#start");
// add event listener to start quiz
startQuiz.addEventListener("click", function () {
    if (startQuiz) {
        // set timer
        setTime();

        card1.removeAttribute("class", "visible");
        card1.setAttribute("class", "card");
        card2.setAttribute("class", "visible");

// create a for loop to load in questions and choices

    }
})

var secondsLeft = 300;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        console.log(secondsLeft);

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            //   sendMessage();
            // END QUIZ AND SHOW SCORE
            // define below
        }
    }, 1000);
}

