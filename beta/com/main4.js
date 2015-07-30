
// --- VARIABLES --- //


var wWidth,
wHeight,
touchongoing,
scrolling,
pos = $('html, body').scrollTop() || $(window).scrollTop(),
activeSect = 0,
selectors = $('[name ^= "sel-"]'),
sections = $('section'),
noTap = true;


// --- FUNCTIONS --- //


window.onscroll = function(){

    pos = $('html, body').scrollTop() || $(window).scrollTop();

    for (var i = 0; i < sections.length; i++) {

        var a = Math.abs(sections[i].offsetTop - pos),
        b = wHeight / 2;

        if (b > a) {

            activeSect = i;

        }

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

function sizing() {

    wWidth = window.innerWidth,
    wHeight = window.innerHeight

}

function scrollScreen(goto,dis,slider) {

    var dur = dis * 300;

    $('html, body').animate({scrollTop:goto},dur);

}

function setDestination(object) {

    var id = $('#'+object.attr('name').replace('sel-',''));

    scrollScreen(id.offset().top, Math.abs(sections.index(id) - activeSect))

}


// --- OBJECT/ELEMENT BINDINGS --- //


selectors.click(function(){

    setDestination($(this))

});

window.onresize = sizing();


// --- FUNCTION EXECUTIONS --- //


sizing();



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

    if (Math.abs($(this).offset().top - pos) < 3) {
        slider(thisSlider.length,thisSlider)

    }
    else {
        scrollScreen($(this).offset().top, 300);
    }

});
