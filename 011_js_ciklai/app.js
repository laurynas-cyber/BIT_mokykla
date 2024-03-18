console.log("ciklai");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.clear();

let word = "hello Mr Racoon";

for (let i = 0; i < word.length; i += 2) {
  console.log(word[i] + (word[i + 1] !== undefined ? word[i + 1] : " "));
}

console.clear();
for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}

console.clear();

console.log(
  "%cRACOON",
  "color: skyblue; background-color: crimson; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold; text-align: center; text-shadow: 2px 2px 2px black;"
);

for (let i = 0; i < word.length; i++) {
  if (i % 2 === 0) {
    console.log("%c" + word[i], "color: blue");
  } else {
    console.log("%c" + word[i], "color: red");
  }
}
console.clear();

let moneta;

do {
  moneta = rand(0, 1) ? "h" : "s";

  console.log(moneta);
} while (moneta != "s");

// lygibes pakeičiam i nelygybes <>

/*
== ---- !=
=== --- !==
> ---- <=
< ---- >=
|| --- &&
*/

console.clear();

let r;
r = rand(20, 300);

console.log(r, "gimtadienis");

while (r < 200) {
  r = r + rand(20, 50);
  console.log(r);
}

console.clear();
