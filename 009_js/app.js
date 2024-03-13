function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("hello");

console.log("true || true", true || true);
console.log("true || false", true || false);
console.log("false || true:", false || true);
console.log("false || false", false || false); // su || false bus tik tada kai abu bus false jis iesko true reiksmes

console.log("true && true", true && true); //su && true bus tik tada kai abu bus true
console.log("true && false", true && false);
console.log("false && true:", false && true); //eigu && jis grazina false reiksme iesko false reiskmes
console.log("false && false", false && false);

// not ! visada keicia i logini kintama
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

// NOT with numbers and strings
console.log(!0); //bolean 0 yra false
console.log(!1);
console.log(!"");
console.log(!" ");

//undefined
console.log("!undefined", !undefined);

//or and with numbers

// OR AND with numbers
console.log("25 || 36:", 25 || 36); //su or grazina pirma true reiksme
console.log("25 && 36:", 25 && 36);
console.log("0 || 36:", 0 || 36);
console.log("0 && 36:", 0 && 36); //jeigu && jis grazina false reiksme

// let a = 0;
let a = 5;

a || console.log("a is 0");
// || iesko true && iesko false ir baigia operacija
a && console.log("a is not 0");

let b = 1 + 2;
let c = 1 + 2 * 3;
let d = (1 + 2) * 3;
let e = 5 % 2; // dalyba su liekana 1
console.log(e);

let f = 2 ** 3; //kubu kelimas

console.log(f);

let g = 7;
let h = 3;

g++;
h--;
console.log(g);
console.log(h);

let i = 27;
console.log(i++); //jeigu ++i bus prieky ++i tada prides iskarto
console.log(i);

let j = 2;
let result = ++j * ++j; // 3*4
result = j++ * ++j; // 4*6

console.clear();

console.log(1 > 1);
console.log(1 >= 1);

console.log(1 == 1);
console.log(1 != 2);

console.log("1" == 1); // true lyginam reiskmes
console.log("1" === 1); //false trys lyginam tipa

console.log(false == 1); // true lyginam reiskmes
console.log(false === 1); //false trys lyginam tipa
console.log(NaN == NaN); //false nes NaN kiekvienas yra unikalus

let m = "a";

m++;

console.log(m);
console.log(isNaN(m)); // ar m yra NaN
console.log(true !== 1);
console.log(true != 1); //false

console.clear();

let n = 3;

n * 3;

if (n > 15) {
  console.log("n is bigger than 5"); //if sprendzia true ar false
} else {
  console.log("lol");
}

let o = 2;

if (o) {
  console.log("yes");
}

if (o < 1 + 5) {
  console.log("yes");
} else {
  console.log("no");
}

console.clear();

let z = rand(0, 4);
let v = rand(0, 4);
let y = rand(0, 4);

if (z > v > y || z < v < y) {
  console.log("v:", v);
} else if (v > z > y || v < z < y) {
  console.log("z", z);
} else if (v > y > z || v < y < z) {
  console.log("y", y);
}

console.clear();

