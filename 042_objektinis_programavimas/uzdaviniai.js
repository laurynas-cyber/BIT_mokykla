// https://docs.google.com/document/d/1ptHMRiS6A_k3t67VV1JbuTyv5hfxoBLu1RucCJjTyl4/edit

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1 uzdv

class Kibiras1 {
  constructor() {
    this.akmenuKiekis = 0;
  }

  prideti1Akmeni() {
    this.akmenuKiekis += 1;
  }

  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
  }
  kiekPririnktaAkmenu() {
    return console.log(this.akmenuKiekis);
  }
}

const naujasKibiras = new Kibiras1();

naujasKibiras.prideti1Akmeni();
naujasKibiras.prideti1Akmeni();
naujasKibiras.pridetiDaugAkmenu(5);
naujasKibiras.pridetiDaugAkmenu(3);

naujasKibiras.kiekPririnktaAkmenu();

//3 uzdv

class Troleibusas {
  constructor() {
    this.keleiviuSkaicius = 0;
  }
  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
  }

  islipa(keleiviuSkaicius) {
    let rez = this.keleiviuSkaicius - keleiviuSkaicius;
    if (rez < 0) {
      this.keleiviuSkaicius;
    } else if (rez >= 0) {
      this.keleiviuSkaicius = rez;
    }
  }

  vaziuoja() {
    return console.log(this.keleiviuSkaicius);
  }
}

const troll = new Troleibusas();

troll.ilipa(5);

troll.islipa(1);
troll.islipa(2);
troll.ilipa(3);
troll.islipa(4);
troll.vaziuoja();

console.clear();
//2 ir 6 uzd
//2uzdv

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
    this.monetosQ = 0;
    this.banknotaiQ = 0;
  }

  ideti(kiekis) {
    if (kiekis < 2) {
      this.metaliniaiPinigai += kiekis;
      this.monetosQ++;
    } else {
      this.popieriniaiPinigai += kiekis;
      this.banknotaiQ++;
    }
  }
  skaiciuoti() {
    return console.log(this.metaliniaiPinigai + this.popieriniaiPinigai);
  }

  monetos() {
    return console.log(this.monetosQ);
  }
  banknotai() {
    return console.log(this.banknotaiQ++);
  }
}

const newWallet = new Pinigine();
newWallet.ideti(1);
newWallet.ideti(3);
newWallet.skaiciuoti();
newWallet.ideti(1);
newWallet.ideti(1);
newWallet.ideti(4);
newWallet.monetos();
newWallet.banknotai();
console.clear();

//8 uzdv

class Stikline {
  constructor(t) {
    this.turis = t;
    this.kiekis = 0;
  }

  ipilti(kiekis) {
    this.kiekis += kiekis;
    if (this.turis < this.kiekis) {
      this.kiekis = this.turis;
      return this.kiekis;
    }
  }
  stiklinejeYra() {
    return console.log(this.kiekis);
  }
  ispilti() {
    return (this.kiekis = 0);
  }
}

const naujaStikline = new Stikline(200);
const naujaStikline2 = new Stikline(150);
const naujaStikline3 = new Stikline(100);

naujaStikline.ipilti(202);
console.log(naujaStikline.turis, naujaStikline.kiekis);
naujaStikline2.ipilti(naujaStikline.kiekis);
naujaStikline2.stiklinejeYra();
naujaStikline3.ipilti(naujaStikline2.kiekis);
naujaStikline3.stiklinejeYra();
naujaStikline3.ispilti();
naujaStikline3.stiklinejeYra();

console.clear();

// 9 uzdv

class Grybas {
  constructor(valgomas, sukirmijes, svoris) {
    this.valgomas = valgomas;
    this.sukirmijes = sukirmijes;
    this.svoris = svoris;
  }
}

class Krepsys {
  constructor() {
    this.dydis = 500;
    this.prikrauta = 0;
  }

  deti(grybas) {
    if (grybas.valgomas == true && grybas.sukirmijes == false) {
      this.prikrauta = this.prikrauta + grybas.svoris;
    }
  }
}

const krepsys = new Krepsys();

do {
  let grybas = new Grybas(!!rand(0, 1), !!rand(0, 1), rand(5, 45));

  krepsys.deti(grybas);
  console.log(krepsys, grybas.valgomas, grybas.sukirmijes);
} while (krepsys.dydis > krepsys.prikrauta);
