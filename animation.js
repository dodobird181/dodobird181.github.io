
const DX = 650
const DY = 200

let scaleRange = [1, 2]
function refreshAnimationRect(num) {
    var timeline = anime.timeline({
        loop: false,
        targets: ".rect" + num,
        easing: 'easeInOutSine'
    });
    timeline
        .add({
            translateX: ((Math.random() - 0.5) * DX) + 'px',
            translateY: ((Math.random() - 0.5) * DY) + 'px',
            scale: getRealFrom(scaleRange[0], scaleRange[1]),
            rotate: Math.random() * 180,
            duration: (Math.random() * 750) + 1000
        })
        .add({
            translateX: ((Math.random() - 0.5) * DX) + 'px',
            translateY: ((Math.random() - 0.5) * DY) + 'px',
            scale: getRealFrom(scaleRange[0], scaleRange[1]),
            rotate: Math.random() * 180,
            duration: (Math.random() * 750) + 1000
        });
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
            translateX: ((Math.random() - 0.5) * DX) + 'px',
            translateY: ((Math.random() - 0.5) * DY) + 'px',
            scale: getRealFrom(scaleRange[0], scaleRange[1]),
            rotate: Math.random() * 180,
            duration: (Math.random() * 750) + 1000
        })
        .add({
            translateX: ((Math.random() - 0.5) * DX) + 'px',
            translateY: ((Math.random() - 0.5) * DY) + 'px',
            scale: getRealFrom(scaleRange[0], scaleRange[1]),
            rotate: Math.random() * 180,
            duration: (Math.random() * 750) + 1000
        });
    timeline.complete = function() {
        refreshAnimationBall(num);
    };
}

// Trigger the animation loops for each shape seperately
const NUM_RECTS = 4
for(var i = 1; i <= NUM_RECTS; i++){
    refreshAnimationRect(i)
}
const NUM_BALLS = 4
for(var i = 1; i <= NUM_BALLS; i++){
    refreshAnimationBall(i)
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