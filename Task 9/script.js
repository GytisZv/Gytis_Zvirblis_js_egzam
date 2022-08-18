/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  }
}
const titanic = new Movie("titanic", "cameron", 120000000);
console.log("titanic: ", titanic);
console.log("was 'titanic' expensive to make", titanic.wasExpensive());

const zero = new Movie("zero", "velyvis", 10);
console.log("zero: ", zero);
console.log("was 'zero' expensive to make", zero.wasExpensive());
