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
        return (array[i] = []);
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
    array.forEach((element) => {
      if (HealthyNumbers(element) == 0) {
        array.push(rand(1, 33));
      }
    });
  } while (
    HealthyNumbers(array[array.length - 1]) < 0 ||
    HealthyNumbers(array[array.length - 2]) < 0 ||
    HealthyNumbers(array[array.length - 3]) < 0
  );
  return array;
}

console.log(AddifPirminis(Newmasyvas));
