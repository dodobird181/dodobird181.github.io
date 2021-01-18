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