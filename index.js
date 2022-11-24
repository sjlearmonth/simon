// Configure event listeners
$("#green").on("click", handleGreenButton);
$("#red").on("click", handleRedButton);
$("#yellow").on("click", handleYellowButton);
$("#blue").on("click", handleBlueButton);
$(document).on("keypress", startGame);

var gameSequence = [];
var clickCount = 0;
var gameButtons = ["green", "red", "yellow", "blue"];
var randomNumber = Math.floor(Math.random() * 4);
var randomButton = gameButtons[randomNumber];
var levelCount = 1;

function startGame() {

  $("h1").text("Level " + levelCount++);

  randomNumber = Math.floor(Math.random() * 4);
  randomButton = gameButtons[randomNumber];

  animateButton(randomButton);
  gameSequence.push(randomButton);
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

function handleGreenButton() {
  animateButton("green");
  clickCount++;

  if (gameSequence[clickCount-1] === "green") {

    if (clickCount === gameSequence.length) {

      setTimeout(function () {
          randomNumber = Math.floor(Math.random() * 4);
          randomButton = gameButtons[randomNumber];
          gameSequence.push(randomButton);
          animateButton(randomButton);}, 700);
          clickCount = 0;
          $("h1").text("Level " + levelCount++)
    }
  } else {
    const sound = new Audio("sounds/wrong.mp3");
    sound.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 700);
    gameSequence = [];
    clickCount = 0;
    levelCount = 1;
    $("h1").text("Game over, press any key to restart");
  }
}

function handleRedButton() {
  animateButton("red");
  clickCount++;

  if (gameSequence[clickCount-1] === "red") {

    if (clickCount === gameSequence.length) {

      setTimeout(function () {
          randomNumber = Math.floor(Math.random() * 4);
          randomButton = gameButtons[randomNumber];
          gameSequence.push(randomButton);
          animateButton(randomButton);}, 700);
          clickCount = 0;
          $("h1").text("Level " + levelCount++)
    }
  } else {
    const sound = new Audio("sounds/wrong.mp3");
    sound.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 700);
    gameSequence = [];
    clickCount = 0;
    levelCount = 1;
    $("h1").text("Game over, press any key to restart");
  }
}

function handleYellowButton() {
  animateButton("yellow");
  clickCount++;

  if (gameSequence[clickCount-1] === "yellow") {

    if (clickCount === gameSequence.length) {

      setTimeout(function () {
          randomNumber = Math.floor(Math.random() * 4);
          randomButton = gameButtons[randomNumber];
          gameSequence.push(randomButton);
          animateButton(randomButton);}, 700);
          clickCount = 0;
          $("h1").text("Level " + levelCount++)
    }
  } else {
    const sound = new Audio("sounds/wrong.mp3");
    sound.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 700);
    gameSequence = [];
    clickCount = 0;
    levelCount = 1;
    $("h1").text("Game over, press any key to restart");
  }

}

function handleBlueButton() {
  animateButton("blue");
  clickCount++;

  if (gameSequence[clickCount-1] === "blue") {

    if (gameSequence.length === clickCount) {

      setTimeout(function () {
          randomNumber = Math.floor(Math.random() * 4);
          randomButton = gameButtons[randomNumber];
          gameSequence.push(randomButton);
          animateButton(randomButton);}, 700);
          clickCount = 0;
          $("h1").text("Level " + levelCount++)
    }
  } else {
    const sound = new Audio("sounds/wrong.mp3");
    sound.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 700);
    gameSequence = [];
    clickCount = 0;
    levelCount = 1;
    $("h1").text("Game over, press any key to restart");
  }
}
