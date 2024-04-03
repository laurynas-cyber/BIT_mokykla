function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//https://docs.google.com/document/d/1uMdvm9bWLTL97cQzetY8obexgFnXdkG3ZLS6qogsi6U/edit

//1 uzdv

let aktorius = "Denziel Washington";
let aktorius2 = "Megan Fox";

if (aktorius.length > aktorius2.length) {
  console.log(aktorius);
} else console.log(aktorius2);

//2uzdv

let vardas = "Laurynas";
let pavarde = "Stanciauskas";
let born = 1991;
let date = 2024;

console.log(
  "Aš esu " + vardas + " " + pavarde + ".Man yra " + (date - born) + " metų"
);

//3 uzdv

let actorName = "Danziel";
let actorSurname = "Washington";
let bullShit = actorName.slice(-3) + actorSurname.slice(-3);

console.log(bullShit);

//4 uzdv

let story = "Once upon a time in hollywood";

let newStory = story.toLowerCase().replaceAll("o", "*");

console.log(newStory);

//5uzdv

let first = rand(0, 2);
let second = rand(0, 2);
let third = rand(0, 2);
let fourth = rand(0, 2);

let all = [first, second, third, fourth];

let zero = 0;
let one = 0;
let two = 0;

for (let i = 0; i < all.length; i++) {
  if (all[i] == 0) {
    zero++;
  } else if (all[i] == 1) {
    one++;
  } else if (all[i] == 2) {
    two++;
  }
}
console.log(zero, one, two);

//6uzdv

let Higher = rand(0, 4);
let Lower = rand(0, 4);

if (Higher > Lower) {
  console.log((Higher / Lower).toFixed(2));
} else if (Higher < Lower) {
  console.log((Lower / Higher).toFixed(2));
} else console.log("lygu");

// 7uzdv

zero = rand(0, 25);
one = rand(0, 25);
two = rand(0, 25);

let sum = zero + one + two;

console.log(zero, one, two);
console.log(sum - Math.max(zero, one, two) - Math.min(zero, one, two));

//8 uzdv

bullShit = actorName[0] + actorSurname[0];
console.log(bullShit);

//9uzdv

let abecele = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let newAbecele = abecele.toLocaleLowerCase();

let abeceleIlgis = newAbecele.length - 1;

let trysRandomRaides =
  newAbecele[rand(0, abeceleIlgis)] +
  newAbecele[rand(0, abeceleIlgis)] +
  newAbecele[rand(0, abeceleIlgis)];

console.log(trysRandomRaides);

//Masyvai
//1uzdv

let masyvas = [1, 2, 3, 4, 5];

masyvas.push(6);

masyvas.shift();

console.log(masyvas.indexOf(4));

console.log(masyvas.length);
let masyvas2 = masyvas.reverse();
console.log(masyvas2);

console.log(masyvas2.sort());

let masyvas3 = masyvas.filter((num) => num % 2 == 0);

let masyvas4 = masyvas3.concat(masyvas2);

console.log(masyvas4);

let masyvas5 = [];

masyvas4.forEach((num) => {
  for (let i = 0; i < 3; i++) {
    masyvas5.push(num);
  }
});

console.log(Math.max(...masyvas5));
console.log(Math.min(...masyvas5));
console.log(masyvas5);
//Unikalūs elementai: Sukurkite masyvą su unikaliais elementais (pašalinkite dublikatus).
let masyvas6 = [];

for (let i = 0; i < masyvas5.length; i++) {
  if (masyvas6.indexOf(masyvas5[i]) == -1) {
    masyvas6.push(masyvas5[i]);
  }
}

let masyvas6Sum = 0;
let vidurkis;

for (let i = 0; i < masyvas6.length; i++) {
  console.log(masyvas6[i]);
  masyvas6Sum += masyvas6[i];
}

vidurkis = masyvas6Sum / masyvas6.length;

console.log(masyvas6, "Sum:", masyvas6Sum, "vidurkis:", vidurkis);

let masyvas7 = [];

for (let i = 0; i < masyvas.length; i++) {
  masyvas7.push(masyvas[i] * masyvas[i]);
}

console.log(masyvas7, masyvas);
console.log(masyvas7.includes(25));
masyvas7.forEach((a, index) => {
  masyvas7[index] = a + 5;
});

function compareNumbers(a, b) {
  return b - a;
}

masyvas7.sort(compareNumbers);
console.log(masyvas7);

let masyvas8 = [];

for (let i = 0; i < masyvas5.length; i++) {
  if (masyvas8.indexOf(masyvas5[i]) == -1) {
    masyvas.forEach((a) => {
      if (a == masyvas5[i]) {
        masyvas8.push(a);
      }
    });
  }
}

console.log(masyvas8);

const movieTheaterSeats = [
  ["Jonas", "Petras", "Tomas"],
  ["Kazys", "Rimas", "Antanas"],
  ["Simas", null, "Lina"],
  ["Radvilė", "Kęstas", "Lidija"],
  ["Laurynas", "Kostas", "Alma"],
];

movieTheaterSeats[2][1] = "laurynas";

console.log(movieTheaterSeats);

for (let i = 0; i < movieTheaterSeats.length; i++) {
  for (let K = 0; K < movieTheaterSeats[i].length; K++) {
    if (
      movieTheaterSeats[i][K] == "Tomas" ||
      movieTheaterSeats[i][K] == "Kazys" ||
      movieTheaterSeats[i][K] == "Kęstas" ||
      movieTheaterSeats[i][K] == "Laurynas"
    ) {
      movieTheaterSeats[i][K] = "Clown";
    }
  }
}

console.clear();

//funkcijos

//1

function Vardenis(name) {
  console.log("labas", name);
}

Vardenis("Laurynas");

//2

function text(a) {
  return a.length;
}

console.log(text("Once upon a time in hollywood"));

//3

function upperCase(name, lastname = "surname") {
  name = name[0].toUpperCase() + name.slice(1);
  lastname = lastname[0].toUpperCase() + lastname.slice(1);
  rez = name + " " + lastname;
  return rez;
}

console.log(upperCase("laurynas", "Stanciauskas"));

//4

function ThreeRandom() {
  let U = rand(0, 5);
  let I = rand(0, 5);
  let Y = rand(0, 5);
  let rez = U + "," + I + "," + Y;
  console.log(rez);
}

ThreeRandom();

//5

function RandomMasyvas(from, to, limit) {
  let newMas = [];
  if (
    typeof from === "number" &&
    typeof to === "number" &&
    typeof limit === "number"
  ) {
    for (let i = 0; i < limit; i++) {
      newMas.push(rand(from, to));
    }
  } else console.log("we need numbers, please");

  return console.log(newMas);
}

RandomMasyvas(-99, 99, 5);

//6

function square(x, y) {
  return Math.pow(x, y);
}

console.log(square(7, 5));

function square1(x, y) {
  let rez = 1;
  for (let i = 0; i < y; i++) {
    rez = rez * x;
  }
  return rez;
}

console.log(square1(7, 5));

//7

// function H1text(text) {
//   document.body.innerHTML = text;
// }

function H1text(text) {
  var H = document.getElementsByTagName("p");
  H.innerHTML = text;
}

H1text("Hello");

// function H1text(text) {
//   let H = document.getElementsByTagName("p");
//   return (H.innerHTML = text);
// }
