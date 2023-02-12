setInterval(() => {
    let link1 = "https://lookmovie.io/movies/search/?q="

    try {
        let m = document.getElementsByClassName("primary-entity js-entity")[0].getAttribute("data-resource-name")
        let link = link1 + m

        //When Not Logged in
        try {
            let n = document.getElementsByClassName("button-entity-action button-entity-action--add-to-list-white")[0]
            n.href = link
            n.target = "_blank"
            n.innerText = "Look Movie"
            console.log("success");

        } catch (e) {
            // console.log('fail1 ', e);
        }

        //when logged in
        try {
            let n = document.getElementsByClassName("button button-primary")
            if (n.length < 2) {
                //create sibling next to n 
                n = n[0]
                let newElement = document.createElement("a");
                newElement.href = link;
                newElement.classList = "button button-primary";
                newElement.target = "_blank";
                newElement.innerText = "Look Movie";
                n.appendChild(newElement);
            }
            console.log("success2");

        } catch (e) {
            console.log('fail2 ', e);
        }
    } catch (err) {
        console.log("error")
    }

    try {
        //top movie link
        let secondmov = document.getElementsByClassName("entity-main__title-main")[0].innerText
        n = document.getElementsByClassName("entity-main__button-wrap")[0]
        let
            html = "<a href='" + link1 + secondmov + "' target = '_blank' class='button-entity-action button-entity-action--details'>Look Movie</a>"
        html += '<span class="button-entity-action button-entity-action--details">See details</span>'
        n.innerHTML = html
        console.log("success3");
    } catch (e) {
        console.log('fail3 ', e);
    }

}, 1000);
