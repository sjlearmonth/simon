$(".btn").click(function() {
  const buttonColor = $(this).attr("id");
  animateButton(buttonColor);
  clickCount++;
  if (gameSequence[clickCount - 1] === buttonColor) {
    if (clickCount === gameSequence.length) {
      const randomButton = startNextSequence()
      setTimeout(function() {
        animateButton(randomButton);
        $("h1").text("Level " + levelCount++);
      }, 700);
    }
  } else {
    animateWrongAnswer();
  }
})

$(document).on("keypress", startGame);

var gameSequence = [];
var clickCount;
var gameButtons = ["green", "red", "yellow", "blue"];
var randomNumber;
var randomButton;
var levelCount = 1;

function startNextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  randomButton = gameButtons[randomNumber];
  gameSequence.push(randomButton);
  clickCount = 0;
  return randomButton;
}

function startGame() {

  $("h1").text("Level " + levelCount++);
  startNextSequence();
  setTimeout(function() {
    animateButton(randomButton);
  }, 700);
}

function flashButton(buttonColor) {
  const buttonId = "#" + buttonColor;
  $(buttonId).css("backgroundColor", "#D3DEDC");
  $(buttonId).addClass("pressed");
  setTimeout(function() {
    $(buttonId).css("backgroundColor", buttonColor);
    $(buttonId).removeClass("pressed");
  }, 50);
}

function animateButton(button) {
  const soundPath = "sounds/" + button + ".mp3";
  const sound = new Audio(soundPath);
  sound.play();
  flashButton(button);
}

function animateWrongAnswer() {
  const sound = new Audio("sounds/wrong.mp3");
  sound.play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 700);
  gameSequence = [];
  clickCount = 0;
  levelCount = 1;
  $("h1").text("Game over, press any key to restart");
}
