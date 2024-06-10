
// ****************************Class # 1*******************************

alert("Hello World");
console.log("HI");

// DATA TYPE 
var string = "Saira";
var int = 65; //number
var boolean = true;
console.log(string);

// Practice
alert("Hello Saira");
console.log(2 + 2);

alert("Hello Coders! Here's Saira Batool and i welcome to you Guy's on coding Plateform Here I Can share much more..");

console.log("Saira Batool");
console.log("65");   // as a string
console.log(65);     // as a number

// ****************************Class # 2********************************

var fName; //declaration                        var a;
var fname = "Sana"; //assignment                a = 1;
// Declaration + Assigment = (Initialization).  var a = 1;

var myAge = 7;
document.write(myAge + "</br>");

myAge = 6; //Re-assign
document.write(myAge + "</br>");

var fname = "Saira Batool";
var lname = "787";

document.write(fname + lname + "</br>"); //string concatination //Saira Batool787

var fname1 = "Saira";
var lname1 = "Batool";
document.write(fname1 + " " + lname1 + "</br>");

var num = 90;
num = num + 10; // OR num += 10; 
document.write(num + "</br>"); //100

var num1 = "10";
var num2 = "20";

// document.write(num1 + num2);
// OR:
document.write(num1 + num2 + "</br>") //1020

var myFristName = "Saira";     //Camel Case
var my_second_name = "Batool"; //Snake Case

// ARITHMETIC OPERATORS
var num1 = +prompt("Please Enter First Number: ");
var num2 = +prompt("Please Enter Second Number: ");

var sum = num1 + num2;
var sub = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var modu = num1 % num2; //modulus Or reminder
var pow = num1 ** num2; //power

document.write("Sum = " + sum + "<br/>"); //You can perform all the operations like this..

document.write("<center>" +
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
    "</table>" +
    "</center>"
);

var userName = prompt("Enter Your name :");
alert("Hello " + userName) //Hello Saira

// ****************************Class # 3*******************************

// INCREMENT AND DECREMENT 
// ++num;//pre a+1 = a i think so
// num++;//post 
var a = 2;
var b = 10;
// a++ = a= a+1
// a-- = a= a-1

// document.write(++a + a++ + a)//3 + 3 + 4 =  10
document.write(a++ + ++a + a + "<br/>"); // 2 + 4 + 4 = 10
document.write(--b + b-- + b + "<br/>"); // 9 + 9 + 8 = 26
// document.write(a++ + --a + ++b - b++) // 2 + 2 + 11 - 11 = 4
document.write(++b + "<br/>"); //11
document.write("Umra" + a + "</br>") // Umra2
document.write("Umra" - a + "</br>") // NaN

//PRACTICE (DRY RUN)
// var a = 2;
// var b = 3;

// document.write(a++); //2
// document.write(++a + --b + a++ + b-- );
//3 + 2 + 3 + 2 = 10
// document.write(a++ + a++ + a++ + --b + b);
//2 + 3 + 4 + 2 + 2 = 13
// document.write(a++ + ++a + a + a-- + b-- - b - a );
//2 + 4 + 4 + 4 + 3 - 2 - 3 = 12

// DMAS RULE    /  *  +  -

var totalCost = 1 + 3 * 4;  //13
document.write(totalCost + "<br>")
var totalCost = 1 + (3 * 4); //13
var totalCost = (1 + 3) * 4; //16 line by line var not required
document.write(totalCost + "<br>")
var resultOfComputation = (2 * 4) * 4 + 2; //34 
resultOfComputation = (2 * 4) * (4 + 2); //48 
document.write(resultOfComputation + "<br>")
