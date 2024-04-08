function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(" hi");

function recursion(n) {
  console.log("recursion in:", n);
  if (n !== 3) {
    recursion(n + 1);
  }
  console.log("recursion out:", n);
}

recursion(1);

multiArray = [
  [1, [4, 5, 6], 3],
  [[4, [7, 8, [4, [4, 5], 6]]], 5, 6],
  [7, 8, [4, [4, 5], 6]],
];

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      printArray(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
}

const digitsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ka daro: nieko orginalo nekeicia
//grazina: akumuliatoriu acc
const sum = digitsArray.reduce((acc, item) => acc + item, 0);

console.log("sum:", sum);

console.log(digitsArray);

//toReversed
// ka daro: nieko
//ka grazina: nauja masyva apversta tvarka

const org = digitsArray.toReversed();

console.log(digitsArray);
console.log(org);

//find
// ka daro:nieko
// ka grazina:iesko pirmo elemento pagal salyga, jeigu netenkina bus undefined

const names = ["Jonas", "Petras", "Antanas", "Juozas", "Ona"];

const foundnames = names.find((name) => name.length > 6);

console.log(foundnames);

//some geriausia naudoti paieskai
//ka daro:nieko
//ka grazina: true ar false

console.log(names.some((name) => name == "Ona"));

console.clear();

const catsAndOwners = [
  { cat: "Fluffy", owner: "Jonas", color: "white" },
  { cat: "Garfield", owner: "Petras", color: "orange" },
  { cat: "Marmaduke", owner: "Ona", color: "black" },
  { cat: "Tom", owner: "Agota", color: "grey" },
  { cat: "Jerry", owner: "Asta", color: "grey" },
  { cat: "Sylvester", owner: "Vytas", color: "black" },
];

for (const owner in catsAndOwners) {
  console.log(catsAndOwners[owner].owner); // naudojant objektui
}

// 2. išrinkti visus pilkus katinus
let newGreycats = catsAndOwners.filter((Catcolor) => Catcolor.color == "grey");

console.log(newGreycats);

// 4. prie visų kačių pridėti savybę "age" su atsitiktine reikšme nuo 1 iki 18
let newCatsAge1 = [...catsAndOwners]; // shallow copy
let newCatsAge = structuredClone(catsAndOwners); //deep

newCatsAge.map((animal) => (animal.age = rand(1, 18)));

console.log(catsAndOwners);
console.log(newCatsAge);

// const catsWithAge = catsAndOwners.map(catAndOwner => ({ ...catAndOwner, age: rand(1, 18) }));

// 3. paseno visus kačiukus vienais metais

const catsOlder = newCatsAge.map((catAndOwner) => ({
  ...catAndOwner,
  age: catAndOwner.age + 5,
}));

console.log(catsOlder);

// 5. išrūšiuoti kačiukus pagal amžių nuo jauniausio iki vyriausio naujame masyve

const sortedCats = catsWithAge.toSorted((a, b) => a.age - b.age);

console.table(sortedCats);
