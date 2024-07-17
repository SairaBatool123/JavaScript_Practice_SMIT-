//NUMBER GUESSING GAME

var userInput = +prompt("Please Enter Any Number Here 👇");
var secretNum = 8;

if(userInput == secretNum){
alert("YAHOO! You Win The Game 🏆")
}else if(userInput == 7){
    alert("You Are Close Let's Play Again 💸")
}else if(userInput == 9){
    alert("You Are Close Let's Play Again 💸")
}else{
    alert("TRY AGAIN!! 😓")
}