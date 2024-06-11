console.log(document);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", (_) => {
  const div1 = document.querySelector("div");
  const div2 = document.querySelector(".ate");
  const h2Get = document.querySelector("h2 + h2");
  const I = document.querySelector("span i + i");
  console.log(div1, div2);
  console.log(h2Get);
  console.log(I);

  let textInside = I.innerText;

  console.log(textInside);

  textInside += "-------";

  I.innerText = textInside;

  h2Get.innerText = "Pakeistas";

  const H3du = document.querySelector("h3 + h3");
  H3du.innerText = "du";
  document.querySelector("span + h3").innerText = "vienas";

  const valio = document.querySelector(".valio div");

  console.log(valio.innerHTML);

  valio.innerHTML = "<b>888</b>";

  document.querySelector("ul").innerHTML = "<li>Pirmasis</li>";

  const ol = document.querySelector("ol");

  //   ol.innerHTML = "<li>zuikis</li><li>puikis</li>";

  ol.innerHTML = `
  <li>zuikis</li>
  <li>puikis</li>`;

  const big = document.querySelector(".big");

  let z = "";

  for (let i = 0; i < 10; i++) {
    z += "<li>zuikis</li>";
  }

  big.innerHTML = z;

  const random = document.querySelector(".random");

  let k = "";

  for (let i = 0; i < 10; i++) {
    num = rand(1, 99);
    k += "<li>" + num + "</li>";
  }
  random.innerHTML = k;


});
