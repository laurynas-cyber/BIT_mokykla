let g;
let a = 10;
let b = "10";

let c = "hello";
let x = "na";

let l1 = "b";
let l2 = "a";

console.log(a + "aa");
// string + number = string
console.log(a + +b);
// jeigu pries stringa padesim pliusa pavirs i skaiciu console.log (a + + b).
console.log(a + "" + a);
// kadangi tai yra tusčias stringas jis + skaičius paverčia į stringą
console.log(l1 + l2 + +x + x);
// /* kadangi +x yra string ir tai yra NaN tai NaN paverčia į stringą

console.log(c - x);
// string - string = NaN type number
console.log(b - a);
// string - number = 0 type number

console.log(typeof a);
console.log((0.3 + 0.6).toFixed(1));
// /*.toFixed(kiek skaičių po kablelio)

console.log(g + a); /* skaicius + ar -  undifined = NaN*/
console.log(g + b); /* stringas + ar -  undifined = stringas*/

let t = true; /* skaicius yra vienetas 1*/
let f = false; /* skaicius yra nulis 0*/
console.log(t + f);
// true + ar - fale = 1
console.log(t / f);
// true(1) padalinti is false(0) = Infinity

console.log(!!a);
console.log(!!"lol");
/*stringas ar skaičius yra true*/
/*du šauktukai virsta i logini kintamaji true ar false. 

kokiais atvejais bus false????*/
console.log(!!0);
//vienintelis skaičius 0 bus False
console.log(!!"");
// vienintelis tuščias stringas bus False
console.log(!!g);
// /*undifined yra false
console.log(!!+"ok");
//Nan yra False
console.log(!!null);
//null yra false
console.log(!!"" + "lol");
// /* false + string = string
console.log(!!"", +"lol");
// kablelis daro tarpa ir console spausdina dvi atskiras reiksmes atskirai
console.log(t && f); /*true and false = false*/
console.log(t || f); /*true or false = true*/
//https://developer.mozilla.org/en-US/docs/Glossary/Falsy visos False reiksmes
