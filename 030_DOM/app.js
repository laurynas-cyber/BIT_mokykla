console.log("hi");

const obj = {
  smartAnimal32: "Fox",
  funnyAnimal88: "Racoon",
  bigAnimal105: "Wolf",
};

const vz = document.querySelector("a");

vz.addEventListener("click", (e) => {
  e.preventDefault(); //jeigu tagas submit, button, a turi mygtuko veikima tai preventDefault sustabdo ta veikima
  console.log("valio");
});

document.querySelector("button.select").addEventListener("click", (_) => {
  const value = document.querySelector("select").value;
  console.log(value);
});

document.querySelector("button.cb").addEventListener("click", (_) => {
  document.querySelectorAll('[type="checkbox"]').forEach((c) => {
    if (c.checked) {
      // su chekboxu savybe checked
      console.log(c.value);
    }
  });
});

document.querySelector("button.ra").addEventListener("click", (_) => {
  document.querySelectorAll('[type="radio"]').forEach((c) => {
    if (c.checked) {
      console.log(c.value);
    }
  });
});

document.querySelector("button.color").addEventListener("click", (_) => {
  const value = document.querySelector('[type="color"]').value;
  document.querySelector(".box-color").style.backgroundColor = value;
});

document.querySelector("button.ta").addEventListener("click", (_) => {
  const value = document.querySelector("textarea").value;
  console.log(value);
});

//uzdv
const colors = ["skyblue", "orange", "crimson", "gray"];

let colorsSelect = document.querySelector(".my-colors");

let text;

for (let i = 0; i < colors.length; i++) {
  text += `<option value="${colors[i]}">${colors[i]}</option>`; 
}

colorsSelect.innerHTML = "<select>" + text + "</select>";

document.querySelector(".go").addEventListener("click", (_) => {
  const value = document.querySelector(".my-colors select").value;
  document.querySelector(".go").style.backgroundColor = value;
});

let h3 = document.querySelector("h3").innerText;
let sum = 0;
document.querySelector(".add").addEventListener("click", (_) => {
  document.querySelectorAll('.digits [type="radio"]').forEach((c) => {
    if (c.checked) {
      let num = parseInt(c.value);

      sum = sum + num;

      document.querySelector("h3").innerText = sum;
      console.log(sum);
    }
  });
});
