// Task01 - create a function with name task01
// function pass three numbers and multiples those that less than zero
// if all numbers are positive function should return undefined
// for example: 
// if function take 3, -2 and -5 it should return 10

function task01 (a,b,c) {
    if (a<0 && b<0 && c<0) {
        return a*b*c;
    } if (a<0 && b<0 && c>=0) {
        return a*b;
    } if (a<0 && c<0 && b>=0) {
        return a*c;
    } if (b<0 && c<0 && a>=0) {
        return b*c;
    } else {
        return 'undefined';
    }
}

console.log(task01(-5,5,-10));