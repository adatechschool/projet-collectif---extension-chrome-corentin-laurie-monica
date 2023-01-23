
//on écoute le changement du storage déclenché par le bouton de la popup
chrome.storage.local.onChanged.addListener((changes, local) => {
    //puis on lance les quotes + les lamas
    blackBackground();
})

function blackBackground() {

    const newElement = document.createElement("div");
    newElement.setAttribute("style", "background-color:black !important; width: 100vw !important; height: 100vh !important; position: fixed !important; z-index: 1000000000000000000000000000000000000000000000000 !important");
    console.log(document.body.appendChild(newElement));

};


// let interdits = [
//     "https://www.youporn.fr/",
//     "https://www.xvideos.com/",
//     "https://coolors.co/",
//     "https://www.lovelace.adatechschool.fr/portal/",
// ];

// for (let i = 0; i< interdits.length; i++) {
//     console.log(interdits[i]);
// };



//boucle pour parcourir le tableau//
//console.log//

// localStorage.setItem("interdits", JSON.stringify(interdits));

// let timerSite = [
//     "https://fr-fr.facebook.com/"
// ];
// localStorage.setItem("timerSite", JSON.stringify(timerSite));


    // if (interdits) {
               
    //     console.log(interdits.includes());
    // };
    // elseif (timerSite) {
    //     console.log ()
    // };
