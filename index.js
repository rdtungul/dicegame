var randomNumber1 = Math.floor(Math.random() * 6) + 1;
Math.floor(randomNumber1) + 1; // giving random numbers 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //random number to sync the image file

var randomImageSource = "images/" + randomDiceImage; // giving random images to file

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



// second random dice image switch
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!"
    document.querySelector("h1").style.fontSize = "3rem";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
    document.querySelector("h1").style.fontSize = "3rem";
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
    document.querySelector("h1").style.fontSize = "3rem";
}