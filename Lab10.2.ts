interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}
let calc: Calculator = {
  add(a: number, b: number): number {
    return a + b;
  },
  multiply(a: number, b: number): number {
    return a * b;
  }
};
console.log("Addition =", calc.add(10, 10));
console.log("Multiplication =", calc.multiply(10, 10));