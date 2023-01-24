console.log("Hello world");

chrome.action.setBadgeText({ text:'ON' });
chrome.action.setBadgeBackgroundColor({ color : 'green'});

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
//     if(changeInfo.status == "complete"){
//       chrome.scripting.executeScript({
//         files: ["script.js"],
//         target: {tabId: tab.id}
//       })
//     }
//   });
