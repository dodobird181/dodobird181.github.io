


let submitButton = document.getElementById("submitButton")
setInterval(() => {
    if (grecaptcha.getResponse() == ""){
        submitButton.style.display = "block"
    }
}, 2000)