class Auto {
  registreerimisnumber: string;
  mark: string;
  mudel: string;

  constructor(registreerimisnumber: string, mark: string, mudel: string) {
    this.registreerimisnumber = registreerimisnumber;
    this.mark = mark;
    this.mudel = mudel;
  }
}

class Autopesula {
  hoidla: Auto[];

  constructor() {
    this.hoidla = [];
  }

  võtaVastuAuto(auto: Auto) {
    this.hoidla.push(auto);
    console.log(`Auto ${auto.registreerimisnumber} on vastu võetud.`);
  }

  peseAuto(auto: Auto) {
    console.log(`Auto ${auto.registreerimisnumber} on pestud.`);
  }

  tagastaAuto(auto: Auto) {
    const autoIndex = this.hoidla.findIndex(a => a.registreerimisnumber === auto.registreerimisnumber);
    if (autoIndex !== -1) {
      this.hoidla.splice(autoIndex, 1);
      console.log(`Auto ${auto.registreerimisnumber} on tagastatud.`);
    } else {
      console.log(`Auto ${auto.registreerimisnumber} ei ole autopesulas.`);
    }
  }
}

// Näide rakenduse kasutamisest
const pesula = new Autopesula();

const auto1 = new Auto("123ABC", "Toyota", "Corolla");
const auto2 = new Auto("456DEF", "Honda", "Civic");

pesula.võtaVastuAuto(auto1);
pesula.võtaVastuAuto(auto2);

pesula.peseAuto(auto1);
pesula.tagastaAuto(auto2);
