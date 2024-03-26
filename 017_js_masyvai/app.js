function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const YU = [];

for (let i = 0; i < 100; i++) {
  YU.push(i + 1);
}

for (let i = 0; i < YU.length; i++) {
  if (YU[i] % 3 == 0) {
    YU[i] = "C";
  }
}

for (let i = 0; i < YU.length; i++) {
  if (YU[i] % 7 == 0) {
    YU[i] = "B";
  }
}

console.log(YU);

for (let i = 0; i < YU.length; i++) {
  if (typeof YU[i] === typeof 5) {
    YU[i] = YU[i] * 5;
  }
}

console.log(YU);

for (let i = 0; i < YU.length; i++) {
  if (typeof YU[i] === "string") {
    YU[i] = i;
  }
}

console.log(YU);

for (let i = 0; i < YU.length; i++) {
  if (YU[i] % 3 == 0 && YU[i] % 5 != 0) {
    YU[i] = "A";
  }
}

console.log(YU);

let SUMA = 0;

for (let i = 0; i < YU.length; i++) {
  if (typeof YU[i] === "number") {
    SUMA = SUMA + YU[i];
  }
}

console.log(SUMA);

let A = YU.indexOf("A");
let B = YU.indexOf("B");

A = YU.lastIndexOf("A");

YU.reverse();

console.log(YU);
