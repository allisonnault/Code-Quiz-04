var card1 = document.querySelector(".one");
var card2 = document.querySelector(".two");
var card3 = document.querySelector(".three");
var card4 = document.querySelector(".four");
var card5 = document.querySelector(".five");

function loadQuiz() {
    card1.setAttribute("class", "visible");
}

var startQuiz = document.querySelector("#start");
// add event listener to start quiz
startQuiz.addEventListener("click", function() {
    if(startQuiz) {
// set timer
    setTime ();

    card1.removeAttribute("class", "visible");
    card1.setAttribute("class", "card");
    card2.setAttribute("class", "visible");


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