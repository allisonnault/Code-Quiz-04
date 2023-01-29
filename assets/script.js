// start quiz button
var startQuiz = document.querySelector("#start");

// define HTML elements
var promtEl = document.getElementById("promt")

var quizQuestions = document.getElementsByClassName("quiz-questions")

var buttonEl = document.getElementsByClassName("card-footer")

// add list elements
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// add event listener to start quiz
startQuiz.addEventListener("click", function() {
    if(startQuiz) {
// set timer
    setTime ();
// ask 1st question
promtEl.textContent = "How would you access an HTML element by a specified classname?";
// add multiple choice
quizQuestions.appendChild(li1);
li1.textContent = "laksdj;flakj";

    }
})

var secondsLeft = 300;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    console.log(secondsLeft);

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    //   sendMessage();
    // END QUIZ AND SHOW SCORE
    // define below
    }
  }, 1000);
}

