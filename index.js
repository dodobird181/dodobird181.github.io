

const MAIN_COLOR = "#EEF7F7"
const MOUSE_OVER_COLOR = "#B2D6D2"
const MOUSE_DOWN_COLOR = "#C2B7C6"

// Init menu buttons
initButton(document.getElementById("homeButton"))
initButton(document.getElementById("aboutButton"))
initButton(document.getElementById("projectsButton"))
initButton(document.getElementById("contactButton"))

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
            console.log("changing color! ==> " + h)
            h += 2
            i.style.color = "hsl(" + h + ", 100%, 80%)"
        }, 2)
    }
}