//https://docs.google.com/document/d/1ZILEPtnrTzvWCz0kP2-UKikyQeMhbwqDGLMOkdmU2Pw/edit?usp=sharing

// A1

const H1 = document.querySelector("h1");

console.log(H1);

//A2

const Adress = document.querySelector("#contacts").innerText;

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

const H2 = document.querySelectorAll("i + div h2");

H2.forEach((el) => {
  if (el.innerText.includes("Gyvatės")) {
    el.innerText = "Gyvatės";
  }
  console.log(el.innerText);
});

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

console.log(document.querySelector("div h2:nth-child(1)")); // kodėl taip šokinėja renkantis child. jeigu pridesiu i + div irgi neveiks

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

console.log(Adress);

//B3
const plesrunaiLi = document.querySelectorAll("#plesrunai li");
const Lastli = document.querySelector(".test ul li:last-child"); // pigesnis
Lastli.insertAdjacentHTML("afterend", "<li>Wolf</>");