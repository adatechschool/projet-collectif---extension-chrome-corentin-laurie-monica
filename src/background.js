// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
//     if(changeInfo.status == 'complete'){
     
      //on rajoute un clear du storage au lancement de l'extension
      chrome.storage.local.clear(function() {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    });
  //   }
  // });

  chrome.action.setBadgeText({ text:'ON' });
chrome.action.setBadgeBackgroundColor({ color : 'green'});

