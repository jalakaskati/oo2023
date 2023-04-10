interface Loom {
    name: string;
    sound(): void;
  }
  
  class Koer implements Loom {
    constructor(public name: string) {}
  
    sound(): void {
      console.log(`${this.name} haugub!`);
    }
  }
  
  class Kass implements Loom {
    constructor(public name: string) {}
  
    sound(): void {
      console.log(`${this.name} nurrub!`);
    }
  }
  
  const koer = new Koer("Pitsu");
  koer.sound();
  
  const kass = new Kass("Kiisu");
  kass.sound();
