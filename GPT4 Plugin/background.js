chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'queryWolframAndGPT4') {
    sendResponse({ success: true });
  }
});
