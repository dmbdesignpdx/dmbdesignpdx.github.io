var work = document.getElementById('work'),
rows = work.children,
nav = document.getElementById('nav'),
about = document.getElementById('about'),
links = document.getElementsByTagName('li'),
thumbs = document.getElementsByClassName('thumb'),
viewer = document.getElementById('viewer');

function introAnimations() {

    var a = window.pageYOffset,
    c = work.offsetTop - (window.innerHeight * .6666);

    if (a > c) {

        for (var i = 0; i < rows.length; i++) {

            rows[i].classList.remove('showRows')

        }

    }

}

function whichSection() {

    var a = window.pageYOffset,
    d = parseInt(window.getComputedStyle(nav).height),
    b = about.offsetTop - d,
    c = work.offsetTop - d;

    if (a < c) {

        links[0].classList.remove('onSection');
        links[1].classList.remove('onSection')

    }
    else if (a < b) {

        links[0].classList.add('onSection');
        links[1].classList.remove('onSection');

    }
    else {

        links[0].classList.remove('onSection');
        links[1].classList.add('onSection')

    }

}

function openViewer() {

    viewer.classList.add('onView')

}

function closeViewer() {

    viewer.classList.remove('onView')

}




for (var i = 0; i < thumbs.length; i++) {

    thumbs[i].onclick = function() {

        openViewer()

    }

}

window.onload = function() {

    whichSection()

};

window.onscroll = function() {

    whichSection();

    introAnimations()

};

viewer.onclick = funcion() {

    closeViewer()

};
