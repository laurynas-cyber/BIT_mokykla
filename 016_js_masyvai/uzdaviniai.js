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

// 3 uzdv

console.clear();

let mas = [];
let ABCD;
let A = 0;
let B = 0;
let C = 0;
let D = 0;

for (let i = 0; i < 200; i++) {
  ABCD = rand(0, 3);

  if (ABCD == 0) {
    mas.push("A");
    A++;
  } else if (ABCD == 1) {
    mas.push("B");
    B++;
  } else if (ABCD == 2) {
    mas.push("C");
    C++;
  } else if (ABCD == 3) {
    mas.push("D");
    D++;
  }
}

console.log("A", A, "B", B, "C", C, "D", D);

console.clear();
//4 uzdav

let mas2 = [];
let mas3 = [];
let mas4 = [];
let ABCD2;
let ABCD3;
let ABCD4;

let unikalusABCD = 0;
let neunikalusABCD = 0;
let W = " ";



for (let i = 0; i < 200; i++) {
  ABCD2 = rand(0, 3);
  ABCD3 = rand(0, 3);
  ABCD4 = rand(0, 3);
  if (ABCD2 == 0) {
    mas2.push("A");
  } else if (ABCD2 == 1) {
    mas2.push("B");
  } else if (ABCD2 == 2) {
    mas2.push("C");
  } else if (ABCD2 == 3) {
    mas2.push("D");
  }

  if (ABCD3 == 0) {
    mas3.push("A");
  } else if (ABCD3 == 1) {
    mas3.push("B");
  } else if (ABCD3 == 2) {
    mas3.push("C");
  } else if (ABCD3 == 3) {
    mas3.push("D");
  }

  if (ABCD4 == 0) {
    mas4.push("A");
  } else if (ABCD4 == 1) {
    mas4.push("B");
  } else if (ABCD4 == 2) {
    mas4.push("C");
  } else if (ABCD4 == 3) {
    mas4.push("D");
  }

  if (mas[i] === mas2[i] && mas2[i] === mas3[i] && mas3[i] === mas4[i]) {
    unikalusABCD++;
    console.log("bingo", mas[i], mas2[i], mas3[i], mas4[i]);
  }
  if (mas[i] !== mas2[i] && mas[i] !== mas3[i] && mas[i] !== mas4) {
    if (mas2[i] !== mas3[i] && mas2[i] !== mas4[i]) {
      if (mas3[i] !== mas4[i]) {
        neunikalusABCD++;
        console.log("nebingo", mas[i], mas2[i], mas3[i], mas4[i]);
      }
    }
  }

  W = W + mas[i] + mas2[i] + mas3[i] + mas4[i] + ", ";
}

console.log("unikal", unikalusABCD, "neunikal", neunikalusABCD);

console.clear();

//5uzdv

let numbers = [];
let numbers2 = [];

let numRand;
let numRand2;

while (numbers.length < 100) {
  numRand = rand(100, 999);
  if (!numbers.includes(numRand)) {
    numbers.push(numRand);
  }
}

while (numbers2.length < 100) {
  numRand2 = rand(100, 999);
  if (!numbers2.includes(numRand2)) {
    numbers2.push(numRand2);
  }
}

console.log(numbers);
console.log(numbers2);



let numbers3 = [];
numbers3 = [...numbers];

numbers3.pop(numbers3[0]);

console.log(numbers3);
console.log(numbers);

console.clear();