class Tevas {
  constructor() {
    this.pinigai = 5000;
    this.religija = "+++";
  }

  scrolinti() {
    console.log("facebook");
  }
}

class Vaikas extends Tevas {
  //extendina Tevo klase Vaike
  //privaciu savybiu nepaveldi. Galima extendinti tiktai viena kalse. Statiniu paveldija. Gaima sukurti ir seneli

  constructor() {
    super(); //extends peleidzia extendenamu klases cosntruktorius
    this.islaidos = 1000;
    this.religija = "---"; // Vaiko religija overwritina tevo religija.
  }

  scrolinti() {
    console.log("TikTOka");
  }
}

const vaikas = new Vaikas();

vaikas.scrolinti();
vaikas.religija;

console.log(vaikas);
