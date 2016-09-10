// Task02 - create a function with name task02
// function pass array and replace each negative number on 0 and other numbers on 1
// for example: 
// if function take array [-1, 8, -3, 0, 7] it should return [0, 1, 0, 1, 1]
//питання як зробити це через функцію???

// var a = [1,2,3, -5, -10];


// for (var i=0; i<a.length; i++) {
//     if (a[i]<0) {
//         a[i]=0;
//     } else {
//         a[i]=1;
//     }
// }

// console.log(a);



var a = [1,2,3, -5, -10];

function task02(a) {
for (var i=0; i<a.length; i++) {
    if (a[i]<0) {
        a[i]=0;
    } else {
        a[i]=1;
    }
}
}
console.log(task02(a));