console.log("chromium_code_search.js loaded");
//disable on disable param
if(!location.href.includes("&disable"))
setInterval(() => {
    remove_elements()
}, 1000);

function remove_elements() {

    let el = document.querySelectorAll(".result-header")
    for (let i = 1; i < el.length; i++) {
        if (el[i].innerText.includes("\nout/") || el[i].innerText.includes("test")
            || el[i].innerText.includes("chromiumos/") || el[i].innerText.includes("chromeos/")
        ) {
            console.log(el[i].innerText);
            el[i].parentElement.remove()
        }
    }

}