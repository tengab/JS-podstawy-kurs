/*

var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(array);

var check1 = 1;
var check1_1 = 2;
var check1_2 = 0;
var check2 = true;
var check3 = 'string';
var check4 = NaN;
var check5 = false;
var check6 = -1;
var check7 = undefined;
var check8 = ['pies', 'kot'];
var check9 = {a: 2, b: 3};
var check10 = {a: 2, b: 3};

console.log(check1 === check1);
console.log(check1 >= check1_1);
console.log(check1_1 <= check1_2);
console.log(check1 === check4);
console.log(check5 !== check5);
console.log(check1 === check6);
console.log(check1 === check7);
console.log(check1 === check8);
console.log(check10 !== check9);
console.log(check10 === check10);


var check11 = (check10 === check9);
console.log(check11 || 1);



var sample = 4;

if (sample === 1) {
    console.log(1)
} else if (sample === "1") {
    console.log(2)
} else if (2 === sample) {
    console.log(2)
} else {
    console.log(0)
};



var sample1 = 0;

switch (sample1) {
    case 1:
        console.log(1);
        break;
    case "1":
        console.log(2);
        break;
    case 2:
        console.log(sample1);
        break;
    default:
        console.log(0);
}


var a = 2;

var check = a === 1 ?
    1
    :
    a === '1' ?
        2
        :
        a === 2 ?
            a
            :
            0;

console.log(check);




var numbers = [1,2,3,4,5,6,7,8];
for(var i = 0; i <= numbers.length; i++) {
    if (i === 1) break
    console.log(numbers[i])
}

var table = [1,2,3,4,5,6,7,8,9];

console.log(table.push(10));
console.log(table);

var table1 = [1,2,3,4,5];
console.log(table1);
table1.unshift(0);
table1.push(6);
console.log(table1);
var table2 = table1;
table2.shift();
table2.pop();
console.log(table2);

var concatedTable = table.concat(table2);
console.log(concatedTable);
console.log(table1);
console.log(table);

var sliceTable = ['zero', 'one', 'two', 'three']
console.log(sliceTable.slice(-3, -2));


var randomLength = (Math.round(Math.random()*10)+1)*2;
console.log (randomLength);


var array = [];
for (var i = 0; i<randomLength; i++) {
    array[i] = 'Index ' + i;
}

var halfLegth = array.length / 2;
var firstHalf = array.slice(halfLegth -2, halfLegth +2);
console.log(String(firstHalf));

var array1 = [1,2,3,4,5,6,7,8,9,10];
console.log(array1.indexOf(9))


var obj = {a: 1};
console.log(obj.a);


var myCar = new Object();
myCar.make = 'Toyota';
myCar.model = 'Corolla';
myCar['year'] = 2002;
console.log(myCar);

*/

function addTwoNumbers(a,b){

    return a + b;
}
console.log(addTwoNumbers(3,4));


var sum = function summaryOfTwoNumbers(a,b){
    return a + b;
}
console.log(sum(2,3));

