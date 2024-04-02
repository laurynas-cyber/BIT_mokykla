console.log("hello");

function gabalas() {
  console.log("----");
}

gabalas();

function dashBlue() {
  for (let i = 0; i < 10; i++) {
    console.log("%c-----", "color:blue");
  }
}

dashBlue();

function sum(a, b) {
  let rez = a + b;
  console.log(rez);
}

sum(5, 7);

function lol(a) {
  let rez = a * 6;
  console.log(rez);
}

lol(5);

function sandauga(a, y = 6) {
  let rez = a * y;
  console.log(rez);
}

sandauga(5);

console.clear();

function megaSum(...list) {
  console.log(list);
  let rez = 0;
  for (let i = 0; i < list.length; i++) {
    rez += list[i];
  }
  console.log(rez);
}

megaSum(4, 5, 7);

function kvadratu(x) {
  return x * x;
}

console.log(kvadratu(5));

function multiAndSUm(a, b) {
  let rez = a * b;
  let u = a + b;
  return [rez, u];
}

const [Y, o] = multiAndSUm(4, 5);
console.log(Y, o);

console.clear();
