function blackBackground() {
    document.body.innerHTML = "<body></body>";
    document.body.setAttribute("id", "color");

    setTimeout(() => {
        confirm("Attention le contenu de cette page est susceptible d'être inapproprié, souhaitez-vous continuer ?");
    }, "1000");


};

// blackBackground();

let interdits = [
    "https://coolors.co/",
    "https://www.lovelace.adatechschool.fr/portal/",
];

/*window location recupere le site actuel du User*/
for (let i = 0; i< interdits.length; i++) {
    console.log(interdits[i]);
    if (window.location.href == interdits[i]) {
        return blackBackground();
    }
}


// let timerSites = [
//     "https://fr-fr.facebook.com/"
// ];
// localStorage.setItem("timerSite", JSON.stringify(timerSite));
// Jérémy a dit qu'on n'a pas besoin du localStorage car on a la liste dans un tableau


   
    // elseif (timerSites) {;
    //     console.log ();
    // };
