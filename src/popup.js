document.addEventListener('DOMContentLoaded', function (){  
  //on écoute le bouton pour créer l'objet
  document.querySelector('#red').addEventListener('click', onclick, false) 
  function onclick(){
    alert("Blocage du site")
      //au click du bouton, on créé l'objet dans le storage 
      //pour pouvoir écouter le changement dans le script.js
      chrome.storage.local.set({
          status: objVerif = {
            value: true
          }
        })
  };
  document.querySelector('#green').addEventListener('click', green, false) 
  function green(){
    alert("IMAGES")
      //au click du bouton, on créé l'objet dans le storage 
      //pour pouvoir écouter le changement dans le script.js
      chrome.storage.local.set({
          status: objVerif = {
            value: true
          }
        })
  };
  document.querySelector('#blue').addEventListener('click', blue, false) 
  function blue(){
    alert("Timer")
      //au click du bouton, on créé l'objet dans le storage 
      //pour pouvoir écouter le changement dans le script.js
      chrome.storage.local.set({
          status: objVerif = {
            value: true
          }
        })
  };
}, false);


  

  
 
