
// --- VARIABLES --- //


var pos = $('html, body').scrollTop() || $(window).scrollTop(),
activeSect = 0,
selectors = $('[name ^= "sel-"]'),
sections = $('section');


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

var workSlider = $('#work').offset().top,
workChildren = $('#work').children(),
focusedSlider,
nextSlider,
prevSlider;

function positioning(){

    workChildren.map(function(){

        if ($(this).offset().top == workSlider && $(this).offset().left == 0) {

            focusedSlider = $(this);

            if (focusedSlider.index() == 0) {

                nextSlider = workChildren.eq($(this).index()+1);

                prevSlider = workChildren.eq(workChildren.length-1);

            }
            else if (focusedSlider.index() == workChildren.length-1) {

                prevSlider = workChildren.eq($(this).index()-1);

                nextSlider = workChildren.eq(0);

            }
            else {

                prevSlider = workChildren.eq($(this).index()-1);

                nextSlider = workChildren.eq($(this).index()+1);

            }

            nextSlider.css('left',window.innerWidth+'px');

            prevSlider.css('left','-'+window.innerWidth+'px');

        }

    });

};

$('#work').click(function(){

    focusedSlider.animate({left:-window.innerWidth},800);

    nextSlider.animate({left:0},800,function(){

        positioning();

    });

})

$(window).resize(function(){

    positioning();

})

positioning();
