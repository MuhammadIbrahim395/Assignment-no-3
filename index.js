"use strict";
console.log("Q no 1");
//Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var sum = 0;
for (let index = 0; index <= 20; index++) {
    if (index % 2 == 0) {
        sum = sum + index;
    }
}
console.log(sum);
console.log("Q no 2");
//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let arr = [0, 1, 2, 3, 4, 5, 6, 6, 7, 11, 13, 7, 8];
let arr1 = [];
for (let i = 0; i <= arr.length; i++) {
    arr[i];
    if (arr[i] % 2 == 0) {
        arr1.push(arr[i]);
    }
}
console.log(arr1);
console.log("Q no 3");
//Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let array = [1, 3, 4, 6, 8, 7, 12, 15, 15, 18];
for (let g = array.length - 1; g >= 0; g--) {
    array[g];
    if (array[g] % 2 != 0) {
        array.splice(g, 1);
    }
}
console.log(array);
console.log("Q no 4");
// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
let radius = 5;
function areaOfCircle() {
    //as we know that area of a circle is 2pi(3.1416)r
    console.log(2 * 3.1416 * radius);
}
areaOfCircle();
console.log("Q no 5");
// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let grades = [91, 63, 53, 49, 23, 50, 52];
for (let o = grades.length - 1; o >= 0; o--) {
    grades[o];
    if (grades[o] < 50) {
        grades.splice(o, 1);
    }
}
console.log(grades);
console.log("Q no 6");
// Write a program that uses a function to find the largest element in an array of numbers.
let array3 = [23, 45, 67, 45, 34, 76, 96, 122];
function largestNumber() {
    let result = Math.max(...array3);
    console.log(result);
}
largestNumber();
