console.log("This is a popup!")


document.addEventListener('DOMContentLoaded', function (){  
    //on génère la quote au click du bouton
    document.querySelector("#red").addEventListener("click", red, false) 
    function red(){
        confirm("Vous allez bloquer le site à 100%");
        //au click du bouton 'yes please' on bloque la page
    };
    document.querySelector("#green").addEventListener("click", green, false)
    function green(){
        confirm("Vous allez bloquer toutes les images de ce site");
    }
    document.querySelector("#blue").addEventListener("click", blue, false)
    function blue(){
        confirm("Vous allez installer un timer sur ce site")
    }
}, false);
 
