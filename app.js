// Class # 1
// alert("Hello World");
// console.log("HI");

// var string = "Saira";
// var int = 65;
// var boolean = true;
// console.log(string);

// Practice
// alert("Hello Saira");
// console.log(2 + 2);

// Class # 2
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
