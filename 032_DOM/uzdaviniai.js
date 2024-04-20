//1uzdv

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
  html = `<div><input type="radio" name="${a.name}" value="${a.name}">${a.name}</input></div>`;
  body.insertAdjacentHTML("beforeend", html);
  if (a.name == "six") {
    six = document.querySelector('[name="six"]');
  }
});

//5uzdv

const h2 = document.createElement("h2");
h2.innerText = "lol";
body.appendChild(h2);

document.querySelectorAll('[type="radio"]').forEach((c) => {
  c.addEventListener("click", (_) => {
    h2.innerText = c.value;
  });
});

// document.querySelector("button.ra").addEventListener("click", (_) => {
//     document.querySelectorAll('[type="radio"]').forEach((c) => {
//       if (c.checked) {
//         console.log(c.value);
//       }
//     });
//   });
