// ****************************Class # 7*******************************

var courses = ["Gaditeck", "Techno Kids", "digital marketing", "Web development", "Graphic Designing", "3D Animation"];
document.write(courses)
document.write("<br>")
courses.push("Designing")
document.write(courses)
document.write("<br>")
courses.pop()
document.write(courses)
document.write("<br>")
courses.shift()
document.write(courses)
document.write("<br>")
courses.unshift("New course")
document.write(courses)
document.write("<br>")

//SPLICE
courses.unshift("New course")
document.write(courses)
document.write("<br>")
//SLICE
courses.unshift("New course")
document.write(courses)

document.write("<select>" +
    '<option  value= ' + courses[1] + '>' + courses[1] + '</option>'
    + "</select>")
document.write("<br>")


// ****************************Class # 8*******************************

var table = +prompt("Enter Any Table You want");
var count = +prompt("Which line do you print");
var start = +prompt("Enter you wanna be start");

for (i = start; i <= count; i++) {
    document.write(table + "x" + i + "=" + table * i + "<br>");
}

var arr = ["saira", "sajida", "Shafqat"]

//arr humesha 0 se start hoga arr humesha length se call kiye jatye hain for large number of data and arr mai hum humesha < ya > lagatye hain = nhi lagatyen hain not print with comma!!
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>")
}

// pop and push are efficient because on ki indexing same rehti hai or jb hum unshift shift kertyen hain to sb apna index change kertye hain


var city = ["karachi", "lahore", "islamabad", "Quetta"]
var usercity = prompt("enter your city");
var matched = "no" //false  //flag variable jis ko hum loop or if mai used karyen gyen 

for (var i = 0; i < city.length; i++) {
    if (city[i] === usercity) {
        matched = "yes"
        document.write("City Found <br>")
        break //rok do sare check na karo bs index pr ja ker wahin check karo
    }
}
if (matched == "no") {
    document.write("City Not Found <br>")
}

var menu = ["biryani", "karahi", "paratha", "Kabab", "fries", "Chicken Shawarma", "Qurma", "Qeema", "Alo ghoust"]
var resturant = prompt("Please! enter what You want to eat?");
var matched = false

for (var i = 0; i < resturant.length; i++) {
    if (menu[i] === resturant) {
        matched = true
        document.write("Food is available");
        break;
    }
}
if (matched == false) {
    document.write("Here is Our Menu!!" + "<br>");
    for (i = 0; i < menu.length; i++) {
        document.write(menu[i] + "<br>");
    }
}

// array ki data type object hoti hai yeh aik error hai 

// ****************************Class # 9*******************************

//Nested Loop:
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        document.write("*")
    }
    document.write("<br>")
}


for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        document.write("*")
    }
    document.write("<br>")
}


for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        document.write("*")
    }
    document.write("<br>")
}

var userinput = +prompt("Enter Any Rows And Column YOu Wanna Print");
for (var i = 1; i <= userinput; i++) {
    for (var j = 1; j <= userinput; j++) {
        document.write("*")
    }
    document.write("<br>")
}

var firstinput = +prompt("Enter A first method");

for (var i = 1; i <= firstinput; i++) {
    for (var j = 1; j >= firstinput){
        document.write("*")
    }
}


var stdName = ["sara", "zara", "sana"]
var fName = ["Ali", "Khan"]

for (i = 0; i < stdName.length; i++) {
    for (j = 0; j < fName.length; j++) {
        document.write(stdName[i] + " " + fName[j] + "<br>")
    }
}

