//1uzdv https://docs.google.com/document/d/1ZILEPtnrTzvWCz0kP2-UKikyQeMhbwqDGLMOkdmU2Pw/edit

const figures = [
  { id: 1, name: "one", color: "red", figure: "circle" },
  { id: 2, name: "two", color: "green", figure: "triangle" },
  { id: 3, name: "three", color: "blue", figure: "square" },
  { id: 4, name: "four", color: "yellow", figure: "circle" },
  { id: 5, name: "five", color: "orange", figure: "triangle" },
  { id: 6, name: "six", color: "gray", figure: "square" },
  { id: 7, name: "seven", color: "black", figure: "circle" },
  { id: 8, name: "eight", color: "brown", figure: "triangle" },
  { id: 9, name: "nine", color: "skyblue", figure: "square" },
];

console.log(figures);

const select = document.createElement("select");
let body = document.querySelector("body");

body.appendChild(select);

let html = "";
figures.forEach((a) => {
  html += `<option value="${a.color}">${a.color}</option>`;
});
select.innerHTML = html;
console.log(select);

//2uzdv
const h1 = document.createElement("h1");
body.appendChild(h1);

console.log(body);
const valueRed = document.querySelector("select").value;

h1.innerText = valueRed;
select.addEventListener("click", (_) => {
  h1.innerText = document.querySelector("select").value;
});

//3uzdv
const ButtonGored = document.createElement("button");
ButtonGored.innerText = "Go Red";
body.appendChild(ButtonGored);

ButtonGored.addEventListener("click", (_) => {
  document.querySelector("select").value = valueRed;
  h1.innerText = valueRed;
});

//4uzdv

html = "";
let six;
figures.forEach((a) => {
  html = `<div><input type="radio" id="${a.id}" name="lol" value="${a.name}">${a.name}</input></div>`;
  body.insertAdjacentHTML("beforeend", html);
  if (a.name == "six") {
    six = document.querySelector('[name="six"]');
  }
});

console.log(six);
//5uzdv

const h2 = document.createElement("h2");
h2.innerText = "lol";
body.appendChild(h2);

document.querySelectorAll('[type="radio"]').forEach((c) => {
  c.addEventListener("click", (_) => {
    h2.innerText = c.id;
  });
});

//6uzdv

body.insertAdjacentHTML("beforeend", "<h3>0</h3>");
body.insertAdjacentHTML("beforeend", "<h3>0</h3>");

const h3sum = document.querySelector("h3");
const h3times = document.querySelector("h3+h3");
console.log(h3times);

document.querySelectorAll('[type="radio"]').forEach((c) => {
  c.addEventListener("click", (_) => {
    h3sum.innerText = parseFloat(h3sum.innerText) + parseFloat(c.id);
    h3times.innerText = parseFloat(h3times.innerText) + 1;
  });
});

//7 uzdv

html = "";
let five;
let seven;
let nine;
figures.forEach((a) => {
  html = `<input type="checkbox" name="${a.name}"  value="${a.name}"></input><div class="figures" name="${a.name}">lol</div>`;
  body.insertAdjacentHTML("beforeend", html);
  if (a.name == "five") {
    five = document.querySelector('[name="five"]');
  } else if (a.name == "seven") {
    seven = document.querySelector('[name="seven"]');
  } else if (a.name == "nine") {
    nine = document.querySelector('[name="nine"]');
  }
});

const allFigures = document.querySelectorAll(".figures");
console.log(allFigures);
document.querySelectorAll('[type="checkbox"]').forEach((c, ind) => {
  c.dataset.a = JSON.stringify(figures[ind]);
  
});

// const zoo = document.querySelector(".zoo");

// zoo.dataset.a1 = animal1; //padeda animal i zoo div

// const readAnimal1 = zoo.dataset.a1;

// console.log(readAnimal1, typeof readAnimal1);

// zoo.dataset.a2 = animalSvoris;
// zoo.dataset.a3 = JSON.stringify(animal3);
// const readAnimal2 = parseFloat(zoo.dataset.a2);
// const readAnimal3 = JSON.parse(zoo.dataset.a3);
// console.log(readAnimal2, typeof readAnimal2);
// console.log(readAnimal3, typeof readAnimal3, readAnimal3.w);
