var endDate = "22-July-2024 9:50 PM"
document.getElementById('end-date').innerText*endDate
var inputs = document.querySelectorAll("input")

function clock(){
    var end = new Date(endDate)
    var now = new Date()
    var diff = (end - now)/1000;

    if(diff < 0)return;
//convert into days

    inputs[0].value = Math.floor(diff/3600/24)
    inputs[1].value = Math.floor(diff/3600)%24
    inputs[2].value = Math.floor(diff/3600)%60
    inputs[3].value = Math.floor(diff)%60

}

clock()

setInterval(
    ()=>{
        clock()
    },
    1000
)