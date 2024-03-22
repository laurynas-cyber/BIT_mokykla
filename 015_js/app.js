function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let kaulasMano = rand(1, 6);
let kaulasTavo = rand(1, 6);

let kaulasSuma = kaulasMano + kaulasTavo;

if (kaulasSuma > 8) {
  console.log("laimėjau:", kaulasMano, kaulasTavo);
} else console.log("pralaimėjai");

//testas 2 uzdavinys

let Pilkis = rand(3, 6);
let Murklys = rand(3, 6);

if (Pilkis > Murklys) {
  console.log("Murklys lengvesnis uz Pilkį");
} else if (Pilkis < Murklys) {
  console.log("Pilkis lengvesnis uz Murklį");
} else if (Pilkis == Murklys) {
  console.log("Abu sveria vienodai");
}

//3uzd

let katinai = rand(0, 30);
let karves = rand(0, 30);

if (katinai < 15 && karves < 15) {
  console.log("telpa", katinai, karves);
} else console.log("netalpa");

//4uzd

let Ante = rand(1, 6);

if (Ante == 1 || Ante == 5) {
  console.log("pikrt teliką");
} else if (Ante == 3 || Ante == 4) {
  console.log("skalbimo mašina");
} else console.log("saldytuva");

// 5uzdv tris random skaicius isrūsiuoti didejancia tvarka

let a = rand(1, 7);
let b = rand(1, 7);
let c = rand(1, 7);

console.log(a, b, c);

console.log(
  "" +
    Math.min(a, b, c) +
    (a + b + c - Math.min(a, b, c) - Math.max(a, b, c)) +
    Math.max(a, b, c)
);

if (b >= a && b <= c) {
  console.log(a, b, c);
} else if (b <= a && b >= c) {
  console.log(c, b, a);
} else if (a >= c && a <= b) {
  console.log(c, a, b);
} else if (a <= c && a >= b) {
  console.log(b, a, c);
} else if (c >= a && c <= b) {
  console.log(a, c, b);
} else if (c <= a && c >= b) {
  console.log(b, c, a);
} else {
  console.log("error");
}

if (a > b) {
  let temp = a;
  a = b;
  b = temp;
}
if (a > c) {
  let temp = a;
  a = c;
  c = temp;
}
if (b > c) {
  let temp = b;
  b = c;
  c = temp;
}

console.log(a, b, c);
console.clear();
