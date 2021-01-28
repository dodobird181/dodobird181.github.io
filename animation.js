
const TIME_MULT = 1000
const TIME_BASE = 1000

//Randomly choose hue for the animated rectangles!
colorify(getRealFrom(0, 360))

function colorify(hue){
    let r1 = document.getElementById("rect1")
    let r2 = document.getElementById("rect2")
    let r3 = document.getElementById("rect3")
    let col1 = "hsl(" + hue + ", 100%, 75%)"
    let col2 = "hsl(" + hue + ", 100%, 50%)"
    let col3 = "hsl(" + hue + ", 100%, 15%)"
    r1.style.backgroundColor = col1
    r2.style.backgroundColor = col2
    r3.style.backgroundColor = col3
}

refreshAnimationRect(1)
refreshAnimationRect(2)
refreshAnimationRect(3)
function refreshAnimationRect(num) {
    var timeline = anime.timeline({
        loop: false,
        targets: ".rect" + num,
        easing: 'linear'
    });
    timeline
        .add({
            scale: getRealFrom(1.5, 2),
            rotate: Math.random() * 180,
            duration: (Math.random() * TIME_MULT) + TIME_BASE
        })
    timeline.complete = function() {
        refreshAnimationRect(num);
    };
}

/**
 * Returns a real number in the rage from a to b.
 * Condition: a <= b.
 * @param {*} a smaller than b
 * @param {*} b larger than a.
 */
function getRealFrom(a, b){
    return (Math.random() * (b-a) + a)
}