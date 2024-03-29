function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1uzdv https://docs.google.com/document/d/1wGi8xCLiVel9q16jzEXakPKNjQj0HZtG2j56zjmvYPg/edit
for (let i = 10; i >= 1; i--) {
  console.log("liko nuvazaiuoti:", i);
}

//2uzdv

let RAND;

let RANDsum = 0;

for (let i = 10; i >= 1; i--) {
  RAND = rand(120, 240);
  RANDsum = RANDsum + RAND;
  console.log("liko nuvazaiuoti:", i, "greitis:", RAND);
  if (i == 1) {
    console.log("greitis:", RANDsum);
  }
}

//3uzdv

let kuras = 44;
let randKuras;

for (let i = 10; i >= 1; i--) {
  randKuras = rand(3, 6);
  kuras = kuras - randKuras;
  console.log("liko nuvazaiuoti:", i, "liko kuro:", kuras);
  if (kuras <= 0) {
    console.log("pasibaige kuras");
  }
}

console.clear();
//4uzdv

let greitis = 0;
let temp = 120;
let posukis = 0;
let ratas = 0;

for (let i = 10; i >= 1; i--) {
  for (let j = 1; j < 6; j++) {
    greitis = rand(20, 120);
    if (greitis < temp) {
      temp = greitis;
      posukis = j;
      ratas = i;
      console.log(posukis);
    }
  }
}

console.log("greitis:", greitis, "posukis:", posukis, "ratas", ratas);

///boso

console.clear();

let tikimybe;
let ivykis;
let ratas2 = 0;
let kengura;
let vairas;
let stabdis;

do {
  ratas2++;
  ivykis = rand(0, 1);
  if (ivykis == 0) {
    kengura = 1;
    console.log("Iššoko kengūra", kengura);
  } else {
    kengura = 0;
    console.log("neiššoko kengūra", kengura);
  }

  ivykis = rand(0, 1);
  if (ivykis == 0) {
    vairas = 1;
    console.log("nespėjo pasukti vairo", vairas);
  } else {
    vairas = 0;
    console.log("spėjo pasukti vaira", vairas);
  }

  ivykis = rand(0, 1);
  if (ivykis == 0) {
    stabdis = 1;
    console.log("nespėjo paspausti stabdziu", stabdis);
  } else {
    stabdis = 0;
    console.log("spėjo stabdyti vaira", stabdis);
  }
  if (stabdis + vairas + kengura == 3) {
    console.log("visi įvyko");
  }
} while (stabdis + vairas + kengura != 3);

console.clear();

