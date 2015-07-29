
// --- VARIABLES --- //


var wWidth,
wHeight,
touchongoing,
scrolling,
pos = $('html, body').scrollTop() || $(window).scrollTop(),
activeSect = 0,
selectors = $('[name ^= "sel-"]'),
sections = $('section');


// --- FUNCTIONS --- //


window.onscroll = function(e){

    scrolling = true;

    pos = $('html, body').scrollTop() || $(window).scrollTop();


    // Section in Focus

    for (var i = 0; i < sections.length; i++) {

        var a = sections.eq(i).offset().top - pos,
        b = wHeight / 2;

        if (b > a && a > -b) {

            activeSect = i;

        }

    }


    // Scroll Snap

    if (wWidth > 1025) {

        scrollTimed()

    }
    else {

        e.preventDefault()

    }


    // Section Highlight

    for (var i = 1; i < selectors.length; i++) {

        var a = selectors.eq(i).attr('name').replace('sel-',''),
        b = $('#'+a).offset().top - pos;

        if (2 > b) {

            selectors.eq(i).addClass('on');

            if (i > 1) {

                for (var j = i - 1; j > 0; j--) {

                    selectors.eq(j).removeClass('on')

                }

            }

        }

        else {

            selectors.eq(i).removeClass('on');

        }

    }

}

var scrollTimer;

function scrollTimed() {

    window.clearTimeout(scrollTimer);

    scrollTimer = window.setTimeout(function(){

        scrollScreen(sections.eq(activeSect).offset().top, 1)

    },300);

}

function sizing(actual) {

    wWidth = window.innerWidth,
    wHeight = window.innerHeight;

    if (1025 > wWidth) {

        if (wWidth > wHeight) {

            sections.height('100%');

        }
        else {

            sections.height('100vh');

        }

    }
    else {

        sections.height('100%');

    }

}

function scrollScreen(goto,dis) {

    var dur = dis * 300;

    $('html, body').animate({scrollTop:goto},dur, function(){

        $('this:animated').clearQueue().stop();

        window.clearTimeout(scrollTimer);

        $('html, body').scrollTop(goto) || $(window).scrollTop(goto);

    });

}

function setDestination(object) {

    var id = $('#'+object.attr('name').replace('sel-',''));

    scrollScreen(id.offset().top, Math.abs(sections.index(id) - activeSect))

}


// --- OBJECT/ELEMENT BINDINGS --- //


selectors.click(function(){

    setDestination($(this))

});

window.onresize = function(){

    sizing(true)

};


// --- FUNCTION EXECUTIONS --- //


sizing(false);



// --- TESTING --- //

var i = 0;

function slider(amount,object) {
    i++;
    if (i > amount - 1) {
        i = 0;
    }
    object.css({'-webkit-transform':'translateX(-'+i+'00%)','transform':'translateX(-'+i+'00%)'});
}

$('section:eq(1)').click(function(){

    var thisSlider = $('.image', this);
    slider(thisSlider.length,thisSlider)

});

window.addEventListener('touchend', function(){

    scrollScreen(sections.eq(activeSect).offset().top, 1)

}, false);
