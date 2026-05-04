// For loop
for (var i = 0; i < 5; i++) {
    console.log("The value of i is: " + i);
}

console.log("-------------------");

// While loop

var j = 0;
while (j < 5) {
    j = j + 1;
    console.log(j);
}

console.log("-------------------");

let n = 0;
let x = 0;
while(n < 3) {
    n++;
    x += n;
    console.log(n);
    console.log(x);
}

console.log("-------------------");

// Do...while loop

var k = 0;
do {
    k= k + 1;
    console.log(k);
} while(k < 5);

console.log("-------------------");

//for...in loop

var person = {firstname:"Valeza ", lastname:"Maqedonci ", age:13};

var text = '';

var z;

for (z in person) {
    text += person[z];
}

console.log(text);

console.log("-------------------");

var names = ['Reis', 'Nehar', 'Bardh'];

var y;

for (y of names) {
    console.log(y);
}

console.log("-------------------");

var txt = "JavaScript";

var l;

for (l of txt) {
    console.log(l);
}

console.log("-------------------");

