<<<<<<< HEAD
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.status == 'complete'){
      chrome.scripting.executeScript({
        files: ['script.js'],
        target: {tabId: tab.id}
      })
    }
  });
=======
console.log("Hello world")

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
//     if(changeInfo.status == "complete"){
//       chrome.scripting.executeScript({
//         files: ["script.js"],
//         target: {tabId: tab.id}
//       })
//     }
//   });
>>>>>>> cef5c95d416c7c257edd79df79f8e3b6ac56e5d3
