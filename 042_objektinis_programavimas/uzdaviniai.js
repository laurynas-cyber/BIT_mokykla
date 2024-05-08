// https://docs.google.com/document/d/1ptHMRiS6A_k3t67VV1JbuTyv5hfxoBLu1RucCJjTyl4/edit

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
    constructor(){
        
    }
}
