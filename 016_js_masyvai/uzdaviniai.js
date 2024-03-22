function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("hello");

//uzdaviniai https://docs.google.com/document/d/1_2C-SA2fhKduqCZ0YsZyZHXpFEb4lmjyIi8a875yc04/edit
// 1 uzdavinys
let ER = [];

let u;

for (let i = 0; i < 30; i++) {
  u = rand(0, 25);
  ER.push(u);
}

// 2uzdavinys a)

let g = 0;

for (let i = 0; i < 30; i++) {
  if (ER[i] > 10) {
    g++;
  }
}

console.log(ER);
console.log(g);

// 2 uzdavinys b)

console.log(ER.indexOf(8));

console.clear();

let number = 0;

for (let i = 0; i < 30; i++) {
  if (ER[i] > number) {
    number = ER[i];
  }
}

console.log(ER);
console.log(number, ER.indexOf(number));

// 2 c)

console.clear();

let sumEven = 0;

console.log(ER);
for (let i = 0; i < 30; i += 2) {
  console.log(ER[i]);
  sumEven += ER[i];
}

console.log(sumEven);
console.clear();

// 2 d)

let ER1 = [];

let v = ER1[0] - ER1.indexOf(ER1[0]);

for (let i = 0; i < 30; i++) {
  ER1[i] = ER[i] - i;
}

console.log(ER);
console.log(ER1);

// 2 e)

for (let i = 30; i < 39; i++) {
  ER1.push(rand(5, 25));
}

console.log(ER1);
console.clear();
//2 f)

let new1 = [];
let new2 = [];
for (let i = 0; i < 39; i++) {
  if (i % 2 === 0) {
    new1.push(ER1[i]);
  }
  if (i % 2 === 1) {
    new2.push(ER1[i]);
  }
}

console.log(new1, new2);
console.clear();
//2 e)

console.log(new1, new2);

for (let i = 0; i < 20; i++) {
  if (new1[i] > 15) {
    new1[i] = 0;
  }
}

console.log(new1);

//2 h)

for (let i = 0; i < 20; i++) {
  if (new1[i] > 10) {
    console.log(new1.indexOf(new1[i]));
    i = Infinity;
  }
}

// console.clear();

// console.log(new1);

// let B = -1;

// do {
//   B++;
//   if (new1[B] > 10) {
//     console.log(new1.indexOf(new1[B]));
//   } else "nerasta";
// } while (new1[B] < 10);
