var aboutInfo, projShowing, smallScreen, mediumScreen = false;
var wH = $(window).height();
var wW = $(window).width();
var mainPos = Math.round((wH - 590) / 2);
var mainPosSmall = Math.round((wH - 418) / 2);
var projImageHeight, projImageHeightDivided, windowHeightDivided, projImagePosition;
var thisProjImg;
var thisThumb;


function size() {
    wH = $(window).height();
    wW = $(window).width();
    mainPos = Math.round((wH - 590) / 2);
    if(wW < 505) {
        smallScreen = true;
    }
    else {
        smallScreen = false;
    }
    if(wW > 506 && wW < 810){
        mediumScreen = true;
    }
    else {
        mediumScreen = false;
    }
    if(!projShowing) {
        $(".projects").css({height: wH+'px', width: wW+'px', top: wH+'px'});
    }
    else {
        $(".projects").css({height: wH+'px', width: wW+'px', top: '0px'});
    }
    switch (true) {
        case smallScreen :
            $(".dmbAbout").css('bottom', '-960px');
            $("#13").hide();
            $("#14").hide();
            $("#15").hide();
            break;
        case mediumScreen :
            $(".dmbAbout").css('bottom', '-800px');
            break;
        default :
            $(".dmbAbout").css('bottom', '-500px');
            $("#13").show();
            $("#14").show();
            $("#15").show();
            break;
    }
    if((smallScreen && aboutInfo) || (!smallScreen && aboutInfo)) {
        $(".dmbAbout").css('bottom', '0px');
    }
    containerPos();
}

function containerPos() {
    if(wH > 650) {
        $(".fullcontainer").css('margin-top', (mainPos - 10)+'px');
    }
    if(smallScreen)
    {
        $(".fullcontainer").css('margin-top', '30px');
    }
}

$(".thumbBox").hover(function() {
    var divNum = parseInt(this.id);
    var divPlus = divNum + 1;
    var divMin = divNum - 1;
    var nextDiv = $("div[class*=Info]", "#"+divPlus);
    var prevDiv = $("#second", "#"+divMin);
    var thisDivName = $(this).attr('name');
    if(!smallScreen && !mediumScreen) {
        $("img").not($("img", this)).not($(".projects")).stop().fadeTo(400, .08);
        if(this.id != "5" || this.id != "10" || this.id != "15") {
            nextDiv.stop().animate({top: "0px"}, 400);
        }
        if(this.id == "5" || this.id == "10" || this.id == "15") {
            prevDiv.stop().animate({top: "0px"}, 400);
        }
    }
}, function() {
    if(!smallScreen && !mediumScreen) {
        $("div[class*=Info], #first, #second").stop().animate({top: "-140px"}, 400);
    }
    $("img").stop().fadeTo(400, 1);
});

function showAbout() {
    if(!aboutInfo) {
        $(".dmbAbout").animate({bottom: "0px"}, 1200);
        aboutInfo = true;
        $(".dinfo").html("CLOSE");
    }
    else {
        aboutInfo = false;
        $(".dinfo").html("ABOUT");
        switch(true) {
            case smallScreen :
                $(".dmbAbout").animate({bottom: "-960px"}, 1200);
                break;
            case mediumScreen :
                 $(".dmbAbout").animate({bottom: "-800px"}, 1200);
                 break;
            default :
                $(".dmbAbout").animate({bottom: "-500px"}, 1200);
                break;
        }
    }
};

$(".dinfo").hover(function() {
    $(this).css('color', '#888');  
}, function() {
    $(this).css('color', '#444');
});

$(window).resize(function() {
    size();
});

$(".dinfo").click(showAbout);

size();

containerPos();

// Aaron's Code

var currentImage = 0;
var image = [];
var title = [];

$('body').on('click','.thumbBox',function(){
    currentImage = 0;
    var thumb = $(this);
    image = thumb.attr('data-images').split(',');
    if (image.length == 1) {$(".nextImage, .previousImage").hide();}
    else {$(".nextImage").show(); $(".previousImage").hide();}
    $("#projectImage").attr('src','/images/'+image[0])
    $('.projtitle').text(thumb.attr('data-title'));
    $('.projects').show();
    $('.projects').stop().animate({top:0},1500);
    projShowing = true;
});

$('body').on('click','.closeProjects',function(){
    $(".projects").click(closeProject());
});

$('body').on('click','.nextImage',function(){
    nextImage();
});

$('body').on('click','.previousImage',function(){
    prevImage();
});

$(document).keyup(function(e) {
    if (e.keyCode == 27) { closeProject() }   // esc
    if (e.keyCode == 37) { prevImage() }
    if (e.keyCode == 39) { nextImage() }
});

function closeProject(){
    $("#projectImage").fadeOut();
    $('.projects').animate({top:$('body').height()},1500,function(){
        $(".projects").hide();
        projShowing = false;
    });

};

function nextImage(){
    if(currentImage == image.length -1) {
        return false;
    };
    currentImage ++;
    $("#projectImage").fadeOut(function(){
        $("#projectImage").attr('src','/images/'+image[currentImage]);
        $('#projectImage').fadeIn();
    });
    $(".previousImage").show();
    if(currentImage == image.length -1) {
        $(".nextImage").hide();
    };
};

function prevImage(){
    if(currentImage == 0) {
        return false;
    };
    $(".nextImage").show();
    currentImage --;
    $("#projectImage").fadeOut(function(){
        $("#projectImage").attr('src','/images/'+image[currentImage]);
        $('#projectImage').fadeIn();
    });
    if(currentImage == 0) {
        $(".previousImage").hide();  
    };
};
