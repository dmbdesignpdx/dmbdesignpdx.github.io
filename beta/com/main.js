
// --- VARIABLES --- //


var wWidth,
wHeight,
pos = 0,
activeSect = 0,
selectors = $('[name ^= "sel-"]'),
sections = $('section');


// --- FUNCTIONS --- //


window.onscroll = function(){

    pos = $('html, body').scrollTop() || $(window).scrollTop();


    //Scroll Snap

    clearTimeout($(this).data('scrollEnd'));

    $(this).data('scrollEnd', setTimeout(function() {

        for (var i = 0; i < sections.length; i++) {

            var a = sections.eq(i).offset().top - pos,
            b = wHeight / 2;

            if (b > a && a > -b) {

                activeSect = i;

                scrollScreen(sections.eq(i).offset().top, 1)

            }

        }

    }, 300));


    //Section Highlight

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

function sizing(actual) {

    wWidth = window.innerWidth,
    wHeight = window.innerHeight;

    sections.height(wHeight);

    if (actual) {

        var st = sections.eq(activeSect).offset().top;

        $('html, body').scrollTop(st) || $(window).scrollTop(st);

        //console.log('Resize Event--- current section: '+activeSect+', offset: '+st+', document position: '+pos);

    }

}

function scrollScreen(goto,dis) {

    var dur = dis * 300;

    $('html, body').animate({scrollTop:goto},dur, function(){

        $('*:animated').stop();

        clearTimeout($(window).data('scrollEnd'));

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

var posTest;

function positionTest(){
    posTest = $('html, body').scrollTop() || $(window).scrollTop();
}

positionTest();
