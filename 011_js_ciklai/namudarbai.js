function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//pirmas uzdavinys

let a = rand(5, 25);
let b = rand(5, 25);
let c = rand(5, 25);

console.log(a, b, c);
let sum = a + b + c;
console.log(sum);

let sumString = " " + a + b + c;

console.log(sumString); //B uzduotis

sumString = `${a} ${b} ${c}`;

console.log(sumString); //C uzduotis

sumString = `${a} + ${b} + ${c} = ${sum}`; //D uzduotis

console.log(sumString);

console.clear();

//2 uzduotis
let d = rand(5, 10);
console.log(d);

//3uzduotis

let string = "labas";

for (let i = 0; i < 5; i++) {
  console.log(string);
}

//4 uzduotis
for (let Di = 0; Di < 7; Di++) {
  console.log(d);
}

//5 uzduotis

for (let ii = 0; ii < d; ii++) {
  console.log(d);
}

//6uzduotis
console.log(d);
for (let y = 0; y < d; y++) {
  if (d > 7) {
    console.log(d);
  }
}

console.clear();

//7uzduotis

let e;

for (let u = 0; u < 5; u++) {
  e = rand(10, 20);
  console.log(e); // 7.1 uzv
}

console.log(e);
