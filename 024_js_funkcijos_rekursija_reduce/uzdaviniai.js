//https://docs.google.com/document/d/1rVyaf-BeHt4_uvvRVKvmOQ7wTH0oMu95EiJR5PQMFSs/edit

const A = [
  83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46,
  9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58,
  -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87,
  -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32,
  -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27,
  77, 41, 0, 40, -54, 99, 70, -41, 91,
];

const D = [
  [95, 78, 38],
  [55, 35],
  [61, 0, 16],
  [36, 32, 16],
  [64],
  [94],
  [80, 10, 80],
  [75, 80],
  [41],
  [91, 77],
  [93, 73, 77, 65],
  [26, 25, 17],
  [19, 52, 42, 11],
  [35, 18, 82],
  [31, 1],
  [3, 52, 70, 84],
  [98],
  [90, 0],
  [94, 58],
  [80],
  [17, 0, 3],
  [65],
  [99, 54, 33, 24],
  [86, 6],
  [55, 47],
  [63],
  [41, 56],
  [97, 69],
  [11],
  [41, 53],
  [19, 89],
  [48, 54, 54, 63],
  [33, 55, 60, 54],
  [28, 28, 74, 44],
  [60],
  [5, 52],
  [80, 92, 31, 30],
  [24],
  [95, 4, 23],
  [38, 7, 61],
  [53, 99, 22],
  [23, 34],
];
const C = [
  94,
  true,
  "technology",
  "year",
  34,
  true,
  "flower",
  13,
  "future",
  undefined,
  0,
  12,
  "water",
  "false",
  "school",
  "cat",
  false,
  "family",
  70,
  undefined,
  "life",
  "government",
  "mountain",
  13,
  true,
  "year",
  "sun",
  50,
  "day",
  "food",
  0,
  "health",
  70,
  31,
  16,
  85,
  "car",
  "internet",
  100,
  "money",
  26,
  "fire",
  76,
  [],
  45,
  "time",
  "music",
  93,
  0,
  "love",
  69,
  {},
  96,
  0,
  false,
  "air",
  "star",
  24,
  9,
  "thing",
  19,
  "house",
  "way",
  "true",
  90,
  "0",
  "woman",
  "time",
  "job",
  "72",
  "22",
  "city",
  "history",
  47,
  "man",
  92,
  "child",
  73,
  "0",
  16,
  63,
  48,
  "country",
  45,
  "tree",
  true,
  57,
  "earth",
  96,
  [],
  "hope",
  "dream",
  39,
  43,
  "art",
  27,
  "friend",
  "moon",
  "26",
  "science",
  74,
];

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

const E = [
  ["time", "love", "government"],
  ["year"],
  ["time", "friend", "child", "money"],
  ["air"],
  ["world", "music"],
  ["phone", "job", "hope", "car"],
  ["day"],
  ["house", "thing", "future"],
  ["family", "man", "life", "life"],
  ["way", "moon", "history", "tree"],
  ["cat", "book", "science", "internet"],
  ["food", "people", "art", "country"],
  ["internet", "friend", "house", "job"],
  ["money", "government", "antiquity", "time"],
  ["love", "cat", "family", "friend"],
  ["future", "year", "time", "life"],
  ["sun"],
  ["school"],
  ["health", "mountain"],
  ["city"],
  ["water", "star"],
  ["flower", "earth", "fire"],
  ["star"],
  ["river", "art", "fire"],
  ["woman", "earth", "flower", "computer"],
  ["water", "technology", "dream"],
];

console.log(E);

//1.sunkesni Masyve E surasti visus žodžius, kurie pasibaigia “r” raide, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3. Surastus žodžius sudėti į atskirą masyvą;

// for (const animal of animals) {
//     console.log(animal);
//   }

let Rmasyvas = [];

E.forEach((sub) => {
  if (sub.length < 3) {
    let lastWord = sub[sub.length - 1];
    if (lastWord[lastWord.length - 1] == "r") {
      Rmasyvas.push(lastWord);
    }
  }
});

console.log(Rmasyvas);

// 2.Masyve E surasti visus žodžius, kurie prasideda “a” raide, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2. Surastus žodžius sudėti į atskirą masyvą;

let Amasyvas = [];

E.forEach((sub) => {
  if (sub.length > 2) {
    sub.forEach((word) => {
      if (word[0] == "a") {
        Amasyvas.push(word);
      }
    });
  }
});

console.log(Amasyvas);

// 3.Masyve E surasti visus žodžius, kurie pasikartoja daugiau nei 1 kartą ir sudėti juos į atskirą masyvą;

let FlatE = E.flat();
let RepeatWords = [];

console.log(FlatE);
console.log(E);

for (let i = 0; i < FlatE.length; i++) {
  let word = FlatE[i];
  let count = 0;
  FlatE.forEach((el) => {
    if (el == FlatE[i]) {
      count++;
      if (count == 2) {
        return RepeatWords.push(el);
      }
    }
  });
}

console.log(RepeatWords);

//4. Masyve B surasti vienodą stringą;

console.clear();

console.log(B);

let SplitArrayB = [];

B.forEach((el) => {
  SplitArrayB.push(el.split(" "));
});

SplitArrayB = SplitArrayB.flat();
console.log(SplitArrayB);

for (let i = 0; i < SplitArrayB.length; i++) {
  let word = SplitArrayB[i];
  let count = 0;
  SplitArrayB.forEach((el) => {
    if (el == SplitArrayB[i]) {
      count++;
      if (count == 2) {
        return console.log(el);
      }
    }
  });
}

//5. Masyve C surasti vienodą stringą;
console.clear();

console.log(C);
console.log(C[78]);

for (let i = 0; i < C.length; i++) {
  let word = C[i];
  let count = 0;
  C.forEach((el, ind) => {
    if (typeof word === "string" && el === word) {
      count++;
      if (count == 2) {
        return console.log(el, ind);
      }
    }
  });
}

//6. Masyve B surasti žodį, kuris pasikartoja daugiausiai kartų;
console.clear();
console.log(SplitArrayB);

let count1 = 0;
let highestCount = 0;
let WinnerWord;
for (let i = 0; i < SplitArrayB.length; i++) {
  let word = SplitArrayB[i];

  SplitArrayB.forEach((el, ind) => {
    if (el == word) {
      count1++;
      console.log(el, ind, "count:", count1, "hihest:", highestCount);
    }
  });

  if (count1 > highestCount) {
    WinnerWord = word;
    highestCount = count1;
    count1 = 0;
  } else count1 = 0;
  if (SplitArrayB.length - 1 == i) {
    console.log(highestCount, WinnerWord);
  }
}

//7.Masyve B surasti ir sudėti į atskirą masyvą visus skaičius, esančius tekste;

console.clear();

// string - string = NaN type number

// string - number = 0 type number

console.log(SplitArrayB);

SplitArrayB.forEach((numString) => {
  if (numString - 0 >= 0 || numString - 0 <= 0) {
    console.log(numString);
  }
});

//8 Masyve D surasti elementą, kurio masyvo elemento suma yra didžiausia;

console.clear();

console.log(D);

let smallArraySum = 0;
let highestSmallArraySum = 0;
let WinnerArray = 0;

for (let i = 0; i < D.length; i++) {
  smallArraySum = 0;
  for (let j = 0; j < D[i].length; j++) {
    smallArraySum += D[i][j];
  }
  if (smallArraySum > highestSmallArraySum) {
    highestSmallArraySum = smallArraySum;
    WinnerArray = D[i];
  }
  console.log(WinnerArray, highestSmallArraySum);
}

//9 Masyve A surasti visus skaičius, kurie yra ir teigiami ir neigiami (pvz. yra 15 ir -15). Rastus skaičius sudėti į atskirą masyvą

console.clear();

console.log(A);
let doubleDigits = [];
let count2;
for (let i = 0; i < A.length; i++) {
  count2 = 0;
  A.forEach((el) => {
    if (A[i] == -el && el != 0) {
      if (!doubleDigits.includes(A[i])) {
        doubleDigits.push(A[i]);
        doubleDigits.push(el);
      }
    }
  });
}

console.log(doubleDigits);

//10Masyve A suskaičiuoti visų skaičių, kuriuose nėra skaitmens “7” sumą;

console.clear();
let num = 1;
console.log(num.toString());
// console.log(num.includes(0));

let FilterNoSeven = [];

A.forEach((el) => {
  let toString = el.toString();
  if (!toString.includes(7)) {
    FilterNoSeven.push(el);
  }
});
console.log(A);
console.log(FilterNoSeven);

let NoSevenSum = 0;

FilterNoSeven.forEach((el) => {
  NoSevenSum += el;
});
console.log(NoSevenSum);

  console.clear();

// using System;

// public static class Kata {
//   public static int CookPancakes(int n, int m) {
//     return 0;
//   }
// }