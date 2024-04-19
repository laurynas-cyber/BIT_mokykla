const container = document.querySelector(".container");
const btn = document.querySelector("button");
const hex = document.querySelector("span");
const body = document.querySelector("body");

const generateHexColor = () => {
  const RandomColor = Math.random().toString(16).substring(2, 8);
  //   const RandomColor = Math.floor(Math.random() * 10).toString(16);
  container.style.backgroundColor = "#" + RandomColor;
  hex.innerText = "#" + RandomColor;
  console.log(RandomColor);
};

btn.addEventListener("click", generateHexColor);
body.addEventListener("mousewheel", generateHexColor);
