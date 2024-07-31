var count = 0

function counterOn(){
    count++
    document.getElementById("counter").innerHTML=count
}
function reset(){
    count=0
    document.getElementById("counter").innerHTML=count
}
function counterOff(){
    count--
    document.getElementById("counter").innerHTML=count
}
