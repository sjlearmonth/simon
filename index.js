var gameSequence;
var clickCount;
const gameButtons = ["green", "red", "yellow", "blue"];
var randomNumber;
var randomButton;
var levelCount;

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
  $("h1").text("Game over, press any key to restart");
}

$(".btn").click(function() {
  const buttonColor = $(this).attr("id");
  animateButton(buttonColor);
  clickCount++;
  if (gameSequence[clickCount - 1] === buttonColor) {
    if (clickCount === gameSequence.length) {
      const randomButton = fetchRandomButton();
      setTimeout(function() {
        animateButton(randomButton);
        $("h1").text("Level " + levelCount++);
      }, 700);
    }
  } else {
    animateWrongAnswer();
  }
})

function startGame() {
  gameSequence = [];
  levelCount = 1;
  $("h1").text("Level " + levelCount++);
  randomButton = fetchRandomButton();
  setTimeout(function() {
    animateButton(randomButton);
  }, 700);
}

$(document).on("keypress", startGame);

function fetchRandomButton() {
  clickCount = 0;
  randomNumber = Math.floor(Math.random() * 4);
  randomButton = gameButtons[randomNumber];
  gameSequence.push(randomButton);
  return randomButton;
}
