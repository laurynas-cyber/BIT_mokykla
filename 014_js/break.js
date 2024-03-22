function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//uzdaviniai https://docs.google.com/document/d/1gT2Ec-8-fx5eaACXWgn7XOhw-Ccw-Ts5R_NNZ3K2WkA/edit

for (let i = 49; i < 55; i++) {
  console.log(i);
}

//5uzdavinys

let skaičiai = " ";

for (let i = 4; i >= 0; i--) {
  skaičiai = skaičiai + i + " ";
}

console.log(skaičiai);

//6uzdavinys

for (let i = 0; i < 9; i++) {
  console.log(i);
  i++;
}

//7uzdav
for (let i = 0; i < 5; i++) {
  console.log(rand(0, 10));
}

console.clear();

//8 uzdavinys

let U;

do {
  U = rand(0, 10);
  console.log(U);
} while (U != 5);

console.clear();

//9uzdavinys
let sumaSimtas = 0;

do {
  U = rand(0, 10);
  sumaSimtas = sumaSimtas + U;
  console.log(U);
} while (sumaSimtas < 100);

console.log("suma", sumaSimtas);

console.clear();

//10 uzdavinys

let I = 0;

do {
  U = rand(0, 10);
  console.log(U);
  I++;
} while (U != 5 && U != 7);

console.log("ciklu skaic", I);
console.clear();

//11 uzdavinys

let sumaDvim = 0;

do {
  U = rand(0, 10);
  I++;
  console.log(U);
  sumaDvim = sumaDvim + U;
} while (I <= 11 || sumaDvim < 20);

console.log("suma:", sumaDvim, "I:", I);

console.clear();
//12uzdavinys

let B = 0;

do {
  U = rand(0, 10);
  if (U % 2 === 1) {
    B++;
  }
  console.log(U);
  console.log("b:", B);
} while (B < 3);

//13uzdavinys

let W;

do {
  U = rand(0, 10);
  W = rand(0, 10);
  console.log("U:", U, "W:", W);
} while (U !== W);

console.clear();

//14uzdavinys

let G;
let H;
let Gi = 0;
let Hi = 0;
let sumG = 0;
let sumH = 0;

do {
  G = rand(0, 10);
  H = rand(0, 10);
  sumG = sumG + G;
  sumH = sumH + H;
  if (sumG <= 100) {
    Gi++;
  }
  if (sumG <= 100) {
    Hi++;
  }
  console.log("G", G, "H", H);
  console.log("sumG", sumG, "sumH", sumH);
  console.log("Gi", Gi, "Hi", Hi);
} while (sumG < 100 || sumH < 100);

console.clear();

G = 0;
H = 0;
Gi = 0;
Hi = 0;

do {
  H = rand(0, 10);
  G = rand(0, 10);
  if (H % 2 === 1) {
    Hi++;
  }
  if (G % 2 === 1) {
    Gi++;
  }
  console.log("G", G, "H", H);
  console.log("Gi", Gi, "Hi", Hi);
} while (Hi < 3 || Gi < 3);
