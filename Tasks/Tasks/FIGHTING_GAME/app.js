var character1 = document.getElementById('char1');
var right = 0; 

function animated1() {
    console.log(event.keyCode)

    if (event.keyCode === 39) {
        character1.src = "./images/forward1.gif"
        character1.style.height = "250px"
        right = right + 10
        character1.style.left = right + "px"
    }
    if (event.keyCode === 37) {
        character1.src = "./images/forward1.gif"
        character1.style.height = "250px"
        right = right - 10
        character1.style.left = right + "px"
    }
    if(event.keyCode === 32){
        character1.src = "./images/kick1.gif"
        character1.style.height = "300px"

        setTimeout(function(){
            character1.src = "./images/character1.gif"          
            character1.style.height = "250px"
        },1000)
    }
}

var character2 

function animated2(){

}

window.onkeydown = animated1
window.onkeydown = animated2