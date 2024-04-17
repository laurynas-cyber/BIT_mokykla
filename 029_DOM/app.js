const i1 = document.querySelector(".i1");

const btn = document.querySelector("button");

btn.addEventListener("click", (_) => {
  const v = i1.value; //paiima inputo reiskme

  console.log("Click", v);
});

const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");

const multiBtn = document.querySelector(".calc button");

btn.addEventListener("click", (_) => {
  const v = i1.value; //paiima inputo reiskme

  console.log("Click", v);
});

i1.addEventListener("input", (_) => {
  const v = i1.value; //paiima inputo reiskme

  console.log("Event", v);
});

multiBtn.addEventListener("click", (_) => {
  const A = parseFloat(a1.value);
  const B = parseFloat(a2.value);
  a1.style.borderColor = "black";
  a2.style.borderColor = "black";
  if (isNaN(A) || isNaN(B)) {
    console.log("Įvesti neskaiciai");
    if (isNaN(A)) {
      a1.style.borderColor = "red";
    }
    if (isNaN(B)) {
      a2.style.borderColor = "red";
    }
  } else {
    console.log(A * B);
  }
});

console.log(parseFloat(25));

const parent = document.querySelector(".parent");

const child = document.querySelector(".child");

parent.addEventListener("click", (_) => {
  parent.style.backgroundColor = "red"; // pakeis tiktai vienam
});

child.addEventListener("click", (event) => {
  event.stopPropagation(); // sustabdo bublinima
  child.style.backgroundColor = "yellow"; //evento bublinimas. nusidazys abu. reikia stabdyti bubblinima stopPropogation()
});


//regex panaudojimas 
const obj = {
  smartAnimal32: 'Fox',
  funnyAnimal88: 'Racoon',
  bigAnimal105: 'Wolf'
}

const regex = /\d+/g;


for (const a in obj) {

    const found = a.match(regex);

    console.log(obj[a], found[0]);
}

// <!-- https://regex101.com/ -->
//     <!-- [sš] i keturkampius skliaustus rasyti ko ieskai. iesko s arba š. be skliaustu ieško paprastai.  -->
//     <!-- [sš]{2} iesško sš kombinacijos. -->
//     <!-- [so]+ ieskos ir so kombinacijos ir s ir o atskirai raidziu -->