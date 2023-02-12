//random number between 1 to 10 seconds in milliseconds
let m = () => parseInt(1000 + Math.random() * (20000 - 1000));
//generate random number between 15 and 60 
let n = parseInt (15 + Math.random() * (60 - 15));
let reloadedTimes = new Date().toLocaleTimeString()
console.log("random ", m() / 1000);
console.log("random2 ", n / 1000 / 60);
console.log("reloadedTimes ", reloadedTimes);

let rejUrl = "https://www.cashmaal.com/user/?i=u2uEx&viewoffer=332941&action=333224";
let checkUrl = "https://www.cashmaal.com/user/?i=u2uEx&viewoffer=332941";


setTimeout(() => {

    if (location.href == checkUrl) {
        //open reject url
        let actionBtn = document.querySelector('[href="' + rejUrl + '"]')
        if (actionBtn) {
            actionBtn.click()
            return
        }

        //if click doesnt work show that the script is running
        let minutes = 0
        let minutesRemaining =()=> parseInt(n) - minutes
        let showInfo = () => document.querySelector(".navbar-brand").innerText = "Rejecting by Extension " + reloadedTimes + " waiting " + ( minutesRemaining() )+ " minutes"
        showInfo()

        //generate random number between 15 and 60 minutes and reload the page
        setInterval(() => {
            //append how much minutes are left
            minutes++
            showInfo()
            if(minutesRemaining() == 0) location.reload()
        }, 1000 * 60)

    }

    else if (location.href == rejUrl) {
        console.log("rejecting");

        let elalert = document.querySelector("[role='alert']")
        if (elalert && elalert.innerText.includes("Transaction Rejected")) {
            location.href = checkUrl
            return
        }


        //select dropdown
        document.querySelector(".btn.dropdown-toggle.btn-default").click()

        //selecting the second option
        let elLi = document.querySelector("li[data-original-index='1']")
        if (elLi.innerText.includes("Not Received")) {
            elLi.children[0].click()

            //typing the pin
            let elP = document.querySelector("[type='password']")
            if (elP.placeholder.includes("5 Digit PIN")) {
                elP.value = "pin type here"

                //click reject button
                let elR = document.querySelector("input[name='sellerREson2']")
                if (elR.value == ("Reject")) {
                    elR.click()
                }


            }
        }
    }

}, m());