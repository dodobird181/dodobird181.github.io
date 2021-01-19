let cap = document.getElementById("myCaptcha")
let submitButton = document.getElementById("submitButton")
setInterval(() => {
    if(cap.getResponse() == ""){
        submitButton.style.display = "block"
    }
}, 2000)