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

const A = [
  83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46,
  9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58,
  -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87,
  -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32,
  -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27,
  77, 41, 0, 40, -54, 99, 70, -41, 91,
];

let sum = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] % 3 == 0) {
    sum++;
  }
}

console.log(sum);

const B = [
  "the quick brown fox",
  "jumps over the lazy dog",
  "a bird in the hand",
  "is worth two in the bush",
  "an apple a day",
  "keeps the doctor away",
  "actions speak louder than words",
  "all good things must come to an end",
  "beauty is in the eye of the beholder",
  "better late than never",
  "birds of a feather flock together",
  "cleanliness is next to godliness",
  "dont bite the hand that feeds you",
  "dont count your chickens before they hatch",
  "dont put all your eggs in 1 basket",
  "every cloud has a silver lining",
  "every dog has its day",
  "every rose has its thorn",
  "fortune favors the bold",
  "good things come to those who wait",
  "a watched pot never boils",
  "haste makes waste",
  "history repeats itself",
  "cat got your tongue",
  "home is where the heart is",
  "if the shoe fits, wear it",
  "ignorance is bliss",
  "it takes two to tango",
  "arabs have 100 words for sand",
  "kill two birds with one stone",
  "laughter is the best medicine",
  "love is blind",
  "money doesnt grow on trees",
  "no pain no gain",
  "nothing ventured nothing gained",
  "once bitten twice shy",
  "practice makes perfect",
  "the early bird catches the worm",
  "the grass is always greener on the other side",
  "the pen is mightier than 10 swords",
  "theres no smoke without fire",
  "time heals all wounds",
  "5 second rule",
  "every dog has its day",
  "to err is human to forgive divine",
  "2 wrongs dont make a right",
  "when in Rome do as the Romans do",
  "where theres smoke, theres fire",
  "you cant judge a book by its cover",
  "you cant make an omelette without breaking eggs",
  "you reap what you sow",
  "youre never too old to learn",
];

