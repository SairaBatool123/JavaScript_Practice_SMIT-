var player1 = prompt("What Ever You Want Head OR Tail?")
var player2 = prompt("What Ever You Want Head OR Tail?")

var toss = Math.random() * 2 
var finalize = Math.floor(toss)

if(finalize == 0){
    alert("Player1 Won The Game!")
}else{
    alert("Player2 Won The Game!")

}