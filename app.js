// /Questions PDF 10-14.docx.pdf

// Chapter 10 (if statements)
// Q1

// var city = "Karachi"
// if (city == "Karachi") {
//      console.log("The City OF Lights")}

// // Q2
// var x = 2, y = 2

// if (x === y){
//     z = prompt(`Enter value in number from 1-9`)
// }

// Q3
// var  zipCode = parseInt(prompt(`Enter Zip Code, 10010`))
// if(zipCode === 10010){
//     alert("Karachi")
// }
// else{
//     alert("Please write correct city")
// }

// Q4
// var x = 1
// if(x === 1){
//     x = ++x
// }

// Chapter 11 (Comparison Operators)

// // Q1
// x = 1;
// y = 2;

// if(x != y){
// }

// // Q2

// if(x <= y){
// }

// Q3

// if(x != 25){
// x = 25

// }

// Q4

// if(15 != 25){
// alert("congrats")
//     }

// Q5
// var_name = "ashfaq"
// user_name = prompt("Enter your first name")
// if(var_name != user_name){
// alert("No Match")
//     }

// Chapter 12 (if…else and else if statements)
// Q1
// var var1 = 10;
// var var2 = 5;

// if (var1 >= var2) {
//   alert("var1 is greater than or equal to var2");
// } else {
//   alert("var1 is less than var2");
// }

// Q2

// var marks1 = prompt("Enter your English marks (out of 100):");
// var marks2 = prompt("Enter your Urdu marks (out of 100):");
// var marks3 = prompt("Enter your Maths marks (out of 100):");
// var marks4 = prompt("Enter your Physics marks (out of 100):");
// var marks5 = prompt("Enter your Chemistry marks (out of 100):");
// var marks6 = prompt("Enter your Biology marks (out of 100):");
// var marks = parseInt(marks1) + parseInt(marks2) + parseInt(marks3) + parseInt(marks4) + parseInt(marks5) + parseInt(marks6);
// totalSubject = 6;

// var percentage = (marks / 600) * 100;

// if(percentage > 79 ){
//     grade = "A+";
// }
// else if(percentage > 70){
//     grade = "A";
// }
// else if(percentage > 60){
//     grade = "B";
// }
// else if(percentage > 50){
//     grade = "C";
// }
// else if(percentage > 40){
//     grade = "D";
// }
// else{
//     grade = "F";
// }

// document.write("Mark Sheet <br>");
// document.write(`Total Marks ${marks} out of 600 <br>`);
// document.write("=========== <br>");
// document.write(`Marks: ${marks} <br>`);
// document.write(`Percentage: ${percentage}% <br>`);
// document.write(`Grade: ${grade} <br>`);

// Q3
// a = 11
// if (a === 10) {
//     alert("a is 10");
//     }
// else{
//     alert(`correct value of a is ${a}`);
// }

// Q4

// userCity = prompt("Enter your city name")
// if(userCity === "karachi" || userCity === "Karachi"){
//     alert(`Acknowledged, it is Karachi`)

// }
// else if(userCity === "lahore" || userCity === "Lahore"){
//     alert(`Acknowledged, it is Lahore`)
// }
// else{
//     alert(`Please enter correct city`)
// }

// Chapter 13 (Testing sets of conditions)

// Q1
// a = 1, b = 2, c = 3, d = 4
// if (a === b && c === d) {

// }

// Q2
// if (a === b  || c !== d) {

// }

// Q3

// name_user = "Hamza", age_user = 18
// if ((name_user === "Hamza"  || a === "Arsalan") || age_user <60 ) {

// }

// Q4
// x = 22, y = 23
// if (x < y || x > y) {
//     alert("x is not equal to y")
// }

// Q5
// fname = "Muzammil", lname = "Bhashani"
// fUserName = prompt("Enter your first name")
// lUserName =prompt("Enter your last name")
// if (fname === fUserName && lname === lUserName) {
//     alert("congrats")
// }

// Chapter 14 (If statements nested)

// // Q1
// password = prompt("Enter your password");
// if (password !== "") {
//   if (password.length <= 5) {
//     alert("Password must be greater than 5");
//   } else {
//     alert("OK");
//   }
// } else {
//   alert("Please enter your password becasue password is empty");
// }

// // Q2

// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }
//  // Q3
//  if (a === 1 && c === "Max") {
//     alert("OK");
// }

// // Q4
// y = 20
// z = 20
// if( y === z){
//     if(y <= z){
//         alert("equal")
// }
// }


// Q1

// var city = "Karachi"
// if (city == "Karachi") {
//    alert("Welcome to city of lights")}

// // Q2
// var gender = prompt("Enter your gender")
// if (gender == "male") {
// alert("Good Morning Sir")
// }
// else if(gender == "female"){
//     alert("Good Morning Ma'am")
// }


// // Q3
// var signalColor = prompt("Enter your signal color")
// if (signalColor == "red") {
// alert("Must Stop")
// }
// else if(signalColor == "yellow"){
//     alert("Ready to move")
// }
// else if(signalColor == "green"){
//     alert("Move now")
// }
// else{
//     alert("Please enter correct signal color (Red, Yellow, Green)")
// }

// // Q4
// var remaing_fuel = prompt("Enter your remaining fuel")
// if (remaing_fuel < 0.25) {
//     alert("Please refill the fuel in your car")
// }

// Q5

// a

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


// c


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// // if(c === 14){
// // alert("condition 4 is true");
// // }

// d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e

//  if (true){
// alert("True");
// }


// if (false){
// alert("False");
// }


// f

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// // Q6

// var marks1 = +prompt("Enter your marks in subject 1: ");
// var marks2 = +prompt("Enter your marks in subject 2: ");
// var marks3 = +prompt("Enter your marks in subject 3: ");
// var total_marks = 300

// var marks = marks1 + marks2 + marks3;
// var percentage = (marks/total_marks) * 100;
// var grade, remarks;

// if(percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if(percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }
// else if(percentage >= 60){
//     grade = "B";
//     remarks = "You need to improve";
// }
// else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write(`<h1>Mark Sheet </h1> <br>`);

// document.write(`Total Marks: ${total_marks} <br>`);
// document.write(`Marks Obtained: ${marks} <br>`);
// document.write(`Percentage: ${percentage}% <br>`);
// document.write(`Grade: ${grade} <br>`);
// document.write(`Remarks: ${remarks} <br>`);

// Q7


// var secretNumber = 8;
// var userGuess = +prompt("Guess the secret number ranging from 1 to 10: ");

// if(userGuess === secretNumber){
//     alert("Bingo! Correct answer");
// }
// else if(userGuess + 1 === secretNumber || userGuess - 1 === secretNumber){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Wrong answer and you are not even close");


// // Q8
// var number = +prompt("Enter a number to check if it is divisible by 3:")
// if (number % 3 === 0) {
//     alert("The number is divisible by 3")
// }
// else {
//     alert("The number is not divisible by 3")
// }

// // Q9
// var input = +prompt("Enter a number to check if it is even or odd:")
// if (input % 2 === 0) {
//     alert("The number is even")
// }
// else {
//     alert("The number is odd")
// }

// // Q10
// var temperature = +prompt("Enter temperature:")
// if (temperature > 40) {
//     alert("It is too hot outside.")
// }
// else if (temperature > 30) {
//     alert("The Weather today is Normal.")
// }
// else if (temperature > 20) {
//     alert("Today's Weather is cool.")
// }
// else if (temperature > 10) {
//     alert("OMG! Today's weather is so Cool.")
// }

// // Q11
// var firstNumber = +prompt("Enter first number:")
// var secondNumber = +prompt("Enter second number:")
// var operation = prompt("Enter operation (+, -, *, /, %):")

// if (operation === "+") {
//     alert(firstNumber + secondNumber)
// }
// else if (operation === "-") {
//     alert(firstNumber - secondNumber)
// }
// else if (operation === "*") {
//     alert(firstNumber * secondNumber)
// }
// else if (operation === "/") {
//     alert(firstNumber / secondNumber)
// }
// else if (operation === "%") {
//     alert(firstNumber % secondNumber)
// }
// else {
//     alert("Invalid operation")
// }

// Chapter 12-13


// // Q1
// var input = prompt("Enter a character:")
// var charCode = input.charCodeAt(0);

// if (charCode >= 65 && charCode <= 90) {
//     alert("Uppercase letter");
// }
// else if (charCode >= 97 && charCode <= 122) {
//     alert("Lowercase letter");
// }
// else if (charCode >= 48 && charCode <= 57) {
//     alert("Number");
// }
// else {
//     alert("Enter only numbres and letters");
// }


// // Q2
// var firstNumber = +prompt("Enter first number: ");
// var secondNumber = +prompt("Enter second number: ");

// if(firstNumber > secondNumber){
//     alert(firstNumber)
// }
// else if(firstNumber < secondNumber){
//     alert(secondNumber)
// }
// else{
//     alert("Both numbers are equal")
// }

// // Q3
// var number = +prompt("Enter a number to check if it is positive, negative or zero: ")
// if (number > 0) {
//     alert("The number is positive")
// }
// else if (number < 0) {
//     alert("The number is negative")
// }
// else {
//     alert("The number is zero")
// }

// // Q4
// var character = prompt("Enter a character to check if it is vowel or not: ")
// var check = character;
// if (check === "a" || check === "e" || check === "i" || check === "o" || check === "u" || check === "A" || check === "E" || check === "I" || check === "O" || check === "U") {
//     alert("true")
// }
// else {
//     alert("false")
// }



// // Q5
// var correct_password = "hello123";
// var user_password = prompt("Enter your password: ");
// if (user_password != "") {
//     if (user_password === correct_password) {
//         alert("Correct! The password you entered matches the original password");
//     } 
//     else {
//         alert("Incorrect password");
//     }
// }
// else {
//     alert("Please enter your password");
// }

// // Q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else if (hour >= 18 && hour <= 20) {
//     greeting = "Good evening";
// }
// else {
//     greeting = "Good night";
// }

// Q7
// var time = +prompt("Enter time in 24 hours format: ");
// if (time >= 0 && time < 1200) {
//     alert("Good morning");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon");
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good evening");
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good night");
// }
// else {
//     alert("Invalid time");
// }
