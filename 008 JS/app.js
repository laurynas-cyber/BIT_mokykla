
// var A = 5;

// var B = 10;

// var C = A + B + 22;

// console.log(A, B, C);
// console.log("A");
let g;
let a = 10;
let b = "10";
// /*jeigu pries stringa padesim pliusa pavirs i skaiciu console.log (a + + b). su string+numeris= stringas. stringas - number=number*/
let c = "hello";
let x = "an";
let y = "tis";

let l1 = "b";
let l2 = "a";

console.log(a + "" + a);
console.log(a + "a");
console.log(typeof a);
// console.log(x + y + +li + l2);
console.log((0.3 + 0.6).toFixed(1));

console.log(g + a); /* skaicius + ar -  undifined = NaN*/
console.log(g + b); /* stringas + ar -  undifined = stringas*/

let t = true; /* skaicius yra vienetas 1*/
let f = false; /* skaicius yra vienetas 0*/

/*tučias stringas yra false. stringas yra true*/

console.log(
  !!a
); /*du šauktukai virsta i logini kintamaji true ar false. kokiais atvejais bus false*/

console.log(t && f); /*true and false = false*/
console.log(t || f); /*true or false = true*/
