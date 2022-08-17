/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
//   konstantos
const btnEl = document.getElementById("btn__element");
const stateEl = document.getElementById("btn__state");
let counter = 0;
// funkcijos

btnEl.onclick = () => {
  counter++;
  stateEl.innerHTML = counter;
};
