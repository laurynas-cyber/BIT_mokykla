function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ww = [];

console.log(typeof ww);

const animals = ["Kiškis", "Lapė", "Barsukas", "Vilkas", "Laukinis katinas"];

console.log(animals[0][1]);

const peoples = [
  { vardas: "Jonas", amzius: 22, miestas: "Vilnius" },
  { vardas: "Petras", amzius: 33, miestas: "Kaunas" },
  { vardas: "Antanas", amzius: 44, miestas: "Klaipėda" },
];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

for (let i = 0; i < animals.length; i += 2) {
  console.log(animals[i]);
}

console.log(animals[0].length);

for (let i = 0; i < animals.length; i++) {
  if (animals[i].length > 6) {
    console.log(animals[i]);
  }
}

console.clear();

let masV = [];

for (let i = 0; i < 5; i++) {
  masV.push(rand(1, 10));
}

console.log(masV);

for (let i = 0; i < masV.length; i++) {
  let B = 0;
  if (masV[i] == 5) {
    B++;
  }
  console.log(B);
}

console.clear();

let rez;

rez = animals.push("zuikis");
console.log(rez, "zuikis push"); //gaunam indekso skaiciu i kuri pushinam

rez = animals.unshift("breidis"); // stumia i prieki

console.log(rez, "animals unshift"); //gaunam naujo masyvo ilgi

console.log(animals);

animals.shift(); // istrina is pradzios

rez = animals.pop();

console.log(rez); //grazina ka ismetam

rez = animals.shift();

console.log(rez);

console.clear();

console.log(animals);

animals.splice(2, 1); // 2 yra indeksas 1 kiek daug elementu reikia istrinti console. grazina masyva kuris buvo istrintas
animals.splice(3, 1, "Fox"); // replacina
animals.splice(3, 1, "Fox", "dog", "cow"); // priklijavo papildomai
console.log(animals);

let fox = animals.indexOf("Fox");



console.log(fox);
