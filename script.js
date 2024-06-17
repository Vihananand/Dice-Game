var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomPath1 = "./Assets/Images/" + randomImage1;

document.querySelectorAll("img")[0].setAttribute("src", randomPath1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomPath2 = "./Assets/Images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomPath2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins🚩";
}
if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
if(randomNumber2 == randomNumber1){
    document.querySelector("h1").innerHTML = "Draw💀";
}