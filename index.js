// alert("Working");

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//generate a number between 0-0.99
//generate a number between 0-5
//round down
//add one to get number between 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//select and change elements
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// chnage title h1
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player One wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player Two wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
