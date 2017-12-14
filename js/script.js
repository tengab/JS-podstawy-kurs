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


function addTwoNumbers(a,b){

    return a + b;
}
console.log(addTwoNumbers(3,4));


var sum = function summaryOfTwoNumbers(a,b){
    return a + b;
}
console.log(sum(2,3));



myFunction();
function myFunction (){
    console.log('My function works well!!');
}


function bar() {
    var foo;
    foo = function(){
        return 3;
    }
    return foo();
    foo = function(){
        return 5;
    }
    return 5;
}
console.log(bar());



console.log(localStorage.getItem('key1', 'value'));
console.log(localStorage.getItem('key2', 1));
console.log(localStorage.getItem('key2', 'true'));
console.log(localStorage.getItem('key2', 'value'));
console.log(localStorage.getItem('key3', true));
console.log(localStorage.getItem('key4', [1,2,3,4,5]));


name1 = 'Tomek';
name2 = 'Waldek';
name3 = 'Natalia';
name4 = 'Wojtek';

var counter = 0;

function addPerson (name){
    localStorage.setItem('person'+counter, name)
    counter++
}
addPerson('Ala');

function removePerson (number) {

    localStorage.removeItem('person' + number)
}
removePerson();



function questionToConfirm() {

        confirmation = confirm('Do you want to answer my question?') ?
        alert(prompt('Whats your name?'))
        :
        null
}

questionToConfirm();


function questionToConfirm() {

    confirmation = confirm('Do you want to answer my question?') ?
        open(prompt('Whats your name?'))
        :
        null
}
questionToConfirm();


var element = document.getElementsByClassName('p')
document.getElementsByClassName('p')
console.log(document.getElementsByClassName('p'))
console.log(document.getElementsByClassName('p')[0])
console.log(document.getElementsByClassName('p')[element.length-1])




var firstDiv = document.getElementById('first')
console.log(firstDiv)
console.log(firstDiv.getElementsByTagName('div')[0])


var el1 = document.getElementById('first')
var el2 = document.getElementsByClassName('my')[0]
var el3 = document.getElementsByClassName('element')[0]
var el4 = document.getElementsByTagName('div')[0]
var el5 = document.querySelector('div#first.my.element')
var el6 = document.querySelectorAll('div#first.my.element')[0]
console.log(el1, el2, el3, el4, el5, el6);

function addElement(){
    var newDiv = document.createElement("div"); // tworzymy element
    var newContent = document.createTextNode("Hi there!"); // tworzymy text ktory ma wypelniac nowy element
    newDiv.appendChild(newContent); //wkladamy text w nowy element

    var currentDiv = document.querySelector(".main"); //szukamy odniesienia gdzie bedziemy wstawiac nowy stworzony elelement
    document.body.insertBefore(newDiv, currentDiv); //wstawia element
}
addElement();


function addElement(tag, text, target){
    var newEl = document.createElement(tag); // tworzymy element
    var newContent = document.createTextNode(text); // tworzymy text ktory ma wypelniac nowy element
    newEl.appendChild(newContent); //wkladamy text w nowy element

   target.appendChild(newEl);
}
addElement('div', 'Hellllooooooo', document.querySelector('.main').firstElementChild.nextElementSibling);
addElement('div', 'Hellllooooooo', document.querySelector('.main div:nth-child(2)'));


var main = document.querySelector('.main');

console.log(main)

main.innerText ='aaaaaa';



document.body.innerHTML = '<div><p>AAAAAAAAAA</p></div>'; // kolejny innerHTML nadpisuje dlatego nie widac diva. rozgryzc

document.querySelector('div').innerHTML = '<input />';
var input = document.querySelector('input')
input.setAttribute('placeholder', 'tu wpisz email');
input.setAttribute('id', 'button');


console.log(
    document.body.style.backgroundColor = 'red'
)
console.log(
    input.style.position = 'fixed',
    input.style.left = '200px',
    input.style.top = '200px'
)



var btn = document.querySelector('button');

btn.addEventListener(
    'click',
    function(event){
    alert('Heeeeelo!')
    }
)
function makeFunctionThatAddsNumber(number){
    return function (a){
        return number + a
    }
}
var add3 = makeFunctionThatAddsNumber(3);
console.log(add3(2));


var btn = document.querySelector('button');

btn.addEventListener(
    'click',
    function(event){
        console.log('one click!', event)
    }
)

btn.addEventListener(
    'dblclick',
    function(event){
        console.log('two clicks', event)
    })

document.addEventListener(
    'keydown',
    function(event){

        switch (event.key){
            case 'ArrowUp':
                console.log('strzałka w gore')
                break
            case 'ArrowDown':
                console.log('strzałka w dol')
                break
            case 'ArrowLeft':
                console.log('strzałka w lewo')
                break
            case 'ArrowRight':
                console.log('strzałka w prawo')
                break
            default:
                console.log('inny klawisz')

        }
    });



//        jQuery   214087393


function jQueryLike(selector){
var nodeList = document.querySelectorAll(selector)
    var jQueryLikeObject = {}

    for (var i = 0; i < nodeList.length; i++)
        jQueryLikeObject[i] = nodeList[1]

    jQueryLikeObject.length = i

        jQueryLikeObject.find = function(selector){
    return this
        }

    return jQueryLikeObject


}

console.log(jQueryLike('div'))
console.log(jQueryLike('div').find('ul'))





console.log($('ul li'))
console.log($('.class-one').find('li'))

var bodyEls = document.querySelectorAll('body *')

for (var i = 0; i < bodyEls.length; i++)
bodyEls[i].className = 'red'


$('body *').addClass('green')



function newPMultiple(i) {
    for (var i = 1; i <= 15; i++)
        $('<p>'+i+'</p>').appendTo($('body'))
}
newPMultiple(1);



$('body').append(
    $('<a> link </a>')
)
$('a').attr('href', 'http://wp.pl')

*/

$('<div>').appendTo($('body'));

$('div').text('some text');

$('div').append(
    $('<input>')
)

$('input').val('a@a.pl')

$('input').attr('placeholder', 'E-mail')

