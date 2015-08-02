
// --- VARIABLES --- //


var pos = $('html, body').scrollTop() || $(window).scrollTop(),
activeSect = 0,
selectors = $('[name ^= "sel-"]'),
sections = $('section'),
num = 1,
clicked = false;


// --- FUNCTIONS --- //


window.onscroll = function(e){

    pos = $('html, body').scrollTop() || $(window).scrollTop();

    if (1030 > window.innerWidth) {
        e.preventDefault();
    }

    for (var i = 0; i < sections.length; i++) {

        var a = Math.abs(sections[i].offsetTop - pos),
        b = window.innerHeight / 2;

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

function scrollScreen(goto,dis) {

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




// --- FUNCTION EXECUTIONS --- //



// --- TESTING --- //



$('#work').click(function(){

    var thisSlider = $('.image', this);

    if (clicked) {

        num = 0;
        clicked = false

    }
    else {

        num = 1;
        clicked = true

    }

    thisSlider.css({'-webkit-transform':'translateX(-'+num+'00%)','transform':'translateX(-'+num+'00%)'});

});

document.getElementById('menu').onclick = function(){

    this.classList.add('offScreen');

    document.getElementById('logo').classList.add('onScreen');

    $('li').addClass('onScreen');

    $('#menuOff').css({'width':'100%','height':'100%'});

    $('#menuOff').on('click',hideMenu);

    $('#nav').on('click',hideMenu);

}

function hideMenu(){

    $('#nav').off('click',hideMenu);

    $('#menuOff').off('click',hideMenu);

    $('#menuOff').css({'width':'0','height':'0'});

    document.getElementById('menu').classList.remove('offScreen');

    document.getElementById('logo').classList.remove('onScreen');

    $('li').removeClass('onScreen');

}
