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
let previous = 0;

while (vv > 5) {
  vv = rand(5, 10);
  console.log("vv:", vv);
  VV++;
  do {
    I++;
    // console.log("I spauzdina", I, "vv:", vv); //9.A?
  } while (I < vv);
  if (I >= vv) {
    sumI = sumI + I;
    // console.log("sumI:", sumI);
    I = 0;
  }

  switch (vv) {
    case 5:
      B++;
      console.log("B:", B); //9.B
      if (B == 3) break; // 9.B
      vv = rand(5, 10); // neveikia vv = 0. kodel?
    default:
      B = 0;
      vv = rand(5, 10);
  }
}

console.log("išorinis ciklas:", VV, "vidinis ciklas:", sumI); //9.A

// console.clear();

//10uzduotis

let petras;
let kazys;
let sumP = 0;
let sumK = 0;

while (sumK <= 222 && sumP <= 222) {
  petras = rand(10, 25);
  kazys = rand(5, 25);

  sumP = sumP + petras;
  sumK = sumK + kazys;
  console.log(
    "petras",
    petras,
    "Petras sum:",
    sumP,
    "kazys",
    kazys,
    "Kazys sum:",
    sumK
  );
  if (sumK >= 222 && sumP >= 222) {
    console.log("partiją laimėjo abu");
  } else if (sumP >= 222) {
    console.log("Partiją laimėjo Petras:", sumP);
  } else if (sumK >= 222) {
    console.log("Partiją laimėjo Kazys:", sumK);
  }
}

// 9 uzdavinys destytojo

let vidinis;
let kartai = 0;
let kartaiDidelis = 0;
let kartaiMazas = 0;

do {
  kartaiDidelis++;
  vidinis = rand(5, 10);

  if (vidinis === 5) {
    kartai++;
  } else {
    kartai = 0;
  }

  console.log("Vidinis:", vidinis);

  for (let i = 0; i < vidinis; i++) {
    kartaiMazas++;
    // console.log('A');
  }
} while (kartai != 3);

console.log("Kartai didelis:", kartaiDidelis);
console.log("Kartai mazas:", kartaiMazas);

console.clear();

//testas 1 uzdavinys



// let v1 = rand(1, 7);
// let v2 = rand(1, 7);
// let v3 = rand(1, 7);

// let min;
// let mid;
// let max;

// if (v1 <= v2 || v1 <= v3) {
//   min = v1;
//   console.log("minimal", min);
// } else if (v2 > v1 && v2 < v3) {
//   mid = v2;
//   console.log("mid", mid);
// } else if ( v3 >= v2){
//   max = v3
// }
