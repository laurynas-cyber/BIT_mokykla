//https://docs.google.com/document/d/18fn5fVSlDmZGYl6UiANbpeMzg-UYAn5PWm0KZf05dlQ/edit

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let saskaitos = [];

for (let i = 0; i < 100; i++) {
  saskaitos.push({});
  if (i < 9) {
    saskaitos[i].number = "INV00" + (i + 1);
  } else if (i > 98) {
    saskaitos[i].number = "INV" + (i + 1);
  } else saskaitos[i].number = "INV0" + (i + 1);
  saskaitos[i].products = [];
  saskaitos[i].products.length = rand(1, 10);

  let sumProductsTotal = 0;
  for (let j = 0; j < saskaitos[i].products.length; j++) {
    let P = rand(1, 100);
    let AM = rand(1, 20);
    saskaitos[i].products[j] = {};
    saskaitos[i].products[j].title = saskaitos[i].products.length;
    saskaitos[i].products[j].price = P.toFixed(2);
    saskaitos[i].products[j].amount = AM;
    saskaitos[i].products[j].total = P * AM;
    sumProductsTotal = sumProductsTotal + saskaitos[i].products[j].total;
  }
  saskaitos[i].total = sumProductsTotal;
  saskaitos[i].vat = (sumProductsTotal / 1.21).toFixed(2);
}

console.table(saskaitos);
