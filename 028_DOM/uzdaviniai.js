//https://docs.google.com/document/d/1ZILEPtnrTzvWCz0kP2-UKikyQeMhbwqDGLMOkdmU2Pw/edit?usp=sharing

// A1

const H1 = document.querySelector("h1");

console.log(H1);

//A2

const Adress = document.querySelector("#contacts");

console.log(Adress);

//A3
console.clear();
const InoSign = document.querySelectorAll("i");

InoSign.forEach((el) => {
  if (el.innerText !== "***") {
    console.log(el.innerText);
  }
});

//A4 const.

const NewAnimals = document.querySelectorAll("#gyvates li");

NewAnimals.forEach((el) => {
  if (el.innerText !== "PATINKA") {
    console.log(el.innerHTML);
  }
});

//A5

let H2 = document.querySelectorAll("i + div h2");

H2.forEach((el) =>
  el.innerHTML.includes("<span>Atsinaujinom</span>")
    ? console.log(el.innerHTML.replace("<span>Atsinaujinom</span>", ""))
    : console.log(el.innerText)
);

//A6

const Zirafe = document.querySelectorAll("#zirafos li");
let count = 0;
Zirafe.forEach((el) => {
  if (el.innerText !== "PATINKA") {
    count++;
  }
});

console.log(count);
console.clear();

//A7

Zirafe.forEach((el) => {
  if (el.innerText.includes("Bertos")) {
    console.log(el.innerText);
  }
});

//A8

const races = document.querySelectorAll("i + div ul");
count = 0;
races.forEach((a) => count++);

console.log(count);

//A9
console.clear();
const ZirafosLi = document.querySelectorAll("#zirafos li");
let plesrunaiLi = document.querySelectorAll("#plesrunai li");
const GyvatesLi = document.querySelectorAll("#gyvates li");
const zoliaedziaiLi = document.querySelectorAll("#zoliaedziai li");
const ArrayH2 = [ZirafosLi, plesrunaiLi, GyvatesLi, zoliaedziaiLi];
count = 0;
let tempWinner = 0;
let RepeatCOunt = 0;
let WinnerRusis;

let FirstH2zirafos = "i + div h2 ";
let Bullshit = "+ ul + h2";

console.log(
  document.querySelector(FirstH2zirafos + " + ul + h2") //"i + div h2 + ul + h2 + ul + h2 + ul + h2 "
);
// const AllLi = document.querySelectorAll("i + div ul li");

for (let i = 0; i < ArrayH2.length; i++) {
  ArrayH2[i].forEach(() => {
    count++;
  });
  if (count > tempWinner) {
    tempWinner = count;
    RepeatCOunt = i;
  }
  count = 0;
}

console.log(tempWinner);

console.log(
  document.querySelector(FirstH2zirafos + Bullshit.repeat(RepeatCOunt))
    .innerText
);

//A10

const PriceH2 = document.querySelectorAll(".prices h2"); //

let ArrayPrice = [];
PriceH2.forEach((a) => {
  let text = a.innerText;
  let index = text.indexOf("eur");
  let num = text[index - 2] - 0 + text[index - 1] - 0;
  ArrayPrice.push(num);
});

console.log(Math.min(...ArrayPrice));
console.clear();
//B1

H1.innerText = "Zoo parkas";

//B2

InoSign.forEach((el) => {
  if (el.innerText == "***") {
    el.innerText = "*****";
  }
});

//B3
const plesrunailastLi = document.querySelector("#plesrunai li:last-child");
// pigesnis
plesrunailastLi.insertAdjacentHTML("afterend", "<li>Leopardas</li>");

//B4

const GyvatesFirstLi = document.querySelector("#gyvates li");

GyvatesFirstLi.insertAdjacentHTML("beforebegin", "<li>Jūrų sliekas</li>");

//B5

H2.forEach((a) =>
  a.innerText == "Žoliaėdžiai"
    ? a.insertAdjacentHTML("beforeend", " <span>Atsinaujinom</span>")
    : false
);

//B6

H2.forEach((el) => {
  if (el.innerText.includes("Gyvatės")) {
    el.innerHTML = "Gyvatės <span></span>";
  }
});

//B7
const zoliaedziai = document.querySelector("#zoliaedziai");
zoliaedziai.innerHTML = " ";
zoliaedziaiLi.forEach((el) => {
  if (el.innerText != "Laukinė kiaulė") {
    zoliaedziai.innerHTML += `<li>${el.innerText}</li>`;
  }
});

//B8

const plesrunai = document.querySelector("i + div ul + h2");
plesrunai.insertAdjacentHTML("afterend", "<h3>Neglostyti!</h3>");

//B9

const studentams = document.querySelector(".prices h2:nth-child(2)");
console.log(studentams);
studentams.insertAdjacentHTML("afterend", "<h2>Studentas 3eur</h2>");

//B10
plesrunaiLi = document.querySelectorAll("#plesrunai li");
let ArrayPlesrunai = [];
plesrunaiLi.forEach((a) => {
  if (a.innerHTML != "PATINKA") {
    ArrayPlesrunai.push(a.innerText);
  }
});
ArrayPlesrunai.sort();
console.log(ArrayPlesrunai);

plesrunaiLi.forEach((a, ind) => {
  if (a.innerHTML != "PATINKA") {
    a.innerHTML = ArrayPlesrunai[ind - 1];
  }
});

//C1

H1.style.color = "crimson";

//C2

Adress.style.color = "grey";
const SpanAdress = document.querySelector("#contacts span");
SpanAdress.style.color = "black";

//C3

H2.forEach((a) => (a.style.color = "blue"));

//C4

const patinka = document.querySelectorAll("ul li");

patinka.forEach((a) => {
  if (a.innerHTML == "PATINKA") {
    a.style.border = "1px solid black";
  }
  if (a.innerHTML == "Jūrų sliekas" || a.innerHTML == "Leopardas") {
    //C5
    a.style.color = "yellow";
    a.style.backgroundColor = "grey";
  }

  if (a.innerHTML == "Zuikis") {
    //C6
    a.style.visibility = "hidden";
  }
});

//C7

const allAnimals = document.querySelectorAll("i + div ul");

allAnimals.forEach((a) => (a.style.listStyle = "none"));

//C8

const UL = document.querySelectorAll("ul");

UL.forEach((a) => (a.style.lineHeight = "30px"));

//C9

const AtsinaujinomMelyna = document.querySelectorAll("i + div h2 span");

AtsinaujinomMelyna.forEach((a) => (a.style.color = "red"));

//C10

AtsinaujinomMelyna.forEach((a) => {
  setInterval((_) => {
    a.style.color = a.style.color == "red" ? "skyblue" : "red";
  }, 1000);
});

console.log(document.querySelector("div h2:nth-child(5)")); // kodėl taip šokinėja renkantis child. jeigu pridesiu i + div irgi neveiks
