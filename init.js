import Project from "./src/components/Project.js"

chrome.runtime.onInstalled.addListener(function() {
  let temp = new Project('Placeholder')
  chrome.storage.sync.set({KTProject: temp});
});


