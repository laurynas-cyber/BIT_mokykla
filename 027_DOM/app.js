console.log("welcome to Dom3");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", (_) => {
  let animals = document.querySelectorAll(".test ul li");
  animals.forEach((el) => {
    console.log(el.innerText);
  });
  //   const NewAnimal = (document.querySelector(".test ul").innerHTML +=
  //     "<li>Beaver</li>");
  //   const ul = document.querySelector(".test ul");
  //   ul.innerHTML += "<li>Beaver</li>"; // brangus dejimas
  const Lastli = document.querySelector(".test ul li:last-child"); // pigesnis
  Lastli.insertAdjacentHTML("afterend", "<li>Wolf</>");
  animals = document.querySelectorAll(".test ul li");
  animals.forEach((el, ind) => {
    if (ind % 2 == 0) {
      el.style.color = "blue";
    }
    if (ind % 2 != 0) {
      el.style.fontSize = "40px";
    }
  });

  animals.forEach((a, i) => {
    if (i == 0 || i == 2) {
      a.innerText += "----*";
    }
  });

  const button = document.querySelector("button");

  button.addEventListener("click", (e) => {
    console.log("kuku");
  });
  button.addEventListener("mouseenter", (e) => {
    console.log("apa", e.target);
  });

  let red = document.querySelector(".red");

  red.addEventListener("click", (_) => {
    if (red.dataset.squareColor == "blue") {
      red.dataset.squareColor = "red";
      red.style.backgroundColor = "#dc143c66";
      red.style.borderColor = "#dc143c";
    } else {
      red.dataset.squareColor = "blue";
      red.style.backgroundColor = "#87ceeb66";
      red.style.borderColor = "#87ceeb";
    }
  }); //uzdavinys skaiciuotis turi numeriai viduj kvadrato, double klikas nusinulina
});
