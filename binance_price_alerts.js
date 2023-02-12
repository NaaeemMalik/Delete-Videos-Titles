//wait page to load
setTimeout(() => {
    console.log("binance_price_alerts.js loaded");
    //set refresh rate to 20 seconds
    document.querySelector('[id="C2CofferList_btn_refresh"]').click()
    setTimeout(() => {
        let se= document.querySelectorAll('[data-popper-placement="bottom-start"]')
        se[se.length-1].lastChild.lastChild.click()
    }, 1000);

    setInterval(function () {
        chrome.storage.local.get(null, function (result) {

            // console.log("retriving ", result);
            cryptoPrice = result.cryptoPrice ? result.cryptoPrice : 282
            let p = document.querySelector('[data-tutorial-id="trade_price_limit"]').firstChild.innerText

            console.log("price: ", p, " waiting: ", cryptoPrice);
            
            if (p >= cryptoPrice) {
                //send message to bg.js
                chrome.runtime.sendMessage({ message: "price_alert", price: p }, function (response) {
                    console.log(response);
                });
            }

        })
    }, 20 * 1000)


}, 5000)
