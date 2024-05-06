const count = document.querySelector(".count");

const input = document.querySelector("input");

let num = count.innerText;

input.addEventListener("keyup", () => {
  count.style.color = "green";
  count.innerText = parseFloat(num) + parseFloat(input.value);

  if (count.innerText == "NaN") {
    count.innerText = 1000;
    console.log("yra2");
    count.style.color = "black";
  }
});

// input.addEventListener("keyup", () => {
//   count.innerHTML = input.value.length;
// });

