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
// 7.1 ir 7.2 uzv NEAISKU
let e;
let sume = 0;
let numberstring = " "; //7.3 uzduotis
for (let u = 0; u < 5; u++) {
  e = rand(10, 20);
  sume = sume + e;
  console.log("e:", e);
  console.log("true:", sume);
  numberstring = numberstring + e + " ";
  if (u === 4) {
    numberstring = numberstring + "=" + " " + sume; //7.4
  }
}

console.log("stringas:", numberstring);

console.clear();

//8uzduotis

let gg;
let o = 0;
let sumGG = 0;
let sumCancel = 0;
let C = 0;
let even = 0;
let odd = 0;
do {
  gg = rand(10, 25);
  console.log(gg);
  o++;
  if (gg <= 18) {
    sumGG = sumGG + gg;
  } else if (gg > 18) {
    C++;
    sumCancel = sumCancel + gg;
  }
  if (gg % 2 == 0) {
    even++;
  } else odd++;
} while (gg >= 12); //8.A

// for (o = 0; o <= 20; o++) { //8.F NEAISKU
//   gg = rand(10, 25);
//   console.log(gg);
// }

console.log("operacijos", o); //8.B
console.log("suma daugiau nei 18:", sumGG); //8.C
console.log("nepriimti:", sumCancel, "number:", C); //8.D
console.log("lyginiai:", even, "nelyginiai", odd); //8.E

console.clear();
//9uzduotis

let vv = Infinity;
let VV = 0;
let I = 0;
let B = 0;
let sumI = 0;

while (vv > 5) {
  vv = rand(5, 10);
  console.log(vv);
  VV++;
  do {
    I++;
    console.log("I spauzdina", I, "vv:", vv);
  } while (I < vv);
  if (I >= vv) {
    sumI = sumI + I;
    console.log("sumI:", sumI);
    I = 0;
  }
  // switch (vv) {
  //   case 5:
  //     B++;
  //     if (B == 3) break;
  // }
}

console.log("išorinis ciklas:", VV, "vidinis ciklas:", sumI); //9.A
