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

number = parseInt(number); // stringa vercia i numeri
number = +number //pries stringa padejus + ar - stringa pavercia i skaciu

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

console.log("true || true", true || true);
console.log("true || false", true || false);
console.log("false || true:", false || true);
console.log("false || false", false || false); // su || false bus tik tada kai abu bus false jis iesko true reiksmes

console.log("true && true", true && true); //su && true bus tik tada kai abu bus true
console.log("true && false", true && false);
console.log("false && true:", false && true); //eigu && jis grazina false reiksme iesko false reiskmes
console.log("false && false", false && false);

console.log("1" == 1); // true lyginam reiskmes
console.log("1" === 1); //false trys lyginam tipa

if (5 > 3) console.log("lol"); //if sintakse

let vv = 0 ? "jo" : "ne"; //ternary if sąlyga

//ciklai
i += 2; // i = i+2 trumpinys

0, infinity // naudoti geriau while
1 iki infinity // naudoti geriau do while. while nudojam kai nezinom kiek kartu reikia atlikti veiksma

const B = 10; // const apsaugo kitnamaji nuo pakeitimo

let V = 5;
let V2 = V; // priskyrimas by value

V2++;

console.log(V, V2);

let O = {
  sk: 5,
};

let O2 = O; //priskyrimas by reference. redaguojant vieną, redaguosis ir kitas
console.log(O, O2);// rodys 5 bet objekto viduj bus 7
const O3 = { ...O, salt: 99 }; // copy of value. ... yra spreado operacija. salt:99 jeigu nori papildomai prideti.dar vienas kopijavimo Object.assign({}, O)
const O5 = { ...O, salt: 99, name: "antanas" }; //nukopijuos ovewritins name objekte O

const O6 = { salt: 99, name: "antanas", ...O }; // bus jonas nes paskutinis jonas

const {sk, salt} = 05;
O.sk++;
O2.sk++;

console.log(O, O2);


rez = animals.push("zuikis");
console.log(rez, "zuikis push"); //gaunam masyvo ilgis 

rez = animals.unshift("breidis"); // stumia i prieki

console.log(rez, "animals unshift"); //gaunam naujo masyvo ilgi

console.log(animals);

animals.shift(); // istrina is pradzios

animals.splice(2, 1); // 2 yra indeksas 1 kiek daug elementu reikia istrinti console. grazina masyva kuris buvo istrintas
animals.splice(3, 1, "Fox"); // 2 yra indeksas 1 kiek daug elementu reikia istrinti console. grazina masyva kuris buvo istrintas
animals.splice(3, 1, "Fox", "dog", "cow"); // priklijavo papildomai

animals.indexOf("Fox"); // grazino ieskomo elemento indeksa masyve

A = YU.lastIndexOf("A"); // paskutinis indeksas. neranda grazina - 1

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3