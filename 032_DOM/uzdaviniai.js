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
  html = `<input type="checkbox" name="${a.name}"  value="${a.name}"></input><div >${a.name}</div>`;
  body.insertAdjacentHTML("beforeend", html);
  if (a.name == "five") {
    five = document.querySelector('[name="five"]');
  } else if (a.name == "seven") {
    seven = document.querySelector('[name="seven"]');
  } else if (a.name == "nine") {
    nine = document.querySelector('[name="nine"]');
  }
});

const allFigures = document.querySelectorAll("input + div");

document.querySelectorAll('[type="checkbox"]').forEach((c, ind) => {
  c.dataset.a = JSON.stringify(figures[ind]);
  c.addEventListener("click", (_) => {
    let obj = JSON.parse(c.dataset.a);
    allFigures.forEach((f) => {
      if (f.innerText == c.value) {
        f.classList.add("" + obj.figure + "");
        f.style.borderColor = obj.color;
      }
    });
  });
});

//8 uzdv
console.clear();

const div = document.createElement("div");
div.classList.add("allDivs");
div.style.display = "flex";

figures.forEach((e) => {
  html = `<div class="${e.figure}">${e.id}</div>`;
  div.insertAdjacentHTML("beforeend", html);
});

body.appendChild(div);

const shapeDivsAll = document.querySelectorAll(".allDivs div");

console.log(shapeDivsAll);

shapeDivsAll.forEach((e) => {
  e.style.display = "none";
});

document.querySelectorAll('[type="checkbox"]').forEach((c, ind) => {
  c.dataset.a = JSON.stringify(figures[ind]);

  c.addEventListener("click", (event) => {
    let obj = JSON.parse(c.dataset.a);
    shapeDivsAll.forEach((e) => {
      if (c.checked && ind == parseFloat(e.innerText) - 1) {
        if (e.classList.contains("triangle")) {
          console.log("yes");
          e.style.display = "inline";
          e.style.borderColor = obj.color;
          e.style.borderRight = "50px solid transparent";
          e.style.borderLeft = "50px solid transparent";
        } else {
          e.style.borderColor = obj.color;
          e.style.display = "inline";
        }
      } else if (!c.checked && ind == parseFloat(e.innerText) - 1) {
        e.style.display = "none";
      }
    });
  });
});

//9uzdv

shapeDivsAll.forEach((e) => {
  e.addEventListener("click", (_) => {
    e.style.display = "none";
    document.querySelectorAll('[type="checkbox"]').forEach((c, ind) => {
      if (c.checked && ind == parseFloat(e.innerText) - 1) {
        c.checked = false;
      }
    });
  });
});

//10uzdv

let lengthArr;
let newArr = [];

shapeDivsAll.forEach((e, ind) => {
  newArr.push(e.innerText);
});
newArr.reverse();
console.log(newArr);


let ShapeRemove = () => {
  let num = 0;

  return shapeDivsAll.forEach((e, ind) => {
    if (shapeDivsAll[shapeDivsAll.length - 1 - num].style.display == "inline") {
      console.log(shapeDivsAll[shapeDivsAll.length - 1 - num].innerText);
      return (shapeDivsAll[shapeDivsAll.length - 1 - num].style.display =
        "none");

 
    } else num++;

  });
};


// let ShapeRemove = () => {
//   let num = 0;

//   return shapeDivsAll.forEach((e, ind) => {
//     if (shapeDivsAll[shapeDivsAll.length - 1 - num].style.display == "inline") {
//       console.log(shapeDivsAll[shapeDivsAll.length - 1 - num].innerText);
//       return (shapeDivsAll[shapeDivsAll.length - 1 - num].style.display =
//         "none");

 
//     } else num++;

//   });
// };

// let ShapeRemove = () => {
//   let num = 0;

//   shapeDivsAll.forEach((e, ind) => {
//     if (newArr[num] == e.innerText && e.style.display == "inline") {
//       e.style.display = "none";
//     }
//     num++;
//     console.log(num);
//   });
// };

// console.log(Math.max(...newArr));

setInterval(ShapeRemove, 10000);
