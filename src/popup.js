console.log("This is a popup!")

function modifyCSS() {
    console.log("coucou Marseillais !")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.insertCSS(tabs[0].id, {style: "body { background-color: black; position : absolute; z-index: 9999; }"}, function() {
        console.log("CA MARCHE !")
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        }
      });
    });
  }
// modifyCSS(); 

document.addEventListener("DOMContentLoaded", function() {
    console.log("TCHOU !!")
    document.querySelector("#red").addEventListener("click", modifyCSS, false);
    // function red() {
    //     alert("coucou")
    //     modifyCSS() 
        // confirm("Vous aller bloquer ce site à 100%")
    // }
    //     //au click du bouton 'yes please' on bloque la page
    // document.querySelector("#green").addEventListener("click", green, false)
    // function green(){
    //     confirm("Vous allez bloquer toutes les images de ce site");
    // }
    // document.querySelector("#blue").addEventListener("click", blue, false)
    // function blue(){
    //     confirm("Vous allez installer un timer sur ce site")
    // }
}, false);
 
