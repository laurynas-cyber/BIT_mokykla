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
let result2 = zz + ww + xx + yy;

if (result2 == 0) {
  console.log("keturi nuliai");
} else if (result2 == 8) {
  console.log("keturi dvejetai");
} else if ((((zz == ww) == xx) == yy) == 1) {
  console.log("keturi vienetai");
} else if (result == 1) {
  console.log("trys nuliai ir viena vienetas");
}

console.clear();

