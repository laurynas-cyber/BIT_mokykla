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

console.log("cikslu skaic", I);
console.clear();

//11 uzdavinys

let sumaDvim = 0;

do {
  U = rand(0, 10);
  I++;
  console.log(U);
} while (I <= 11 || sumaDvim < 20);

console.log("suma:", sumaDvim);
console.log(I);
