// Liides "Kujund"
interface Kujund {
    arvutaPindala(): number;
    arvutaÜmbermõõt(): number;
  }
  
  // Klass "Ruut" (realiseerib liidest "Kujund")
  class Ruut implements Kujund {
    küljePikkus: number;
  
    constructor(küljePikkus: number) {
      this.küljePikkus = küljePikkus;
    }
  
    arvutaPindala(): number {
      return this.küljePikkus * this.küljePikkus;
    }
  
    arvutaÜmbermõõt(): number {
      return 4 * this.küljePikkus;
    }
  }
  
  // Klass "Kolmnurk" (realiseerib liidest "Kujund")
  class Kolmnurk implements Kujund {
    alus: number;
    kõrgus: number;
  
    constructor(alus: number, kõrgus: number) {
      this.alus = alus;
      this.kõrgus = kõrgus;
    }
  
    arvutaPindala(): number {
      return (this.alus * this.kõrgus) / 2;
    }
  
    arvutaÜmbermõõt(): number {
      // Eeldame, et kolmnurk on täisnurkne ja arvutame ümbermõõdu hüpotenuusi abil
      const külg1 = this.alus;
      const külg2 = this.kõrgus;
      const hüpotenuus = Math.sqrt(külg1 * külg1 + külg2 * külg2);
      return külg1 + külg2 + hüpotenuus;
    }
  }
  
  // Klass "Ristkülik" (realiseerib liidest "Kujund")
  class Ristkülik implements Kujund {
    pikkus: number;
    laius: number;
  
    constructor(pikkus: number, laius: number) {
      this.pikkus = pikkus;
      this.laius = laius;
    }
  
    arvutaPindala(): number {
      return this.pikkus * this.laius;
    }
  
    arvutaÜmbermõõt(): number {
      return 2 * (this.pikkus + this.laius);
    }
  }
  
  // Testid (kontrollivad liidese ja klasside tööd)
  function testiKujundeid() {
    const ruut = new Ruut(5);
    console.log("Test ruudu pindala:", ruut.arvutaPindala());
    console.log("Test ruudu ümbermõõt:", ruut.arvutaÜmbermõõt());
  
    const kolmnurk = new Kolmnurk(4, 3);
    console.log("Test kolmnurga pindala:", kolmnurk.arvutaPindala());
    console.log("Test kolmnurga ümbermõõt:", kolmnurk.arvutaÜmbermõõt());
  
    const ristkülik = new Ristkülik(6, 4);
    console.log("Test ristküliku pindala:", ristkülik.arvutaPindala());
    console.log("Test ristküliku ümbermõõt:", ristkülik.arvutaÜmbermõõt());
  }
  
  testiKujundeid();
  
  // Näitprogramm (kasutab klasside vastavaid liideseid)
  function näitaKujundiAndmeid(kujund: Kujund) {
    if (kujund instanceof Ruut) {
      console.log("Ruudu andmed:");
    } else if (kujund instanceof Kolmnurk) {
      console.log("Kolmnurga andmed:");
    } else if (kujund instanceof Ristkülik) {
      console.log("Ristküliku andmed:");
    } else {
      console.log("Tundmatu kujundi andmed:");
    }
  
    console.log("Pindala:", kujund.arvutaPindala());
    console.log("Ümbermõõt:", kujund.arvutaÜmbermõõt());
  }
  
  
  const ruut = new Ruut(8);
  const kolmnurk = new Kolmnurk(5, 4);
  const ristkülik = new Ristkülik(7, 3);
  
  näitaKujundiAndmeid(ruut);
  näitaKujundiAndmeid(kolmnurk);
  näitaKujundiAndmeid(ristkülik);
  
