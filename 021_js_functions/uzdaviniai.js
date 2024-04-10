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

console.clear();

//7uzdv Maximum call stack size exceeded

// let Mainmasyvas = [];
// let elementNum;
// let finish = rand(10, 30);

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

// console.log(Mainmasyvas);

// function generuotiMasyva() {
//   const ilgis = rand(10, 20); // Atsitiktinis masyvo ilgis nuo 10 iki 20
//   let masyvas = [];

//   // Sukurkite masyvą su atsitiktiniais skaičiais nuo 0 iki 10, išskyrus paskutinį elementą
//   for (let i = 0; i < ilgis - 1; i++) {
//     masyvas.push(rand(0, 10));
//   }

//   // Sukurkite paskutinį elementą su atsitiktiniais skaičiais nuo 0 iki 10, išskyrus 0
//   let paskutinisElementas = Math.floor(Math.random() * 11);
//   while (paskutinisElementas === 0) {
//     paskutinisElementas = Math.floor(Math.random() * 11);
//   }
//   masyvas.push(paskutinisElementas);

//   return masyvas;
// }

// // Atsitiktinai generuojame nuo 10 iki 30 masyvų
// const kiekis = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
// for (let i = 0; i < kiekis; i++) {
//   let naujasMasyvas = generuotiMasyva();
//   console.log(naujasMasyvas);
// }

//masyvas masyve rekursija

function generuotiMasyvaMasyve(gylis) {
  if (gylis === 0) {
    return rand(0, 10); // Grąžiname atsitiktinį skaičių, kai pasiekiame gylį 0
  } else {
    let naujasMasyvas = [];
    const ilgis = rand(10, 20); // Atsitiktinis masyvo ilgis nuo 1 iki 10
    for (let i = 0; i < ilgis; i++) {
      naujasMasyvas.push(generuotiMasyvaMasyve(gylis - 1)); // Kviečiame rekursyviai funkciją, sumažindami gylį
    }
    return naujasMasyvas;
  }
}

// Kviečiame funkciją, nurodydami norimą gylį masyve
const gylis = 2; // Galite pasirinkti bet kokį norimą gylį
const masyvas = generuotiMasyvaMasyve(gylis);

// Atspausdiname sukurtą masyvą
console.log(masyvas);

function areYouPlayingBanjo(name) {
  if (name.startsWith("R") || name.startsWith("r")) {
    return name + " plays banjo";
  } else return name + " does not play banjo";
}

///////////

function sumMix(x) {
  let ar = x.flat();
  let sum = 0;
  ar.forEach((el) => {
    sum += parseInt(el);
  });
  return sum;
}

console.log(sumMix([9, 3, "7", "3"]), 22);

//----------------

function removeSmallest(numbers) {
  let num = Math.min(...numbers);
  let ind = numbers.indexOf(num);
  let newArr = [...numbers];
  newArr.splice(ind, 1);
  return newArr;
}
console.log(removeSmallest([3, 2, 1, 4, 1, 6, 7, 8, 9, 10]));

function vardas(name) {
  return name == "jonas" ? "laimejai" : "ne";
}

console.log(vardas(" pl"));

//-------

function squareDigits(num) {
  let sum = "";
  strNum = num.toFixed(0);
  for (let i = 0; i < strNum.length; i++) {
    sum = sum + parseFloat(strNum[i] * strNum[i]);
  }
  return parseFloat(sum);
}

// let g = "2 1 3 a".split(" ");

// console.log(g);

console.clear();

function findMissingNumber(sequence) {
  //your code here https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript
  let v = sequence.split(" ");
  let max = Math.max(...v);
  let min = Math.min(...v);
  let sum = 0;
  v.sort();



  for (let i = 0; i < v.length; i++) { // padaryti if pirmas elementas != 1 turi prasideti nuo 1.
    if (v[i] - 0 >= 0 || v[i] - 0 <= 0) {
      sum = sum + parseInt(v[i]);
    } else return 1;
  }

  let realSum = 0;
  for (let i = max; i > 0; --i) {
    realSum = realSum + i;
  }

  if (realSum - sum == 0) {
    return 0;
  }

  let answer;
  v.forEach(() => {
    if (!v.includes(min.toString())) {
      return (answer = min);
    } else min += 1;
  });
  return answer;
}

console.log(findMissingNumber("0 3 5"));
