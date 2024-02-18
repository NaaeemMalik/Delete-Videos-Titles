const replaceKeepa = (content) => {
    return content.replace(/([a-zA-Z0-9-_]*\.)?keepa\.com/g, '$1keepa.amztoolshub.com');
};

// const secWebSocketProtocol = "a93einmvr4g46nkq8arsnfl0fputfpd5t1681v3nmv061bm2v2l1ceakkd57njv1";
// const secWebSocketExtensions = "permessage-deflate";
// const secWebSocketKey = "Zf2p5Xd/IPkSj3hrnRpsyA==";
// const cookie = "token=c1747b8fb31011f5";

// chrome.webRequest.onBeforeSendHeaders.addListener(
//     (details) => {
//         let headers = details.requestHeaders;
//         let hasSecWebSocketProtocol = false;
//         let hasSecWebSocketExtensions = false;
//         let hasSecWebSocketKey = false;
//         let hasCookie = false;

//         for (let i = 0; i < headers.length; i++) {
//             if (headers[i].name.toLowerCase() === "sec-websocket-protocol") {
//                 headers[i].value = secWebSocketProtocol;
//                 hasSecWebSocketProtocol = true;
//             } else if (headers[i].name.toLowerCase() === "sec-websocket-extensions") {
//                 headers[i].value = secWebSocketExtensions;
//                 hasSecWebSocketExtensions = true;
//             } else if (headers[i].name.toLowerCase() === "sec-websocket-key") {
//                 headers[i].value = secWebSocketKey;
//                 hasSecWebSocketKey = true;
//             } else if (headers[i].name.toLowerCase() === "cookie") {
//                 headers[i].value = cookie;
//                 hasCookie = true;
//             }
//         }

//         if (!hasSecWebSocketProtocol) {
//             headers.push({ name: "Sec-WebSocket-Protocol", value: secWebSocketProtocol });
//         }
//         if (!hasSecWebSocketExtensions) {
//             headers.push({ name: "Sec-WebSocket-Extensions", value: secWebSocketExtensions });
//         }
//         if (!hasSecWebSocketKey) {
//             headers.push({ name: "Sec-WebSocket-Key", value: secWebSocketKey });
//         }
//         if (!hasCookie) {
//             headers.push({ name: "Cookie", value: cookie });
//         }

//         return { requestHeaders: headers };
//     },
//     { urls: ["<all_urls>"] },
//     ["blocking", "requestHeaders", "extraHeaders"]
// );

// const token = "4buuj2tib9j2ic4escq24efk3jj30ahr0ocfhvjn9801snfmdrn15rvif4nqf4sc";

// chrome.webRequest.onBeforeRequest.addListener(
//     (details) => {
//         let url = new URL(details.url);
//         url.searchParams.append("token", token);

//         return { redirectUrl: url.href };
//     },
//     { urls: ["<all_urls>"] },
//     ["blocking"]
// );