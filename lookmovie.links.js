//replace href of all a tags with nothing
console.log('lookmovie.links.js');

setInterval(function () {
    var allLinks = document.getElementsByTagName('a');
    for (var i = 0; i < allLinks.length; i++) {
        let a = allLinks[i].href
        a = a.replace("https://lookmovie.io", '');
        allLinks[i].href = a;
    }
}, 1000);

if (location.href.includes("lookmovie.io")) {
    location.href = location.href.replace("lookmovie.io", "playerwatchlm43.xyz");
}