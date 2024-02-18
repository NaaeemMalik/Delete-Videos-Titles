// Save the original WebSocket constructor
const OriginalWebSocket = WebSocket;

// Define a custom WebSocket constructor
function CustomWebSocket(url, protocols) {
    // Replace the URL if it matches the desired pattern
    const replacedUrl = url.replace(/([a-zA-Z0-9-_]*\.)?keepa\.com/g, '$1keepa.amztoolshub.com');

    // Call the original WebSocket constructor with the replaced URL
    return new OriginalWebSocket(replacedUrl, protocols);
}

// Set the prototype and constructor to match the original WebSocket
CustomWebSocket.prototype = OriginalWebSocket.prototype;
CustomWebSocket.constructor = OriginalWebSocket.constructor;

// Replace the global WebSocket constructor with the custom one
window.WebSocket = CustomWebSocket;
