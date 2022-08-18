/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// konstantos
const ENDPOINT = "cars.json";
const outputDiv = document.getElementById("output");
// funkcijos

async function getBrands() {
  // is pateikto endpointo pasiemam info
  const resp = await fetch(ENDPOINT);
  //   konvertuojam info i json
  const dataInJSON = await resp.json();
  return dataInJSON;
}

async function displayBrands() {
  cars = await getBrands();
  //   sukuriam brandui kortele
  cars.forEach((car) => {
    const brandBox = document.createElement("div");

    let models = car.models;
    brandBox.className = "brand-box";
    brandBox.innerHTML = `<h4>${car.brand}</h4>`;
    // sukuriam prie kiekvieno brando modeliu list'a
    models.forEach((model) => {
      const modelsLiEl = document.createElement("li");
      modelsLiEl.innerHTML = `${model}`;
      brandBox.append(modelsLiEl);
    });
    outputDiv.append(brandBox);
  });
}
displayBrands();
