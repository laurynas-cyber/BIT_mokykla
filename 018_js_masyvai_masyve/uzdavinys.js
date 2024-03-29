//https://docs.google.com/document/d/18fn5fVSlDmZGYl6UiANbpeMzg-UYAn5PWm0KZf05dlQ/edit

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let saskaitos = [];
const products = [
  "Dviratis",
  "Triratis",
  "Žvakidė",
  "Stalas",
  "Kėdė",
  "Knygų lentyna",
  "Paveikslas su rėmu",
  "Veidrodis",
  "Keturių vietų palapinė",
  "Pripučiama valtis",
  "Meškerė karosams gaudyti",
  "Planšetė",
  "Pastatoma lempa",
  "Vazonas",
  "Baterijų pakrovėjas",
  "Pagalvių komplektas",
  "Oro drėkintuvas",
  "Oro sausintuvas",
  "Kavinukas elektrinis",
  "Kilimas 2 X 3 metrų",
  "Kilimėlis kojoms valyti",
  "Užuolaidos",
  "Vėjo malūnas",
  "Dažai sienoms",
  "Dažai luboms",
  "Medinė dėžė",
];

for (let i = 0; i < 100; i++) {
  saskaitos.push({});
  if (i < 9) {
    saskaitos[i].number = "INV00" + (i + 1);
  } else if (i > 98) {
    saskaitos[i].number = "INV" + (i + 1);
  } else saskaitos[i].number = "INV0" + (i + 1);
  saskaitos[i].products = [];
  // saskaitos[i].products.length = rand(1, 10);

  let sumProductsTotal = 0;
  for (let j = 0; j < rand(1, 10); j++) {
    let P = rand(1, 100);
    let AM = rand(1, 20);
    let TitleRand = rand(0, products.length);
    saskaitos[i].products[j] = {};
    saskaitos[i].products[j].title = products[TitleRand];
    saskaitos[i].products[j].price = P.toFixed(2);
    saskaitos[i].products[j].amount = AM;
    saskaitos[i].products[j].total = P * AM;
    sumProductsTotal = sumProductsTotal + saskaitos[i].products[j].total;
  }
  saskaitos[i].total = sumProductsTotal;
  saskaitos[i].vat = sumProductsTotal * 0.21; // kodel neina toFixed
  saskaitos[i].vat.toFixed(2);
  saskaitos[i].grandTotal = (sumProductsTotal + saskaitos[i].vat).toFixed(2);
}

console.table(saskaitos);

//B dalis

let productsNameSum = 0;

for (let i = 0; i < saskaitos.length; i++) {
  console.log(saskaitos[i].number, saskaitos[i].grandTotal);
}

for (let k = 0; k < products.length; k++) {
  let tempName = products[k];
  let productsTitleAmount = 0;
  let productsTotalsum = 0;
  for (let i = 0; i < saskaitos.length; i++) {
    let tempSaskaita = saskaitos[i];

    for (let j = 0; j < tempSaskaita.products.length; j++) {
      if (tempSaskaita.products[j].title == tempName) {
        productsTitleAmount += tempSaskaita.products[j].amount;
        productsTotalsum += tempSaskaita.products[j].total;
      }
    }
  }
  console.log(
    tempName,
    "-",
    "bendras kiekis:",
    productsTitleAmount,
    "Bendra suma:",
    productsTotalsum
  );
}
