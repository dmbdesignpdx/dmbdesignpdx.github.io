var work = document.getElementById('work'),
nav = document.getElementById('nav'),
about = document.getElementById('about'),
links = document.getElementsByTagName('li'),
thumbs = document.getElementsByClassName('thumb');

function whichSection() {

    var a = window.pageYOffset,
    d = parseInt(window.getComputedStyle(nav).height),
    b = about.offsetTop - d,
    c = work.offsetTop - d;

    if (a < c) {

        links[1].classList.remove('onSection');
        links[2].classList.remove('onSection')

    }
    else if (a < b) {

        links[1].classList.add('onSection');
        links[2].classList.remove('onSection');

    }
    else {

        links[1].classList.remove('onSection');
        links[2].classList.add('onSection')

    }

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

    whichSection()

};
