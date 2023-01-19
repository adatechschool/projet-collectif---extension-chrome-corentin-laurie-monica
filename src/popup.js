console.log("This is a popup!")


document.addEventListener('DOMContentLoaded', function (){  
    //on génère la quote au click du bouton
    document.querySelector("#red").addEventListener("click", onclick, false) 
    function onclick(){
        // document.body.innerHTML = "<body></body>";

        alert("Attention !");
        //au click du bouton 'yes please' on load les quotes
        //fetchData();
    };

}, false);
// function stop(){
   
//     document.getElementById("red").click = alert("Ca marche !!!")
//        boutonElement.addEventListener("click",stop)
// }




// stop(); 
