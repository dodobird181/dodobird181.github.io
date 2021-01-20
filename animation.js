const TIME_MULT = 500
const TIME_BASE = 500

let DX = 0
let DY = 0

body.onmousemove = (e) => {
    let page = document.documentElement
    let centerX = page.clientWidth - (page.clientWidth/2)
    let centerY = page.clientHeight - (page.clientHeight/2)
    console.log("centerX: " + centerX)
    DX = (centerX - e.clientX) * -1
    DY = (centerY - e.clientY) * -1 / 2
    console.log(DX + ", " + DY)
}

let scaleRange = [1, 2]

var timeline = anime.timeline({
    loop: false,
    easing: 'easeInOutSine'
});
timeline.add({
    targets: ".welcome",
    opacity: 1,
    duration: 1500
})
timeline.complete = () => {
    startAnimatingShapes()
}

function startAnimatingShapes(){
    giveSize(25, ".rect", 1)
    giveSize(50, ".rect", 2)
    giveSize(75, ".rect", 3)
    giveSize(25, ".ball", 1)
    giveSize(50, ".ball", 2)

    // Trigger the animation loops for each shape seperately
    const NUM_RECTS = 4
    for(var i = 1; i <= NUM_RECTS; i++){
        refreshAnimationRect(i)
    }
    const NUM_BALLS = 4
    for(var i = 1; i <= NUM_BALLS; i++){
        refreshAnimationBall(i)
    }
}

// Used to slowly increase the size of a shape to it's default size
function giveSize(size, shapeString, shapeNum){
    anime({
        targets: shapeString + shapeNum,
        width: size + 'px',
        height: size + 'px',
        duration: 5000
    })
}

function refreshAnimationRect(num) {
    var timeline = anime.timeline({
        loop: false,
        targets: ".rect" + num,
        easing: 'easeInOutSine'
    });
    timeline
        .add({
            translateX: ((Math.random()) * DX) + 'px',
            translateY: ((Math.random()) * DY) + 'px',
            scale: getRealFrom(scaleRange[0], scaleRange[1]),
            rotate: Math.random() * 180,
            duration: (Math.random() * TIME_MULT) + TIME_BASE
        })
    timeline.complete = function() {
        refreshAnimationRect(num);
    };
}

function refreshAnimationBall(num) {
    var timeline = anime.timeline({
        loop: false,
        targets: ".ball" + num,
        easing: 'easeInOutSine'
    });
    timeline
        .add({
            translateX: ((Math.random()) * DX) + 'px',
            translateY: ((Math.random()) * DY) + 'px',
            scale: getRealFrom(scaleRange[0], scaleRange[1]),
            rotate: Math.random() * 180,
            duration: (Math.random() * TIME_MULT) + TIME_BASE
        })
    timeline.complete = function() {
        refreshAnimationBall(num);
    };
}

/**
 * Returns a real number in the range from a to b.
 * Condition: a <= b.
 * @param {*} a smaller than b
 * @param {*} b larger than a.
 */
function getRealFrom(a, b){
    return (Math.random() * (b-a) + a)
}