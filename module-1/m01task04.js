﻿// Task04 - Write a code that returns string converted from 3 inputted digits
// Don't use a separators in string
// first, second and third are inputed values 
// For example: 
// Inputed value are 2, 5 and 7
// You should return a next string - "257"

function task04(first, second, third) {
    var a = String(first)+String(second)+String(third);
    return a;
}
console.log(task04(2,5,7));