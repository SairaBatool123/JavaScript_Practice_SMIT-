
// ****************************Class # 4*******************************
var tableNum = 2;
var counter = 1;
var inc = 1;


document.write(tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>" +
    tableNum + "x" + counter++ + "=" + tableNum * inc++ + "</br>"
);

// COMPARISON OPERATORS
document.write(3 == "3")    //true
document.write("<br>");

document.write(6 !== "6"); //true
document.write("<br>");

var isRaining = false;
if (isRaining) {
    document.write("Wear Raincoat ")
}
document.write("Umra"); //Umra
document.write("<br>");

var city = prompt("Where do you live?");
var correctAns = "karachi";
var score = 0;    //0  OR 1

if (city === correctAns) {
    alert("correct"); //1  OR  2
    score++
}
else {
    alert("incorrect") //0 OR 0
}
console.log(score)
document.write("<br>");

document.write(typeof (2 * "2")) //number

// check it line by line
var fullName = prompt("What is your name?");
if (fullName === "saira") {
    document.write("<h1>" + "Enter In My Home" + "</h1>");
}
// else{
//     document.write("<h1>" + "Please Go Ahead" + "</h1>")
// }
else if (fullName === "Saira") {
    document.write("<h1>" + "Enter In My Home" + "</h1>")
}else {
    document.write("<h1>" + "Please Go Ahead" + "</h1>")
}

var userName = prompt("What is your gender?", "Female");
document.write(typeof 2 + "2"); //number2
document.write(typeof (2 + "2")); //string 
document.write(typeof city) //city

// ****************************Class # 5*******************************

var cityOfLights = prompt("Enter the name of city of lights");
var capital = prompt("Enter capital of Pakistan")
if (cityOfLights === "karachi") {
    alert("Correct")
}if (cityOfLights !== "karachi") {
    alert("Wrong Answer")
}

var guess = +prompt("Enter number that's lucky for you");
var choice = 6;
var yourchoice = guess == choice;

if (yourchoice) {
    document.write("<i>" + "You win! BURHHHH" + "</i>")
} else if (yourchoice == 4) {
    document.write("you are close")
} else if (yourchoice == 5) {
    document.write("you are close")
} else {
    document.write("<i>" + "Try Again" + "</i>")
}

var num1 = 6;
var num2 = 3;

if (num1 < 10 && num2 > 1) {
    document.write("True")
}else if ((num1 == 6 && num2 == 3) || num2 == 3) {
    document.write("Kia print hoga tm batao");
}else if (num1 == 6 || num2 == 5) {
    document.write("false")
}

var num = +prompt("enter a number");
var even = num % 2 == 0;

if (num > 0 && num == even) {
    document.write("<i>" + "You Write a NEGITIVE OR EVEN" + "<i>")
} else {
    document.write("<i>" + "You Write a POSITIVE OR ODD" + "<i>")
}

// ****************************Class # 6*******************************

var companyname = prompt("What is your previous company name?");
var userexperience = +prompt("What is your previous experience?");
var userskills = prompt("Do you three languages?")

var companychecked = companyname === "Nisum" || "Devsinc";
var experiencechecked = userexperience == 3;
var skillschecked = userskills === "python" && "java";

if (companychecked) {
    if (experiencechecked) {
        if (skillschecked) {
            alert("Yahooo! That's GOOD");
        }
        else {
            alert("Unfortunately  we are not hire you because of your sills")
        }
    } else {
        alert("Your experience not matched")
    }
} else {
    alert("You are not from our targeted company");
}

// var mypassword = "SairaBatool";
// var userpassword = prompt("Enter Your Password Here!");
// var password = userpassword === mypassword;  //"SairaBatool" 

// if (userpassword === " ") {
//     alert("Please enter your password");
// } else if (password) {
//     alert("Correct!")
// }
// else {
//     alert("Incorrect password")
// }

// DELETEING AND INSERTION FROM LAST 
var classmates = ["Bushra", "Anila", "Misbah", "ayesha", "Umm-e-Abiha", "Ammarah"]

document.write(classmates)

document.write("</br>")

classmates.push("Saira")   //strings zaroor dena hota hai 
document.write(classmates)

document.write("</br>")

classmates.pop() //no parameters passed in it
classmates.pop()
document.write(classmates)
