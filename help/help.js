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
const O3 = { ...O, salt: 99 }; // shallow copy of value. ... yra spreado operacija. salt:99 jeigu nori papildomai prideti.dar vienas kopijavimo Object.assign({}, O)
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

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2); //sujungia du

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4


console.log(array1.fill(6));
// pakeičia masyvą visi bus 6
const M = Array(100).fill("A");//prpipildys 100 ilgio

const fairtTail =
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.";

const r7 = fairtTail.split(" "); // sudeda i stringa i masyva. skliaustai nurodo per kura splitinti

console.log(r7);

const m1 = [
  [1, 2, 3],
  [4, 5, 6],
];

let m4 = structuredClone(m1); //kopijuoja visus masyvus ne tik išorinius bet ir vidinius. Deep copy

console.log("%c-----", "color:blue"); //stilizuotas console rasymas su %c



function multiAndSUm(a, b) { 
  let rez = a * b;
  let u = a + b;
  return [rez, u]; //grazina du atsakymus
}

const [Y, o] = multiAndSUm(4, 5); 
console.log(Y, o);



const multia = function(a) { //anonimine funkcija su kintamuoju. lygiai tas pats kas arrow funkcija
  return a * 10
}

const multia = a => a * 10 //arrow funkcijos jeigu viena eilute. a be skliausteliu tik tada kai yra tik vienas parametras.

// for .. of ciklas

for (const animal of animals) {
  console.log(animal);
}

// for... in ciklas duodada inkesa. vienintelis ciklas eina per objekta

for (const index in animals) {
  console.log(animals[index]); // naudojant masyvui
}

const houses = {
  house1: "red",
  house2: "blue",
  house3: "green",
};

for (const house in houses) {
  console.log(house, houses[house]); // naudojant objektui
}

//map metodas

// ka daro:perrenka visus masyvo elementus
// ka grazina: nauja masyva su pakeistais elementais

const newAnimals = animals.map((a) => {
  console.log(a);
});

console.clear();

let smallAnimals = animals.map((animal) =>
  animal.length > 5 ? "big" : animal
);



//filter
//ka daro:perrenka visus elementus
// kas grazina:nauja masyva su tam tikrai elemntais

const filteredAnimals = animals.filter((animal) => true);
const S = animals.filter((animal) => animal[0] == "s");

console.log(S);

const noTiger = animals.filter((animal) => animal != "tiger");

console.log(noTiger);

//sort
//ka daro:surikiuoja masyvos elementus
//ka grazino: ta pati surikiuota masyva

// animals.sort((a, b) => {
//   //jeigu stringai
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   }
//   return 0;
// });

// animals.sort((a, (b) => a.localeCompare(b))); //stringam sortinti

let number = [5, 7, 9, 1, 2, 10];

number.sort((a, b) => a - b);

animals.sort((a, b) => b.length - a.length);


animals.sort((a, b) => a[1].localeCompare(b[1])); //stringam sortinti