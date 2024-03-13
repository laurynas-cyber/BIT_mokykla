console.log("hello");

if (5 > 3) console.log("lol");

let one;
let two;

if (one > two) {
}

console.clear();

console.log(Math.PI);

console.log(Math.round(45.78));

console.log(Math.floor(45.78));

console.log(Math.ceil(45.78));

console.log(Math.min(5, 6, 1, 8, 2));

console.log(Math.max(5, 6, 1, 8, 2));

console.log(Math.abs(-45.78));

console.log(Math.random());

console.clear();

let str = "barsukas";

console.log(str.length);

console.log(str[0] + str[1]);

let fairy = "once upon a time, in faraway forest...";

console.log(fairy.includes("on")); // ieško tiktai fragmento sakinyje grazina true false

console.log(fairy.indexOf("upon")); // ieško ragmento pradžią sakinyje ggrazina indekso skaiciu. Jeigu neranda bus -1

let short = "abc";

console.log(short.padEnd(5, "123")); // stringo praiilginimas

console.clear();

console.log(fairy.slice(1)); //nuo kur pjauti stringa

console.log(fairy.slice(1, 10)); //kuria dali pjauti stringa

console.log(fairy.toUpperCase());

console.clear();

console.log("A" > "a");

console.log("Ąbc".charCodeAt(0)); //https://www.asciitable.com/

console.log("aab" > "aak"); //lygina kiekviena raide paeiliui

console.clear();

let v;

if (1) {
  v = "jo";
} else {
  v = "ne";
}

console.log(v);

let vv = 0 ? "jo" : "ne"; //ternary if sąlyga

console.log(vv);

let A = -88;
let aRez;

if (A > 0) {
  aRez = "Teigiamas";
} else if (A < 0) {
  aRez = "Neigiamas";
} else {
  aRez = "Nulis";
}

console.log(aRez);

let aRez2 = A > 0 ? "Teigiamas" : A < 0 ? "Neigiamas" : "Nulis";

console.log(aRez2);

let z1 = 5;
let z2 = 8;
let zasys = z1 + " Zasys su " + z2 + " zasiais";

console.log(zasys);

let zasys2 = `${z1} Žąsys su ${z2} žąsiais`;
console.log(zasys2);

let zasys3 = `lol
ok
ne`;

console.log(zasys3); // back tikais zemiau escape. su jais galima rasyti nuo naujos eilutes be \n ir galima deti kintamuosius
