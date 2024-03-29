function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const m1 = [
  [1, 2, 3],
  [4, 5, 6],
];

let m4 = structuredClone(m1); //kopijuoja visus masyvus ne tik išorinius bet ir vidinius. Deep copy

m4[0][2] = 3000;

let obj = {
  vardas: "jonas",
  pavarde: "petraitis",
  amzius: 99,
};

obj.amzius = obj.amzius + 5;

console.log(obj);

const person1 = {
  name: "Briedis",
  surname: "Miškinius",
  age: 15,
};

const person2 = {
  name: "Vilkas",
  surname: "Miškinius",
  age: 53,
};

const person3 = {
  name: "Lapė",
  surname: "Miškinius",
  age: 34,
};

const people = [person1, person2, person3];

for (let i = 0; i < people.length; i++) {
  people[i].age += 5;
}

console.log(people);

let vid = 0;

for (let i = 0; i < people.length; i++) {
  vid = vid + people[i].age;
}
console.log(vid / 3);

vid = Infinity;
for (let i = 0; i < people.length; i++) {
  if (vid > people[i].age) {
    vid = people[i].age;
    console.log(people[i].name);
  }
}

const person4 = {
  name: "Grybas",
  surname: "Baravykas",
  age: 34,
};

people.unshift(person4);

console.log(people);

const colors = ["crimson", "gold", "pink", "purple", "skyblue", "orange"];

