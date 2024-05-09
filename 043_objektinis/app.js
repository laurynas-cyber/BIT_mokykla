const arr = ["lol"];

arr.push("bla bla");
arr.push("zuikis");
arr.push("barsukas");
console.log(arr);

const map = new Map(); //padaryti masyva pagal savo indeksus

map.set("b", "blabla");
map.set("zuik", "zuikis");
map.set(101, "barsukas");
map.set((_) => _, "funkcinis barsukas");

map.delete("zuik"); //istrina is mapo

console.log(map, map.get("zuik"), map.has("b"), map.size); //get paiimti zuiki, has iesko ar yra ar ne , size pasako ilgi,

map.forEach((v, i) => console.log(i, v)); //mapui tik forEach veikia

const arrFromMap = [...map]; //paversti i array

console.log(arrFromMap);

const map2 = new Map(arrFromMap); //is arejau i map

console.log(map2);

///set

const set = new Set(); //setas labai panasus kaip mapas tik neturi indekso

set.add("bla bla");
set.add("zuikis");
set.add("barsukas");

set.add("zuikis"); //priima tik unikales reiksmes, antro zuikio nepriims.

console.log(set, set.has("zuikis"));

console.clear();

class Fox {
  static allAge = 0;
  static allFoxes = 0;

  static addAge(age) {
    this.allAge += age; //statinis metodas priklauso klasej, todel nereikia construtokriaus. Statinis metodas arba kintamasis tiktai klasej priklauso
  }

  constructor(color) {
    this.color = color;
    this.age = 0;

    this.constructor.allFoxes++; //skirta tiktai sitai klasei statinis kintamasis. galima rasyti Fox.allFoxes++;
  }

  foxAge(age) {
    this.age = age;
    this.constructor.addAge(age);
  }
}

const fox1 = new Fox("rudas");
const fox2 = new Fox("juoda");
const fox3 = new Fox("raudona");

fox1.foxAge(5);
fox2.foxAge(6);
fox3.foxAge(3);

console.log(fox1, fox2);

console.log("Avarage", Fox.allAge / Fox.allFoxes);

console.log(Fox.allFoxes);
