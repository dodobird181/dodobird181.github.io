const MAIN_COLOR = "#c5c6c7"
const MOUSE_OVER_COLOR = "#66fcf1"
const MOUSE_DOWN_COLOR = "#45a29e"

// Update copyright notice based on the year
var d = new Date();
var n = d.getFullYear();
document.getElementById("copyrightNotice").innerHTML = "© Copyright " + n + "."

// Init menu buttons
initButton(document.getElementById("nameButton"))
initButton(document.getElementById("aboutButton"))
initButton(document.getElementById("projectsButton"))

// Init footer links
initButton(document.getElementById("footerGit"))
initButton(document.getElementById("footerLinkedIn"))
initButton(document.getElementById("footerContact"))

// Init Projects page links
initButton(document.getElementById("projectsBrickLink"))
initButton(document.getElementById("projectsTicLink"))

function initButton(buttonElement, mainColor=MAIN_COLOR, mouseOverColor=MOUSE_OVER_COLOR, mouseDownColor=MOUSE_DOWN_COLOR){

    if (buttonElement == null){
        return
    }

    // Main Color
    buttonElement.style.color = mainColor
    buttonElement.onmouseleave = (event) => {
        buttonElement.style.color = mainColor
    }

    // Mouse Over Color
    buttonElement.onmouseover = (event) => {
        buttonElement.style.color = mouseOverColor
    }
    buttonElement.onmouseup = (event) => {
        buttonElement.style.color = mouseOverColor
    }

    // Mouse Down Color
    buttonElement.onmousedown = (event) => {
        buttonElement.style.color = mouseDownColor
    }

    // Show button
    buttonElement.style.display = "inline-block"
}

// Init icons
initIcon(document.getElementById("gitIcon"))
initIcon(document.getElementById("linkedInIcon"))
initIcon(document.getElementById("mailIcon"))

function initIcon(icon){
    if (icon == null){
        return
    }

    let intervalNum = null

    icon.onmouseleave = (event) => {
        clearInterval(intervalNum)
        icon.style.color = MAIN_COLOR
    }
    icon.onmouseover = (event) => {
        let i = icon
        let h = 0
        intervalNum = setInterval(() => {
            h += 2
            i.style.color = "hsl(" + h + ", 100%, 80%)"
        }, 2)
    }
}

// Rainbowify submit button's backgroundColor
let sub = document.getElementById("submitButton")
if(sub != null){
    let intervalNum = null
    sub.onmouseleave = (event) => {
        clearInterval(intervalNum)
        sub.style.backgroundColor = MAIN_COLOR
    }
    sub.onmouseover = (event) => {
        let i = sub
        let h = 0
        intervalNum = setInterval(() => {
            h += 2
            i.style.backgroundColor = "hsl(" + h + ", 100%, 80%)"
        }, 2)
    }
}