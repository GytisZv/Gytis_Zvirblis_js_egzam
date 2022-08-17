"use strict";
/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// konstantos
const btnEl = document.getElementById("submit-btn");
const outputEl = document.getElementById("output");
const formEl = document.forms[0];

// event listeners
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("mygtukas veikia, ir formoje gaunam: ", formEl.search.value);
  //   send the input value to check if its a number
  checkTheInput(+formEl.search.value);
});

function checkTheInput(value) {
  console.log("type of input---", typeof value);
  if (typeof value === "number") {
    console.log("number is valid");
    showTheOutput(value);
  }
}
function showTheOutput(value) {
  const kgToLb = value * 2.2046;
  const kgToG = value * 1000;
  const kgToOz = value * 35.274;
  outputEl.innerHTML = `Your entered weight (${value}kg) translates to ${kgToLb} pounds, ${kgToG} grams and ${kgToOz} ounces`;
}
