chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'queryWolframAndGPT4') {
    // You can add any action or data extraction logic here based on the current webpage
  }
});
