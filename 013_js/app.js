function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("hello");

let a = rand(5, 10);
let hi = " labas";
let string = " ";

for (let i = 0; i < a; i++) {
  string = string + " " + hi;
  if (i == a - 1) {
    console.log(string);
  }
}

console.clear();
let y = rand(0, 1) ? 5 : 7;

for (let u = 0; u < y; u++) {
  console.log(rand(0, 4));
}

console.clear();

let sum = 0;
let w;

for (let u = 0; u < 5; u++) {
  w = rand(0, 4);
  console.log(w);
  sum = sum + w;
}

console.log("sum:", sum);

console.clear();

let sviesoforas = rand(0, 2);
let spalva =
  sviesoforas === 0 ? "raudona" : sviesoforas === 1 ? "geltonas" : "zalia";

console.log(spalva);

if (spalva === "raudona") {
  console.log("Stovime");
} else if (spalva === "geltona") {
  console.log("Ruošiamės");
} else {
  console.log("Eik!");
}

switch (spalva) {
  case "raudona":
    console.log("Stovime");
    break;
  case "geltona":
    console.log("Ruošiamės");
    break;
  default:
    console.log("Eik!");
}

console.clear();

let box = rand(1, 4);
let size;
if (box === 1) {
  size = "S";
}

if (box === 2) {
  size = "M";
}
if (box === 3) {
  size = "L";
}
if (box === 4) {
  size = "XL";
}

console.log("box", size);
