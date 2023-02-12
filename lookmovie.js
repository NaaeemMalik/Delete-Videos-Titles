//for iframes:
$.each($('iframe'), function () {
    this.contentWindow.open = function (url, windowName, windowFeatures) {
        //iframe window.open caught!
    };
});

//for window:
window.open = function (url, windowName, windowFeatures) {
    //window.open caught!
};