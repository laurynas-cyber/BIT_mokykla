function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", (_) => {
  const africa = [
    "Zebras",
    "Liūtas",
    "",
    "Raganosis",
    "",
    "Raganosis",
    "Begemotas",
  ];
  const australia = ["Kengūra", "Ančiasnapis", "Dingo", "Atsirado", "Strutis"];

  //1uzdv
  const h2 = document.querySelector("h2");
  const h2Antras = document.querySelector("h2+h2");
  const ButtonH2 = document.querySelector(".h2btn");
  let Num;
  function generation() {
    num = rand(1, 6);
    h2.innerText = num;
    num = rand(1, 6);
    h2Antras.innerText = num;
    if (h2.innerText == h2Antras.innerText) {
      h2.style.color = "red";
      h2Antras.style.color = "red";
    } else {
      h2.style.color = "black";
      h2Antras.style.color = "black";
    }
  }

  generation();

  ButtonH2.addEventListener("click", (_) => {
    generation();
  });

  //2uzdv
  let h3 = document.querySelector("h3");
  const h3Button = document.querySelector(".h3btn");

  let numArray = [];
  let numRand;
  let sum = 0;
  h3Button.addEventListener("click", (_) => {
    numRand = rand(1, 10);
    sum += numRand;
    h3.innerText = sum;
    numArray.push(numRand);

    console.log(numArray, sum);
  });

  //3uzdv

  let Ul = document.querySelector("ul");
  africa.forEach((a) => {
    if (a !== "") {
      let text = document.createTextNode(`${a}`);
      let li = document.createElement("li");
      li.appendChild(text);
      Ul.appendChild(li);
    }
  });

  //4uzdv

  const a1 = document.querySelector(".a1");
  const a2 = document.querySelector(".a2");
  const btnMinus = document.querySelector(".minus");
  const btnPlus = document.querySelector(".plus");
  let h5 = document.querySelector("h5");

  btnMinus.addEventListener("click", (_) => {
    const v1 = a1.value;
    const v2 = a2.value;
    let rez = parseFloat(v1) - parseFloat(v2);
    h5.innerText = rez;
  });

  btnPlus.addEventListener("click", (_) => {
    const v1 = a1.value;
    const v2 = a2.value;
    let rez = parseFloat(v1) + parseFloat(v2);
    h5.innerText = rez;
  });

  //5 uzdv

  const AustraliaUl = document.querySelector(".australia");
  let textA = "";
  let dingo;
  australia.forEach((a) => {
    textA += `<li>${a}</li>`;
    AustraliaUl.innerHTML = textA;
    if (a == "Dingo") {
    
      dingo = document.querySelector(".australia li");
      dingo.classList.add("blue"); //neveikia. reikia daryti su create element , append child ir t.t. nebera laiko :)
      dingo.style.color = "blue"; //neveikia
      console.log("yra");
    }
  });
  console.log(dingo);


  
});
