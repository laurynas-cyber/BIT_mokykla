function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3 uzdavinys https://docs.google.com/document/d/1nilz3Wo7icaK4yuWwJ1BxEf3ur_8B4AIgoK15lqs6UQ/edit
let aa = rand(1, 10);
let bb = rand(1, 10);
let cc = rand(1, 10);

console.log(aa);

if (aa + bb > cc) {
  console.log("galima su aa+bb", aa + bb);
} else if (aa + cc > bb) {
  console.log("galima su aa+cc", aa + cc);
} else if (aa < cc + bb) {
  console.log("galima su bb+cc", bb + cc);
}

if (aa + bb > cc || aa + cc > bb || bb + cc > aa) {
  console.log("galima");
}

console.clear();
//4 uzdavinys

let zz = rand(0, 2);
let ww = rand(0, 2);
let xx = rand(0, 2);
let yy = rand(0, 2);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

if (zz == 0) {
  ++nuliai;
} else if (2 > zz > 0) {
  ++vienetai;
} else {
  ++dvejetai;
}

if (ww == 0) {
  ++nuliai;
} else if (2 > ww > 0) {
  ++vienetai;
} else {
  ++dvejetai;
}

if (xx == 0) {
  ++nuliai;
} else if (2 > xx > 0) {
  ++vienetai;
} else {
  ++dvejetai;
}

if (yy == 0) {
  ++nuliai;
} else if (2 > yy > 0) {
  ++vienetai;
} else {
  ++dvejetai;
}

console.log("nuliai:", nuliai, "vienetai:", vienetai, "dvejetai:", dvejetai);

console.clear();
//penktas uzdavinys
let pirmas = rand(-10, 10);

let pirmorez;

let antras = rand(-10, 10);

let antrorez;

let trecias = rand(-10, 10);

let treciorez;

if (pirmas < 0) {
  pirmorez = `+${pirmas}+`;
} else if (pirmas == 0) {
  pirmorez = `*${pirmas}*`;
} else {
  pirmorez = `-${pirmas}-`;
}

if (antras < 0) {
  antrorez = `+${antras}+`;
} else if (antras == 0) {
  antrorez = `*${antras}*`;
} else {
  antrorez = `-${antras}-`;
}

if (trecias < 0) {
  treciorez = `+${trecias}+`;
} else if (trecias == 0) {
  treciorez = `*${trecias}*`;
} else {
  treciorez = `-${trecias}-`;
}

console.log(pirmorez, antrorez, treciorez);
console.clear();
// sestas uzdavinys

let zvakes = rand(5, 3000);
let nuolaida3 = 0.03;
let nuolaida4 = 0.04;
let kaina;

if (zvakes >= 1000 && zvakes < 2000) {
  kaina = zvakes * nuolaida3;
  kaina = zvakes - kaina;
  let vnt = 1 * nuolaida3;
  vnt = 1 - vnt;
  console.log("kaina:", kaina, "zvakes:", zvakes, "vnt kaina:", vnt);
} else if (zvakes >= 2000) {
  kaina = zvakes * nuolaida4;
  kaina = zvakes - kaina;
  let vnt = 1 * nuolaida4;
  vnt = 1 - vnt;
  console.log("kaina:", kaina, "zvakes:", zvakes, "vnt kaina:", vnt);
} else if (zvakes < 1000) {
  console.log("zvakes:", zvakes, "vnt kaina:", zvakes);
}

console.clear();

//7uzdavinys

let rr = rand(0, 100);
let gg = rand(0, 100);
let tt = rand(0, 100);
let daliklis = 3;

if (rr < 0 || rr > 90) {
  rr = null;
  --daliklis;
}

if (gg < 0 || gg > 90) {
  gg = null;
  --daliklis;
}

if (tt < 0 || tt > 90) {
  tt = null;
  --daliklis;
}

if (((tt == gg) == rr) == null) {
  console.log("nėra skaičiaus");
}

let atsakymas = (rr + gg + tt) / daliklis;

console.log(`${rr} ${gg} ${tt}/ ${daliklis}`, atsakymas);
