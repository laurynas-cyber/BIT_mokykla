console.log("hello object");

let obj = {
  name: "antanas",
  age: 99,
};

obj.color = "red";

delete obj.age;

console.log(obj, obj.name, obj.age);

console.clear();

let A = 5;
const B = 10;

const C = {
  name: "jonas",
};

C.name = "Antanas";
console.log(A, B, C);

console.clear();

let V = 5;
let V2 = V; // priskyrimas by value

V2++;

console.log(V, V2);

let O = {
  sk: 5,
  name: "jonas",
};

let O2 = O; //priskyrimas by reference. tai yra O2 ir O tas pats objektas
// console.log(O, O2); rodys 5 bet objekto viduj bus 7

const O3 = { ...O }; // copy of value. ... yra spreado operacija. dar vienas Object.assign({}, O)

const O4 = { ...O, salt: 99 };

const O5 = { ...O, salt: 99, name: "antanas" };

const O6 = { salt: 99, name: "antanas", ...O }; // bus jonas nes paskutinis jonas

const { sk, salt } = O5; //restrukturizacija jie sk ir salt virsta kintamaisiais

console.log(sk, salt);

O.sk++;
O2.sk++;

console.log(O, O2, O3, O4);
