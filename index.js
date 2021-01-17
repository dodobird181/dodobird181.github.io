const MAIN_COLOR = "#1b263b"
const MOUSE_OVER_COLOR = "#778da9"
const MOUSE_DOWN_COLOR = "#0d1b2a"
const TEXT_COLOR = "#e0e1dd"
const PUSHED_COLOR = "#"

// Init menu buttons
initButton(document.getElementById("homeButton"))
initButton(document.getElementById("aboutButton"))
initButton(document.getElementById("projectsButton"))
initButton(document.getElementById("resumeButton"))
initButton(document.getElementById("contactButton"))
initButton(document.getElementById("pushedButton"), PUSHED_COLOR, PUSHED_COLOR, PUSHED_COLOR)

function initButton(buttonElement, mainColor=MAIN_COLOR, mouseOverColor=MOUSE_OVER_COLOR, mouseDownColor=MOUSE_DOWN_COLOR){

    if (buttonElement == null){
        return
    }

    // Main color
    buttonElement.style.backgroundColor = mainColor
    buttonElement.onmouseleave = (event) => {
        buttonElement.style.backgroundColor = mainColor
    }
    buttonElement.onmouseup = (event) => {
        buttonElement.style.backgroundColor = mouseOverColor
    }

    // Event colors
    buttonElement.onmouseover = (event) => {
        buttonElement.style.backgroundColor = mouseOverColor
    }
    buttonElement.onmousedown = (event) => {
        buttonElement.style.backgroundColor = mouseDownColor
    }

    // Text color
    buttonElement.style.color = TEXT_COLOR

    // Show button
    buttonElement.style.display = "inline-block"
}