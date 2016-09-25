var thumbs = document.getElementsByClassName('thumb');

for (var i = 0; i < thumbs.length; i++) {

    thumbs[i].onclick = function() {

        // this.classList.add('enlarge')

    }

}

function introAnimations() {

    for (var i = 0; i < thumbs.length; i++) {

        thumbs[i].classList.remove('animateIntro', 'startState')

    }

}

window.onload = function() {



    window.setTimeout(introAnimations,2250)

}
