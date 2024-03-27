function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const m = [5, 15, 25];

const r = m.push(6);

console.log(r);

const r2 = m.splice(2, 1);

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log([...animals]);

const r3 = animals.slice(2);

console.log(r3, animals);

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

const M = Array(100).fill("A");

console.log(M);

const fairtTail =
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.";

const r7 = fairtTail.split(" ");

console.log(r7);

console.clear();

const md1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [7, 2], 9],
];

console.log("md1:", md1[2][2][0]);

for (let i = 0; i < md1.length; i++) {
  for (let j = 0; j < md1[i].length; j++) {
    console.log(md1[i][j]);
  }
}

console.clear();

const animals2 = [
  ["ant", "bison", "camel"],
  ["duck", "elephant", "giraffe"],
  ["hippo", "iguana"],
];

for (let i = 0; i < animals2.length; i++) {
  for (let j = 0; j < animals2[i].length; j++) {
    if (animals2[i][j] == "duck") {
      animals2[i][j] = "dog";
    }
    console.log(animals2[i][j]);
  }
}

let newMD = [];

for (let i = 0; i < 5; i++) {
  const row = [];
  for (let j = 0; j < 4; j++) {
    row.push(rand(10, 99));
  }
  newMD.push(row);
}

//surasti maŽiausią

console.log(newMD);
let i = 0;
let temp = 0;
temp = Math.min(...newMD[i]);
for (i = 0; i < 5; i++) {
  console.log(Math.min(...newMD[i]));

  if (Math.min(...newMD[i]) < temp) {
    temp = Math.min(...newMD[i]);
  }
}

console.log("temp:", temp);
