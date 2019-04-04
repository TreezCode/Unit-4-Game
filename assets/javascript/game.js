
// GLOBAL VARIABLES
// ===================================================================
var compGuess = 0;
var userScore = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var wins = 0;
var losses = 0;
var round = 1;
var isDone = false;
$("alert").html = message;
var message = "";

// FUNCTIONS
// =====================================================================
function reset() {
   isDone = false;
   compGuess = Math.floor(Math.random() * 102) + 19;
   console.log(compGuess);
   userScore = 0;
   gem1 = Math.floor(Math.random() * 12) + 1;
   gem2 = Math.floor(Math.random() * 12) + 1;
   gem3 = Math.floor(Math.random() * 12) + 1;
   gem4 = Math.floor(Math.random() * 12) + 1;
   $("#target-score").html(compGuess);
   $("#user-score").html(userScore);
   $("#wins").html(wins);
   $("#losses").html(losses);
   $("#round").html(round);
  
}

function scoreCheck() {
   if (userScore === compGuess) {
      $("#message").html("You Win!");
      gem1 = 0;
      gem2 = 0;
      gem3 = 0;
      gem4 = 0;
      wins++;
      round ++;
      isDone = true;
      $("#round").html(round);
      $("#wins").html(wins);
      reset();
   }
   if (userScore > compGuess) {
      $("#message").html("Awe, maybe next time!");
      gem1 = 0;
      gem2 = 0;
      gem3 = 0;
      gem4 = 0;
      losses++;
      round++;
      isDone = true;
      $("#round").html(round);
      $("#losses").html(losses);
      reset();
   }
}

// 
// =========================================================
$("#start-btn").on("click", function start() {
   $("#intro-page").css('display', "none");
   $("#game-page").css('display', "grid");
});

$("#next-btn").on("click", function start() {
   round++
   reset();
   $("#message").html("");
});

$("#gem1").on("click", function gemAdd() {
   userScore = userScore + gem1;
   $("#user-score").html(userScore);
   $("#message").html("You gained " + gem1 + "pts!");
   if (isDone === false) {
      scoreCheck();
   }
});

$("#gem2").on("click", function gemAdd() {
   userScore = userScore + gem2;
   $("#user-score").html(userScore);
   $("#message").html("You gained " + gem2 + "pts!");
   if (isDone === false) {
      scoreCheck();
   }
});

$("#gem3").on("click", function gemAdd() {
   userScore = userScore + gem3;
   $("#user-score").html(userScore);
   $("#message").html("You gained " + gem3 + "pts!");
   if (isDone === false) {
      scoreCheck();
   }
});

$("#gem4").on("click", function gemAdd() {
   userScore = userScore + gem4;
   $("#user-score").html(userScore);
   $("#message").html("You gained " + gem4 + "pts!");
   if (isDone === false) {
      scoreCheck();
   }
});
