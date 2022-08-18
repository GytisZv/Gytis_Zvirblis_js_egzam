/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(firstNmb, secondNmb) {
  this.a = firstNmb;
  this.b = secondNmb;
  this.sum = function () {
    return this.a + this.b;
  };
  this.substraction = function () {
    return this.a - this.b;
  };
  this.multiplication = function () {
    return this.a * this.b;
  };
  this.division = function () {
    return this.a / this.b;
  };
}
const sumof2and5 = new Calculator(2, 5);
const subof2and5 = new Calculator(2, 5);
const multof2and5 = new Calculator(2, 5);
const divof2and5 = new Calculator(2, 5);

console.log("Sudedam 2 ir 5 =", sumof2and5.sum());
console.log("Atimam 2 is 5 =", sumof2and5.substraction());
console.log("Dauginam 2 ir 5 =", sumof2and5.multiplication());
console.log("Dalinam 2 is 5 =", sumof2and5.division());
