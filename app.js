// Class # 1 (By Myself)
alert("Hello World");
console.log("HI");

var string = "Saira";
var int = 65;
var boolean = true;
console.log(string);

Practice
alert("Hello Saira");
console.log(2 + 2);

alert("Hello Coders! Here's Saira Batool and i welcome to you Guy's on coding Plateform Here I Can share much more..");

console.log("Saira Batool");
console.log("65");   // as a string
console.log(65);     // as a number

// Class # 2 (By Myself)
var fName; //declaration
var fname = "Sana"; //assignment

var myAge = 7;
document.write(myAge + "</br>");

myAge = 6; //Re-assign
document.write(myAge + "</br>");

var fname = "Saira";
var lname = "batool";

document.write(fname + lname); //string concatination

var num = 90;
num = num + 10;
document.write(num);

var myFristName = "Saira"; //camel Case
var my_second_name = "Batool"; //Snake Case

// Operators
var num1 = +prompt("Please Enter First Number: ");
var num2 = +prompt("Please Enter Second Number: ");

var sum = num1 + num2;
var sub = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var modu = num1 % num2; //modulus Or reminder
var pow = num1 ** num2; //power

document.write("<center>"+
  "<table border = '5px'>" +
    "<tr>" +
    "<th>" + "Addition:" + "</th>" +
    "<td>" + sum + "</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "Subtraction:" + "</th>" +
    "<td>" + sub + "</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "Multiplication:" + "</th>" +
    "<td>" + mult + "</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "Division:" + "</th>" +
    "<td>" + div + "</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "Modulus:" + "</th>" +
    "<td>" + modu + "</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "Power:" + "</th>" +
    "<td>" + pow + "</td>" +
    "</tr>" +
    "</table>"+
    "</center>"
);


// class # 2 (ClassRoom)
var fName; //declaration
fName = "Umra"; //assignment

var myAge = 7;
document.write(myAge + "<br/>");

myAge = 8;  // Re-assign
document.write(myAge);


var val1 = "Umra";
var val2 = "0";

document.write(val1 + val2); // String Concatination

var originalNum = 90;
originalNum = originalNum + 10;
document.write(originalNum)

var myFirstName ="Umra"; // Camel Case
document.write(my_first_name); // Snake Case

// ________________Operators________________

var num1 = +prompt("Enter Your Value 1: ");
var num2 = +prompt("Enter Your Value 2: ");

var sum = num1 + num2;
 var sub = num1 - num2;
// var product = num1 * num2;
// var divide = num1 / num2;
// var modulus = num1 % num2;
// var exponent = num1 ** num2;

document.write(
    "<table border = '1px'>" +
    "<tr>" +
    "<th>"+"Addition" +"</th>"+
    "<td>" +sum + "</td>"
    +"</tr>"+
   
    "<tr>" +
    "<th>"+"Subtraction" +"</th>"+
    "<td>" +sub + "</td>"
    +"</tr>"
    +"</table>"
)

document.write("Sum = " + sum +"<br/>")
document.write("sub = " + sub +"<br/>")
document.write("product = " + product +"<br/>")
document.write("divide = " + divide +"<br/>")
document.write("modulus = " + modulus +"<br/>")
document.write("exponent = " + exponent +"<br/>")

var userName = prompt("Enter Your name :");
alert("Hello " + userName)

// TUESDAY
var guess = +prompt("Enter number that's lucky for you");
var choice = 6;
var yourchoice = guess == 6;

if(yourchoice){
    document.write("<i>"+"You win! BURHHHH"+ "</i>")
}else if(yourchoice+1){
    document.write("you are close")
}

else{
    document.write("<i>"+"Try Again" + "</i>")
}

var num1 = 6;
var num2 = 3;

if(num1 < 10 && num2 > 1 ){
    document.write("True")
}
else if((num1 == 6 && num2 == 3 ) || num2 == 3){
    document.write("Kia print hoga tm batao");
}
else if (num1==6 || num2==5){
    document.write("false")

}

// var num = +prompt("enter a number");
// var even = num%2==0;

// if(num > 0 && num == even){
//     document.write("<i>" + "You Write a NEGITIVE OR EVEN" + "<i>")
// }else{
//     document.write("<i>" + "You Write a POSITIVE OR ODD" + "<i>")
// }