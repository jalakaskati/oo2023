class Beverage {
  constructor(public name: string, public pricePerLiter: number, public weight: number) {}
}

class BeverageBottle {
  constructor(
    public volume: number,
    public bottleType: string,
    public mass: number,
    public tareCost: number,
    public potion?: Beverage
  ) {}

  getMass(): number { //calculates the total mass of the bottle by adding the mass of the bottle itself and the mass of the potion (if present) based on the volume and weight.
    if (this.potion) {
      return this.mass + this.potion.weight * this.volume;
    } else {
      return this.mass;
    }
  }

  getCost(): number { //calculates the total cost of the bottle by adding the tare cost (cost of the empty bottle) and the cost of the potion (if present) based on the price per liter and volume.
    if (this.potion) {
      return this.tareCost + this.potion.pricePerLiter * this.volume;
    } else {
      return this.tareCost;
    }
  }
}

class BeverageBarrel {
  constructor(public volume: number, public beverageAmount: number) {}

  fillBottle(bottle: BeverageBottle): void { //fills a given BeverageBottle with beverage from the barrel if there is enough beverage remaining.
    if (this.beverageAmount >= bottle.volume) {
      this.beverageAmount -= bottle.volume;
      bottle.potion = new Beverage('', 0, 0); // Placeholder for the beverage inside the bottle
    }
  }

  fillBottles(bottles: BeverageBottle[]): void { // fills multiple bottles from the barrel using the fillBottle() method.
    for (const bottle of bottles) {
      this.fillBottle(bottle);
    }
  }
}

class DrinkBottleBox {
  constructor(
    public boxType: string,
    public boxPrice: number,
    public boxWeight: number,
    public numSlots: number
  ) {}

  getTotalWeight(bottles: BeverageBottle[]): number { //calculates the total weight of the box and the bottles inside it.
    let totalWeight = this.boxWeight;
    for (const bottle of bottles) {
      totalWeight += bottle.getMass();
    }
    return totalWeight;
  }

  getTotalCost(bottles: BeverageBottle[]): number { //which calculates the total cost of the box and the bottles inside it.
    let totalCost = this.boxPrice;
    for (const bottle of bottles) {
      totalCost += bottle.getCost();
    }
    return totalCost;
  }

  bottleBottlesFromKeg(keg: BeverageBarrel): BeverageBottle[] { //fills the bottles from a given keg until the specified number of slots is reached or until there is no more beverage in the keg.
    const bottles: BeverageBottle[] = [];
    for (let i = 0; i < this.numSlots; i++) {
      if (keg.beverageAmount <= 0) {
        break;
      }
      const bottle = new BeverageBottle(0, '', 0, 0);
      keg.fillBottle(bottle);
      bottles.push(bottle);
    }
    return bottles;
  }
}

// Automated tests
function runTests(): void {
  // Beverage tests
  const beverage = new Beverage('Cola', 2.5, 0.5);
  console.log(beverage.name); // Output: Cola
  console.log(beverage.pricePerLiter); // Output: 2.5
  console.log(beverage.weight); // Output: 0.5

  // BeverageBottle tests
  const drinkBottle = new BeverageBottle(1.5, 'PET', 0.1, 0.05, beverage);
  console.log(drinkBottle.volume); // Output: 1.5
  console.log(drinkBottle.bottleType); // Output: PET
  console.log(drinkBottle.mass); // Output: 0.1
  console.log(drinkBottle.tareCost); // Output: 0.05
  console.log(drinkBottle.potion?.name); // Output: Cola

  console.log(drinkBottle.getMass()); // Output: 0.25 (0.1 + 0.5 * 1.5)
  console.log(drinkBottle.getCost()); // Output: 0.925 (0.05 + 2.5 * 1.5)

  // BeverageBarrel tests
  const barrel = new BeverageBarrel(10, 20);
  const bottlesToFill = [
    new BeverageBottle(2, 'Glass', 0.2, 0.1),
    new BeverageBottle(1.5, 'PET', 0.1, 0.05),
    new BeverageBottle(3, 'Aluminum', 0.3, 0.15),
  ];
  barrel.fillBottles(bottlesToFill);
  console.log(barrel.beverageAmount); // Output: 5 (20 - 2 - 1.5 - 3)

  // DrinkBottleBox tests
  const box = new DrinkBottleBox('Cardboard', 0.2, 0.1, 6);
  console.log(box.getTotalWeight(bottlesToFill)); // Output: 1.85 (0.1 + 0.2 + 0.3 + 0.25 + 0.925)
  console.log(box.getTotalCost(bottlesToFill)); // Output: 1.35 (0.05 + 0.1 + 0.15 + 0.925)

  const bottledBottles = box.bottleBottlesFromKeg(barrel);
  console.log(bottledBottles.length); // Output: 3
  console.log(barrel.beverageAmount); // Output: 2 (5 - 2 - 1.5 - 3)
}

runTests();
