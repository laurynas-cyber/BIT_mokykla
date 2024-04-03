const animals = ["cat", "dog", "elephant", "horse", "rabbit"];

// function howMuch(a) {
//   return a.length;
// }

let howMuch = (a) => a.length;

console.log(howMuch(animals));

let firstElement = (bra) => bra[0];

console.log(firstElement(animals));

let lastElement = (b) => b[b.length - 1];

console.log(lastElement(animals));

function vidurinis(A) {
  let b = (A.length - 1) / 2;
  return A[b];
}

console.log(vidurinis(animals));

let str = "raccon";

let stringLength = (string) => string.length;

console.log(stringLength(str));

function Lettersum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + stringLength(arr[i]);
  }
  return sum;
}

console.log(Lettersum(animals));

console.clear();

// for .. of ciklas duoda elementa

for (const animal of animals) {
  console.log(animal);
}

// for... in ciklas duodada inkesa. vienintelis ciklas eina per objekta

for (const index in animals) {
  console.log(animals[index]);
}

const houses = {
  house1: "red",
  house2: "blue",
  house3: "green",
};

for (const house in houses) {
  console.log(house, houses[house]);
}

console.clear();

const sum = (a, b) => a + b;

const niceCalck = (r) => {
  console.log(
    "%c" + r,
    "color: skyblue; font-size: 20px; background-color: gray; padding: 10px; border-radius: 10px;"
  );
};

console.log(niceCalck(sum(2, 3)));

animals.forEach((animal) => console.log(animal[0]));

let suma = 0;
animals.forEach((animal) => {
  suma = suma + animal.length;
});

console.log(suma);

animals.forEach((animal) => {
  if (animal.length > 4) {
    console.log(animal);
  }
});
