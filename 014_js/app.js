function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let number = 0;

for (let i = 0; i < 100; i++) {
  number++;
  console.log(number);
}

for (let i = 100; i >= 1; i--) {
  console.log(i);
}

console.clear();

let number1 = 0;

for (let i = 0; i <= 100; i++) {
  if (number1 % 2 === 0) {
    console.log(number1);
  }
  number1++;
}
console.clear();

let string = " ";
let number2 = 1;

for (let i = 0; i < 9; i++) {
  string = string + number2;

  if (i == 8) {
    console.log(string);
    string = string - 0;
    string = string + 3;
  }
}

console.log(string);
console.clear();

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("fizz");
  } else console.log(i);
}

console.clear();

let num1 = 0;

for (let i = 1; i <= 100; i++) {
  num1 = num1 + i;
}

console.log(num1);

let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    sum = sum + i;
    console.log(i);
  }
}

console.log(sum);

console.clear();
