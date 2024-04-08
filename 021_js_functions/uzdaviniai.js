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

console.log(HealthyNumbers(613));

// 5 uzdv

let skaiciai = [];

for (let i = 0; i < 100; i++) {
  skaiciai.push(rand(33, 77));
}

skaiciai.sort((a, b) => HealthyNumbers(a) - HealthyNumbers(b));
skaiciai.reverse();

console.log(skaiciai);

// 6uzdv

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

let Mainmasyvas = [];
let elementNum;
let finish = rand(10, 30);

function createSubArray(array) {
  // array = [];
  let Masyvoilgis = rand(10, 20);
  for (let j = 0; j < finish; j++) {
    for (let i = 0; i < Masyvoilgis; i++) {
      if (i == Masyvoilgis - 1) {
        array.push(createSubArray(array));
      } else array.push(rand(0, 10));
    }
  }
  return array;
}

// for (let j = 0; j < finish; j++) {
//   createSubArray(Mainmasyvas);
// }
createSubArray(Mainmasyvas);
console.log(Mainmasyvas);

// let vardai = ["jonas", "saulius", "Justas", "Kimas"];

// vardai.push(createSubArray());

// console.log(vardai);

// function createSubArray() {
//   let array = [];
//   let Masyvoilgis = rand(10, 20);
//   let newMas = [];
//   for (let i = 0; i < Masyvoilgis; i++) {
//     if (i == Masyvoilgis - 1) {
//       // createSubArray(array);
//     } else array.push(rand(0, 10));
//   }
//   return array;
// }

// console.log(createSubArray(Mainmasyvas));

//9 uzdv

let Newmasyvas = [rand(1, 33), rand(1, 33), rand(1, 33)];

console.log(Newmasyvas);

function AddifPirminis(array) {
  do {
    for (let i = 0; i < array.length; i++) {
      if (
        HealthyNumbers(array[array.length - 1]) != 0 ||
        HealthyNumbers(array[array.length - 2]) != 0 ||
        HealthyNumbers(array[array.length - 3]) != 0
      ) {
        array.push(rand(1, 33));
      }
    }
  } while (
    HealthyNumbers(array[array.length - 1]) < 0 ||
    HealthyNumbers(array[array.length - 2]) < 0 ||
    HealthyNumbers(array[array.length - 3]) < 0
  );
  return array;
}

console.log(AddifPirminis(Newmasyvas));

console.clear();
// 10 uzdv
let DidelisMasyvas = [];

for (let i = 0; i < 10; i++) {
  DidelisMasyvas.push([]);
  for (let j = 0; j < 10; j++) {
    DidelisMasyvas[i].push(rand(1, 100));
  }
}

console.log(DidelisMasyvas);

let Allnumbers = DidelisMasyvas.flat();
console.log(Allnumbers);

let PirminiaiSum = 0;
let PirminiaiIndex = 0;
let PirminiaiVidurkis = 0;
let minNumber = 0;

do {
  Allnumbers.forEach((el) => {
    if (HealthyNumbers(el) == 0) {
      PirminiaiSum += el;
      PirminiaiIndex++;
    }
  });
  PirminiaiVidurkis = PirminiaiSum / PirminiaiIndex;
  if (PirminiaiVidurkis < 70) {
    Allnumbers.sort((a, b) => a - b);
    Allnumbers[0] = Allnumbers[0] + 3;
  }
} while (PirminiaiVidurkis < 70);

console.log(PirminiaiVidurkis);
