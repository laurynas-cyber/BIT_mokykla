function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bitGirls = ["Edita", "Lina", "Brigita", "Deimantė", "Justė"];
const cats = ["Murka", "Rainius", "Meilutė", "Bosas", "Dičkis"];

//1 uzdv
bitGirls.unshift("Nauseda");
console.log(bitGirls);
//2uzd

let bitCats = [];
let catSvoris = [];
let svoris;

let storas = 0;
let normalus = 0;

// Skirtingai supratau salyga tai du sprendimai
// bitCats.push(cats);
// bitCats.push(catSvoris);
// for (let i = 0; i < cats.length; i++) {
//   svoris = rand(0, 1);
//   if (svoris == 1) {
//     catSvoris.push("storas");
//     storas++;
//   } else if (svoris == 0) {
//     normalus++;
//     catSvoris.push("normalus");
//   }
// }

for (let i = 0; i < cats.length; i++) {
  let newMake = [];
  svoris = rand(0, 1);
  if (svoris == 1) {
    newMake.push("storas");
    newMake.push(cats[i]);
    storas++;
    bitCats.push(newMake);
  } else if (svoris == 0) {
    normalus++;
    newMake.push("normalus");
    newMake.push(cats[i]);
    bitCats.push(newMake);
  }
}

console.log(bitCats);

//3 uzd

console.log(storas, normalus);

//4 uzd

//5uzdv

let happyCats = [];
let skaic;
for (let i = 0; i < bitGirls.length; i++) {
  skaic = rand(0, 5);
  let newMas = [];
  if (bitGirls[i] == "Nauseda") {
    newMas.push(bitGirls[i]);
    newMas.push("Barsukas");
    happyCats.push(newMas);
  } else if (bitGirls[i] !== "Nauseda") {
    newMas.push(bitGirls[i]);
    newMas.push(cats[i - 1]);
    happyCats.push(newMas);
  }
}

console.log(happyCats);

// let happyCats = [];
// let skaic;
// for (let i = 0; i < bitGirls.length; i++) {
//   skaic = rand(0, 5);
//   let newMas = [];
//   happyCats.forEach((element) => {
//     if (
//       element.indexOf(bitGirls[skaic]) == -1 &&
//       element.indexOf(cats[skaic]) == -1
//     ) {
//       newMas.push(bitGirls[skaic]);
//       newMas.push(cats[skaic]);
//       happyCats.push(newMas);
//     }
//   });
// }
// console.log(happyCats);
