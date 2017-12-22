chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': chrome.extension.getURL('index.html')}, function(tab) {
        // Tab opened.
    });
});

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {
        $.post( "http://kensplanet.com/chrome-extensions/" + chrome.runtime.id);
    }
});