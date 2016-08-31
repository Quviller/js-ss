// Task03 - create a function with name task03
// function pass array and retun hash with min amd max values from array
// for example: 
// if function take [-1, 8, -3, 0, 7] it should return {min: -3, max: 8}

// TODO: Define your function here


var numbers = [1, 2, 3, 4];
var max = Math.max.apply(null, numbers); // 4
var min = Math.min.apply(null, numbers); // 1

console.log(max,min);