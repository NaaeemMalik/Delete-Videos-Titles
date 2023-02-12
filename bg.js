chrome.tabs.onCreated.addListener(activeInfo => move(activeInfo));
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => move(tab));

let m = [
    "lookmovie.io/images/logo1.png",
    "https://shopshopextension.com",
    "https://hidelen.com/",
    "https://dvitohrrmq.xyz/",
    "https://loxqsrnc.xyz/",
    "ulymagiqde.xyz"
]

async function move(activeInfo) {
    console.log("", activeInfo);

    if (activeInfo.pendingUrl || activeInfo.url) {
        m.forEach(el => {
            if (activeInfo.pendingUrl.includes(el) || activeInfo.url.includes(el)) {
                console.log("closed2");
                chrome.tabs.remove(activeInfo.id);
            }
        });
    }
}

let notification__count = 0;


//onmessage
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("onmessage: ",request);
    if (request.message === "price_alert") {

        notification__count++;
        chrome.notifications.create('test' + notification__count, {
            type: 'basic',
            iconUrl: 'https://bin.bnbstatic.com/static/images/common/favicon.ico',
            title: 'Binance Price Alert',
            message: 'crypto price is now ' + request.price,
            priority: 2
        });
        console.log(request.price);

    }
}
);