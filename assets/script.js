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
// add carousel function to switch cards

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

var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var index = 0;
var currentCard;
var cards = document.querySelectorAll(".card");

function navigate(direction) {
    index = index + direction;
    if (index < 0) { 
      index = cards.length - 1; 
    } else if (index > cards.length - 1) { 
      index = 0;
    }
    currentCard = cards[index];
    if (currentCard) {
        setAttribute("class", "visible");    
    } else {
        removeAttribute("class", "visible");
        setAttribute("class", "card");
    }
  }
  
  next.addEventListener("click", function(event) {
    event.stopPropagation();
    navigate(1);
  });

  prev.addEventListener("click", function(event) {
  event.stopPropagation();
  navigate(-1);
});

navigate(0);
