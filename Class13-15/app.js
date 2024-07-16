// Chapter # 21 Changing case
var cities = ["karachi" , "lahore" , "islambad"];
var firstLetter = cities.slice(0,1).toUpperCase();
var afterFirstLetter = cities.splice(1).toLowerCase();
var result = firstLetter + afterFirstLetter
for(var i = 0 ; i < cities ; i++){
if(cities === result){
    alert(result + "is the cleanest City")
}
}
// else jb lagye ga to oper wala bhi her bar chalye ga yeh bahar aye ga with break;

var usercity = prompt() //yeh kerna hai
var cities = ["karachi", "lahore", "islambad"];
// var firstLetter = cities.slice(0,1).toUpperCase();
var firstLetter = cities.slice(0,1).toUpperCase();
var afterFirstLetter = cities.slice(1).toLowerCase();
var result = firstLetter + afterFirstLetter
var flag = false
for (var i = 0; i < cities; i++) {
    if (cities === result) {
        flag = true;
        alert(result + "is the cleanest City")
    }
    else{ //falsy value bhi dye saktye hain
        flag = false
        alert(result + "is not the cleanest City")
    }
}





// var students = ["Sana","Saba","Sara"]



var question = "What is Your Name?";
for (var i = 0; i < question.length; i++) {
    if ("?" == charAt(i)) {
        alert("Question Mark is present")
    }
}

// -1 dye dye ga agr wo mhi mila

text = "World War II";
for(var i = 0; i < text.length ; i++){
    if(text.slice(i, i + 12) === "World War II"){
        text = text.slice(0,1) + "the Second World War" + text.slice(i + 12);
    }}

    // ch 21 - 25 miss k github se dekho not complete 










    // var head = prompt("Enter a Head Name Member");
// var tail = prompt("Enter a Tail Name Member");
// var ans = Math.floor(chtoss)
// var chtoss = Math.random()*2
// if(head === 1){
//     document.write(chtoss + "She is a winner" + "<br>")
// }
// else{
//     document.write(chtoss + "She is a winner")
// }


var randompass = "12absdj4G85-4-=-3402348823487109230-o";
var password = "";

for (var i = 0; i < 10; i++) {
    var randomValues = Math.floor(Math.round() * randompass.length)
    password += randompass[randomValues]
}
document.write(password)



// password += randompass
// var round = Math.round(Math.floor())

// for(i = 0 ; i <= 10 ; i++){
//     document.write(password);
// }
// document.write(password)


// Chap 31 Some Mistake Were Accure GitHub account check miss umra New Day () get.day() all are cover in this class but not practicing in class so practice by your selkf 