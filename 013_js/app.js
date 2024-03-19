function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("hello");

let a = rand(5, 10);
let hi = " labas";
let string = " ";

for (let i = 0; i < a; i++) {
  string = string + " " + hi;
  if (i == a - 1) {
    console.log(string);
  }
}

console.clear();

for (let u = 0; u < 5; u++) {
  console.log(rand(0, 4));
}
