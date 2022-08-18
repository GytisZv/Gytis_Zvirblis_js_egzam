/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

function getUserAverageAge(data) {
  average =
    // panaudodami reduce, sukuriam vietini kintamaji total, eidami per array.age reiksmes sudedam su total.
    // pradedam nuo 0 indexo.
    // galini rezultata padalinam is array ilgio .

    data.reduce((total, current) => total + current.age, 0) / data.length;
  // grazinam suapvalinta
  return average.toFixed(2);
}

function getUsersNames(givenArray) {
  // pasiimam array ir per map funkcija grazinam nauja array.
  return givenArray.map((el) => el.name);
}

console.log("duoto array amziaus vidurkis: ", getUserAverageAge(users));
console.log("array su vardais: ", getUsersNames(users));
