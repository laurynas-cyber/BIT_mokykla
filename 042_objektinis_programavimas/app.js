const obj = {
  animal: "Fox",
  tail: "30",
};

class Fox {
  #age =
    ""; /* # reiskia privatus klases objekte naudojamas. Naudojimas dazniausiai kai vienas raso programuotojas o kitas naudoja, tam kad apsisaugoti*/
  constructor(tail) {
    this.tail = tail;
    this.height = "long";
    this.color = "red";
    this.add10();
  }

  get niceColor() {
    return "Fox color: " + this.color; //get naudojamas kaip metodas paansus kaip funkcija tik isviekciamas be skliaustu. taip pat get naudojamas gauti privatu kitnamaji
  }

  get age() {
    return this.#age;
  }

  set age(a) {
    if (a > 20) {
      a = 20;
    }
    this.#age = a + " years";
  }

  add10() {
    this.tail += 10;
  }
}

const obj2 = new Fox(20);
const obj3 = new Fox(30);

obj3.color = "blue";

obj3.add10();

obj2.age = 30;
console.log(obj, obj2, obj3);
console.log(obj2.niceColor);
console.log(obj2.age);

console.clear();
