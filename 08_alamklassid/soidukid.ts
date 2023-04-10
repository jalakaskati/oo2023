abstract class Vehicle {
    constructor(public brand: string, public model: string) {}
  
    abstract startEngine(): void;
    abstract stopEngine(): void;
  }
  
  class Car extends Vehicle {
    constructor(public brand: string, public model: string, private engineStarted: boolean = false) {
      super(brand, model);
    }
  
    startEngine(): void {
      this.engineStarted = true;
      console.log(`The ${this.brand} ${this.model} mootor käivitati.`);
    }
  
    stopEngine(): void {
      this.engineStarted = false;
      console.log(`The ${this.brand} ${this.model} mootor seiskus.`);
    }
  
    drive(): void {
      if (this.engineStarted) {
        console.log(`The ${this.brand} ${this.model} sõidab.`);
      } else {
        console.log(`The ${this.brand} ${this.model} mootor tuleb käivitada.`);
      }
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(public brand: string, public model: string, private engineStarted: boolean = false) {
      super(brand, model);
    }
  
    startEngine(): void {
      this.engineStarted = true;
      console.log(`The ${this.brand} ${this.model} mootor käivitati.`);
    }
  
    stopEngine(): void {
      this.engineStarted = false;
      console.log(`The ${this.brand} ${this.model} mootor seiskus.`);
    }
  
    ride(): void {
      if (this.engineStarted) {
        console.log(`The ${this.brand} ${this.model} sõidab.`);
      } else {
        console.log(`The ${this.brand} ${this.model} mootor tuleb käivitada.`);
      }
    }
  }
  
  const car = new Car("Toyota", "Corolla");
  car.startEngine();
  car.drive();
  car.stopEngine();
  
  const motorcycle = new Motorcycle("Harley-Davidson", "Sportster");
  motorcycle.startEngine();
  motorcycle.ride();
  motorcycle.stopEngine();
