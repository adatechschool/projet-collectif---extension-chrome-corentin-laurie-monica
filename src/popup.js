document.addEventListener('DOMContentLoaded', function (){  
  //on écoute le bouton pour créer l'objet
  document.querySelector('#red').addEventListener('click', onclick) 
  function onclick(){
    alert("Vous allez bloquer ce site !");
      //au click du bouton, on créé l'objet dans le storage 
      //pour pouvoir écouter le changement dans le script.js
      chrome.storage.local.set({ objVerif : false});
      chrome.action.setBadgeText({ text:'ON' });
      chrome.action.setBadgeBackgroundColor({ color : 'green'});
  };

  document.querySelector('#red1').addEventListener('click', declick) 
  function declick(){
    alert("Vous allez débloquer le site !");
      //au click du bouton, on créé l'objet dans le storage 
      //pour pouvoir écouter le changement dans le script.js
      chrome.storage.local.set({ objVerif : true});
      chrome.action.setBadgeText({ text:'OFF' });
      chrome.action.setBadgeBackgroundColor({ color : 'red'});
  };
});

  
 
