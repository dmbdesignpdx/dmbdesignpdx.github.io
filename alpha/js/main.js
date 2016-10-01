var main = document.getElementById('main'),
rows = main.children,
nav = document.getElementById('nav'),
about = document.getElementById('about'),
links = document.getElementsByTagName('li');

function introAnimations() {

    var a = window.pageYOffset,
    c = main.offsetTop - (window.innerHeight/2);

    if (a > c) {

        for (var i = 0; i < rows.length; i++) {

            rows[i].classList.remove('moveRows')

        }

    }

}

function whichSection() {

    var a = window.pageYOffset,
    d = parseInt(window.getComputedStyle(nav).height),
    b = about.offsetTop - d,
    c = main.offsetTop - d;

    if (a < c) {

        links[0].classList.remove('onSection');
        links[1].classList.remove('onSection')

    }
    else if (a < b) {

        links[0].classList.add('onSection');
        links[1].classList.remove('onSection')

    }
    else {

        links[0].classList.remove('onSection');
        links[1].classList.add('onSection')

    }

}


window.onload = function() {

    whichSection()

}

window.onscroll = function() {

    whichSection();

    introAnimations();

}
