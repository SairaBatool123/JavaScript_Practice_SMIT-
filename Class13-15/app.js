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