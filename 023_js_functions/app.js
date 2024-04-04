console.log("hello");

animals = [
  "cat",
  "dog",
  "elephant",
  "bee",
  "ant",
  "whale",
  "lion",
  "tiger",
  "bear",
  "snake",
  "shark",
  "penguin",
  "parrot",
  "pigeon",
  "eagle",
  "sparrow",
  "owl",
  "seagull",
  "woodpecker",
  "flamingo",
  "peacock",
  "swan",
  "duck",
  "goose",
  "pelican",
  "stork",
  "crane",
  "heron",
  "robin",
  "nightingale",
  "crow",
  "raven",
  "magpie",
  "chickadee",
];

animals.forEach((a) => {
  console.log(a);
});

//map metodas

// ka daro:perrenka visus masyvo elementus
// ka grazina: nauja masyva su pakeistais elementais

const newAnimals = animals.map((a) => {
  console.log(a);
});

console.clear();

let smallAnimals = animals.map((animal) =>
  animal.length > 5 ? "big" : animal
);

// let smallAnimals = animals.map((animal) => {
//   if (animal.length > 5) {
//     return "big";
//   }
//   return animal;
// });

console.log(smallAnimals);

let bigAnimals = animals.map((animal) =>
  animal.length == 3 ? animal + "*****" : animal
);

console.log(bigAnimals);

//filter
//ka daro:perrenka visus elementus
// kas grazina:nauja masyva su tam tikrai elemntais

const filteredAnimals = animals.filter((animal) => true);
const S = animals.filter((animal) => animal[0] == "s");

console.log(S);

const noTiger = animals.filter((animal) => animal != "tiger");

console.log(noTiger);

//sort
//ka daro:surikiuoja masyvos elementus
//ka grazino: ta pati surikiuota masyva

// animals.sort((a, b) => {
//   //jeigu stringai
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   }
//   return 0;
// });

// animals.sort((a, (b) => a.localeCompare(b))); //stringam sortinti

let number = [5, 7, 9, 1, 2, 10];

number.sort((a, b) => a - b);

animals.sort((a, b) => b.length - a.length);

console.log(animals);
console.log(number);

animals.sort((a, b) => a[1].localeCompare(b[1])); //stringam sortinti

console.log(animals);
