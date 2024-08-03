function generateColorCode() {
    var randomlyGenerated = Math.floor(Math.random()*16777215);
    var ret = "#" + randomlyGenerated.toString(16)
    // console.log(randomlyGenerated , ret)
    document.getElementById('button').innerHTML=ret
    document.body.style.backgroundColor=ret
    // console.log(ret)

}
function onCopy(){
    document.getElementById('red').innerHTML=ret
    // navigator.clipboard.writeText(ret)
    console.log(ret)
    }
//initial call
generateColorCode()

