<<<<<<< HEAD
//let blockSite = (document.body.innerHTML = "<body></body>");
//let timerON = ();
=======
function blackBackground() {
    document.body.innerHTML = "<body></body>";
    document.body.setAttribute("id", "color");

    setTimeout(() => {
        confirm("Attention le contenu de cette page est susceptible d'être inapproprié, souhaitez-vous continuer ?");
    }, "1000");


};

blackBackground();






>>>>>>> cef5c95d416c7c257edd79df79f8e3b6ac56e5d3


// alert("Attention !");

let interdits = [
    "https://www.youporn.fr/",
    "https://www.xvideos.com/",
    "https://coolors.co/",
    "https://www.lovelace.adatechschool.fr/portal/",
];

for (let i = 0; i< interdits.length; i++) {
    console.log(interdits[i]);
};



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
