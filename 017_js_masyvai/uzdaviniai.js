//https://docs.google.com/document/d/1q1E8LNDrBtMSOsUQxFRW6swYC5dgKn1sq29XnapnJ9c/edit

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1uzdavinys

let pinigine = [];

let sum = 0;
pinigine.length = rand(10, 30);

console.log(pinigine);

for (let i = 0; i < pinigine.length; i++) {
  pinigine[i] = rand(0, 10);

  sum = sum + pinigine[i]; //2 uzdv
}

let pinigineCopy = [...pinigine];

console.log(sum);

//3uzdavinys
sum = 0;

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] > 2) {
    sum = sum + pinigine[i];
  }
}

console.log(sum);

//4uzdavinys

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] <= 2) {
    pinigine[i] = 0;
  }
}

console.clear();

//5uzdavinys
sum = 0;
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] == Math.max(...pinigine)) {
    sum++;
  }
}

console.log(Math.max(...pinigine));
console.log(sum);

console.clear();

//6uzdavinys

console.log(pinigine);

pinigine.forEach((element, index) => {
  if (element == 0) {
    pinigine[index] = index;
  }
});

console.log(pinigine);

//7uzdavinys

do {
  pinigine.push(rand(0, 10));
} while (pinigine.length < 30);

console.log(pinigine);
console.log(pinigineCopy);
console.clear();
//8uzdavinys

let pinigine1 = [];
let pinigine2 = [];

console.log(pinigineCopy);
pinigineCopy.forEach((element) => {
  if (element <= 2) {
    pinigine1.push(element);
  } else if (element > 2) {
    pinigine2.push(element);
  }
});

console.log(pinigine1);
console.log(pinigine2);

console.clear();

//9uzdv

let DidelePinigine = [];

DidelePinigine.push(pinigine1);
DidelePinigine.push(pinigine2);

let korteles = [
  "KIKA",
  "Euro Vaistinė",
  "Drogas",
  "Ačiū",
  "Lietuvos Geležinkeliai",
  "Mano RIMI",
];

//10 uzdv

DidelePinigine.push(korteles);

//11uzdv

korteles.sort();

//12uzdv

let MasterVisa = ["MasterCard", "Visa"];

do {
  korteles.push(MasterVisa[rand(0, 1)]);
} while (korteles.length < 20);

console.log(DidelePinigine);

console.clear();
//13uzdv

let M = 0;
let V = 0;

korteles.forEach((element) => {
  if (element == "MasterCard") {
    M++;
  } else if (element == "Visa") {
    V++;
  }
});

if (M > V) {
  console.log("MasterCard daugiau", M);
} else if (V > M) {
  console.log("Visa daugiau", V);
}

//14uzd

let loterijos = [];
let lotRand;
DidelePinigine.push(loterijos);

for (let i = 0; i < 10; i++) {
  lotRand = rand(1000000000, 9999999999);
  loterijos.push(lotRand);
}

//15uzdv

loterijos.sort();
loterijos.reverse();
console.log(DidelePinigine);

//16uzdavinys

let Rand;
let IndexRand = 0;

do {
  Rand = rand(3, 10);

  IndexRand = IndexRand + Rand;
  pinigine2.push(Rand);
} while (IndexRand < 500);

//17uzdv

sum = 0;

for (let i = 0; i < loterijos.length; i++) {
  if (loterijos[i] % 777 == 0) {
    sum++;
    console.log("laimėjote", sum, loterijos[i]);
  }
}

//18uzdv

let nuotCont = ["kiemas", "šuo", "katė", "automobilis", "namas"];

let nuotLenght = [];

let W;

nuotCont.forEach((el) => {
  nuotLenght.push(el.length);
});

function compareNumbers(a, b) {
  return a - b;
}

nuotLenght.sort();
nuotLenght.sort(compareNumbers);

for (let i = 0; i < nuotLenght.length; i++) {
  nuotCont.forEach((el) => {
    if (el.length == nuotLenght[i]) {
      nuotLenght[i] = el;
    }
  });
}

console.log(nuotCont);
console.log(nuotLenght);
