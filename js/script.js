

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




var numbers = [1,2,3,4,5];
for(var i = 0; i <= 4; i++) {
    console.log(numbers[i])
}



