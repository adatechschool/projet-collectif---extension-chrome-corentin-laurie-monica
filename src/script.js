let interdits = [
  "https://www.vinted.fr/",
  "https://coolors.co/",
  "https://www.lovelace.adatechschool.fr/portal/",
];

function DOM() {
  document.getElementById("BLACK").remove();
}

//on écoute le changement du storage déclenché par le bouton de la popup
chrome.storage.local.onChanged.addListener((change) => {
  //puis on lance les quotes + les lamas

  chrome.storage.local.get(["objVerif"]).then((result) => {
    console.log("CA marche");
    for (let i = 0; i < interdits.length; i++) {
      console.log("Je suis dans la boucle");
      if (result.objVerif == false /*&& window.location.href == interdits[i]*/) {
        blackBackground();
        console.log("IL est là");
      } else if (result.objVerif == true) {
        DOM(); 
      }
    } 
  });
});

// document.addEventListener('keydown', function(event) {
//   if (!event.ctrlKey && event.altKey && event.which === 80/*P*/) {
//       // Dispatch a custom message, handled by your extension
//       // chrome.runtime.sendMessage('Alt+P');
//       console.log("toto")
//   }
// }, true); // <-- True is important


function blackBackground() {
  const newElement = document.createElement("div");
  newElement.id = "BLACK";
  newElement.setAttribute(
    "style",
    "background-color:black !important; width: 100vw !important; height: 100vh !important; position: fixed !important; z-index: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 !important"
  );
  document.body.appendChild(newElement);
}

/*window location recupere le site actuel du User*/

// let timerSites = [
//     "https://fr-fr.facebook.com/"
// ];
// localStorage.setItem("timerSite", JSON.stringify(timerSite));
// Jérémy a dit qu'on n'a pas besoin du localStorage car on a la liste dans un tableau

// if (interdits) {

//     console.log(interdits.includes());
// };
// elseif (timerSite) {
//     console.log ()
// };
