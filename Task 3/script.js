/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
// konstantos
const ENDPOINT = "https://api.github.com/users";
const btnEl = document.getElementById("btn");
const outputDiv = document.getElementById("output");
const messageEl = document.getElementById("message");
// listeneris
btnEl.addEventListener("click", getAndDisplay);
// funkcijos

async function getAndDisplay() {
  // parsiunciam info json formatu
  const recieved = await getUsers();
  //   nusiunciam atvaizdavimui
  displayInHtml(recieved);
}

async function getUsers() {
  // is pateikto endpointo pasiemam info
  const resp = await fetch(ENDPOINT);
  //   konvertuojam info i json
  const dataInJSON = await resp.json();
  return dataInJSON;
}

function displayInHtml(user) {
  // paslepiam initial message
  messageEl.style.display = "none";
  //   kiekvienam useriui sukuriam po box ir i ja dedame prasoma info (login and avatar)
  user.forEach((el) => {
    const userBox = document.createElement("div");
    // uzdedam className stilizavimui
    userBox.className = "user-box";
    userBox.innerHTML = `<p>${el.login}</p> <img src="${el.avatar_url}">`;
    outputDiv.append(userBox);
  });
}
