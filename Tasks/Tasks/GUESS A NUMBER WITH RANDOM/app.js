var usernum  = +prompt("Please Enter A Number Between 1 - 10")
var randomlyGenerated = Math.random()*10
if(usernum == randomlyGenerated){
    document.write("You Guess The Right One")

}else{
    document.write("Please, TRY AGAIN")
}
