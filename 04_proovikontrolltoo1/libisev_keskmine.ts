class SlidingAverage {
  private numbers: number[];
  private averages: number[];

  constructor() {
    this.numbers = [];
    this.averages = [];
  }

  addNumber(num: number): void {
    this.numbers.push(num);

    if (this.numbers.length >= 3) {
      const lastIndex = this.numbers.length - 1;
      const average = (this.numbers[lastIndex] + this.numbers[lastIndex - 1] + this.numbers[lastIndex - 2]) / 3;
      this.averages.push(average);
    }
  }

  getSlidingAverages(): number[] {
    return this.averages;
  }
}

// Testimine
const slidingAverage = new SlidingAverage();
slidingAverage.addNumber(2);
slidingAverage.addNumber(4);
slidingAverage.addNumber(6);
slidingAverage.addNumber(8);
console.log(slidingAverage.getSlidingAverages()); // Väljund: [4, 6]
