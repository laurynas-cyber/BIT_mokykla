//https://docs.google.com/document/d/1W_PXawhBTbCNqwmNOpisJWkxXnrTUtOV9-owb8Ufdrc/edit

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1 uzdv

function tekstas(a) {
  console.log(a);
}

tekstas(" labas ok");

//2uzdv

function tekstas2(a, b) {
  for (let i = 0; i < b; i++) {
    console.log(a);
  }
}

tekstas2(" labas ok", 5);
console.clear();

//4 uzdv

function HealthyNumbers(num) {
  let rez = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      rez++;
    }
  }
  return rez;
}

console.log(HealthyNumbers(607));

// 5 uzdv

let skaiciai = [];

for (let i = 0; i < 100; i++) {
  skaiciai.push(rand(33, 77));
}

let newNumbers = [];

skaiciai.forEach((num) => {
  newNumbers.push(HealthyNumbers(num));
  newNumbers.sort();
  newNumbers.reverse();
});

console.log(skaiciai);
console.log(newNumbers);

// let numberMas = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// numberMas.forEach((num) => {
//   newNumbers.push(HealthyNumbers(num));
//   newNumbers.sort();
//   newNumbers.reverse();
// });

// console.log(numberMas);
// console.log(newNumbers);

//6uzdv

let pirminiai = [];

for (let i = 0; i < 100; i++) {
  pirminiai.push(rand(333, 777));
}

console.log(pirminiai);

pirminiai.forEach((num, index) => {
  if (HealthyNumbers(num) == 0) {
    pirminiai.splice(index, 1);
  }
});

console.log(pirminiai);

//7uzdv
