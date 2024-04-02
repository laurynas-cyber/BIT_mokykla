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

console.log(masyvas5);
console.log(Math.max(...masyvas5));
console.log(Math.min(...masyvas5));
