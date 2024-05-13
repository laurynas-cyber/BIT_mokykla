// https://docs.google.com/document/d/1ptHMRiS6A_k3t67VV1JbuTyv5hfxoBLu1RucCJjTyl4/edit

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//8 uzdv

class Stikline {
  constructor(t) {
    this.turis = t;
    this.kiekis = 0;
  }

  ipilti(kiekis) {
    // this.kiekis = min(this.turis, kiekis + this.kiekis); ///kitas variantas
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
    if (kiekis <= 2) {
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
// 6

class Pinigine2 {
  constructor() {
    this.popieriniaiPinigai = [];
    this.metaliniaiPinigai = [];
  }

  ideti(kiekis) {
    if (kiekis <= 2) {
      this.metaliniaiPinigai.push(kiekis);
    } else {
      this.popieriniaiPinigai.push(kiekis);
    }
  }
  skaiciuoti() {
    return console.log(
      `Piniginej yra  ${this.banknotai()} + ${this.monetos()}`
    );
  }

  monetos() {
    const kiekis = this.metaliniaiPinigai.length;
    const visosuma = this.metaliniaiPinigai.reduce((suma, m) => suma + m, 0);
    return `Monetu kiekis ${kiekis}, o suma ${visosuma}`;
  }
  banknotai() {
    const kiekis = this.popieriniaiPinigai.length;
    const visosuma = this.popieriniaiPinigai.reduce((suma, m) => suma + m, 0);
    return `Monetu kiekis ${kiekis}, o suma ${visosuma}`;
  }
}

const newWallet2 = new Pinigine2();

console.clear();

//5uzdv

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
  }
  idetiSureli(kiekis) {
    if (this.turinys.has("Surelis")) {
      this.turinys.set("Surelis", this.turinys.get("Surelis") + kiekis);
    } else this.turinys.set("Surelis", kiekis);
  }

  idetiPieno(kiekis) {
    if (this.turinys.has("Pienas")) {
      this.turinys.set("Pienas", this.turinys.get("Pienas") + kiekis);
    } else this.turinys.set("Pienas", kiekis);
  }

  idetiDuonos(kiekis) {
    if (this.turinys.has("Duona")) {
      this.turinys.set("Duona", this.turinys.get("Duona") + kiekis);
    } else this.turinys.set("Duona", kiekis);
  }

  krepselioTurinys() {
    console.log(this.turinys);
  }
}

const PirkMap = new PirkiniuKrepselis();

PirkMap.idetiDuonos(2);
PirkMap.idetiPieno(1);
PirkMap.idetiSureli(6);
PirkMap.idetiSureli(6);
PirkMap.idetiPieno(1);
PirkMap.idetiDuonos(2);
PirkMap.krepselioTurinys();

console.clear();

//3 ir 4 uzdv

class Troleibusas {
  static VisiKeleiviai = 0;

  static keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log(this.VisiKeleiviai);
  }

  static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    this.VisiKeleiviai = this.VisiKeleiviai + keleiviuSkaicius;
  }

  constructor() {
    this.keleiviuSkaicius = 0;
  }
  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
    this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
  }

  islipa(keleiviuSkaicius) {
    let rez = this.keleiviuSkaicius - keleiviuSkaicius;
    if (rez < 0) {
      this.constructor.bendrasKeleiviuSkaicius(-this.keleiviuSkaicius);
      this.keleiviuSkaicius = 0;
    } else if (rez >= 0) {
      this.keleiviuSkaicius = rez;
      this.constructor.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
    }
  }

  vaziuoja() {
    return console.log(this.keleiviuSkaicius);
  }
}

const troll = new Troleibusas();
const troll2 = new Troleibusas();
const troll3 = new Troleibusas();

troll.ilipa(5);
troll.islipa(1);

troll2.ilipa(3);
troll2.islipa(2);
troll3.ilipa(2);
troll3.islipa(4);
troll.vaziuoja();
Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();
console.clear();

//1uzdv
class Kibiras1 {
  static visasAkmenuKiekis = 0;
  static akmenuSkaiciusVisuoseKibiruose() {
    console.log(this.visasAkmenuKiekis);
  }

  constructor() {
    this.akmenuKiekis = 0;
  }

  prideti1Akmeni() {
    this.akmenuKiekis += 1;
    this.constructor.visasAkmenuKiekis++;
  }

  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
    this.constructor.visasAkmenuKiekis += kiekis;
  }
  kiekPririnktaAkmenu() {
    return console.log(this.akmenuKiekis);
  }
  ispilti() {
    this.constructor.visasAkmenuKiekis -= this.akmenuKiekis;
    this.akmenuKiekis = 0;
  }

  perpilti() {
    let rez = this.akmenuKiekis;
    this.akmenuKiekis = 0;
    return rez;
  }
}

const naujasKibiras = new Kibiras1();
const naujasKibiras2 = new Kibiras1();
const naujasKibiras3 = new Kibiras1();

naujasKibiras.prideti1Akmeni();
naujasKibiras.prideti1Akmeni();
naujasKibiras.pridetiDaugAkmenu(5);
naujasKibiras.pridetiDaugAkmenu(3);
naujasKibiras.kiekPririnktaAkmenu();

naujasKibiras2.prideti1Akmeni();
naujasKibiras2.pridetiDaugAkmenu(5);
naujasKibiras3.pridetiDaugAkmenu(3);
naujasKibiras.ispilti();
// console.log(naujasKibiras.perpilti());

Kibiras1.akmenuSkaiciusVisuoseKibiruose();
