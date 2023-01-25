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

  chrome.commands.onCommand.addListener((command) => {
    console.log("coucou ici");
  });

  // chrome.commands.onCommand.addListener((command) => {
  //   if (command.raccourciOn) {
  //     console.log("raccourci on ok");
  //   } else if (command.raccourciOff) {
  //     console.log("raccourci off ok");
  //   }
  //   // console.error(`Command: ${command}`);
  // });
