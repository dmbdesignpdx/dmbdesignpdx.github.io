var aboutInfo, projShowing, smallScreen = false;
var wH = $(window).height();
var wW = $(window).width();
var mainPos = Math.round((wH - 590) / 2);
var mainPosSmall = Math.round((wH - 418) / 2);
var projImageHeight, projImageHeightDivided, windowHeightDivided, projImagePosition;
var thisProjImg;
var thisThumb;
//var posters = false;

$(document).keypress(function(){
    switch(event.which) {
        case 112 : $("img").fadeTo(400, 1), $("img").not($("img[class=poster]")).fadeTo(400, .1)
        break;
        case 105 : $("img").fadeTo(400, 1), $("img").not($("img[class=packaging]")).fadeTo(400, .1)
        break;
        case 97 : $("img").fadeTo(400, 1), $("img").not($("img[class=advertising]")).fadeTo(400, .1)
        break;
        case 109 : $("img").fadeTo(400, 1), $("img").not($("img[class=misc]")).fadeTo(400, .1)
        break;
        case 100 : $("img").fadeTo(400, 1), $("img").not($("img[class=digital]")).fadeTo(400, .1)
        break;
        case 113 : $("img").fadeTo(400, 1)
        break;
    }
    // alert(event.which);
});


function size() {
    wH = $(window).height();
    wW = $(window).width();
    mainPos = Math.round((wH - 590) / 2);
    mainPosSmall = Math.round((wH - 418) / 2);
    if(!projShowing) {
        $(".projects").css({height: wH+'px', width: wW+'px', top: wH+'px'});
    }
    else {
        $(".projects").css({height: wH+'px', width: wW+'px', top: '0px'});
        projImageHeight = $(".projects").children("img").height();
        projImageHeightDivided = projImageHeight/2;
        windowHeightDivided = wH/2;
        projImagePosition = windowHeightDivided - projImageHeightDivided;
        $(".projects").css('margin-top', projImagePosition+'px');
    }
    if(wW < 501) {
        smallScreen = true;
    }
    else {
        smallScreen = false;
    }
    if(smallScreen) {
        $(".dmbAbout").css('bottom', '-330px');
        $(".mobileinfo").show();
    }
    else {
        $(".dmbAbout").css('bottom', '-500px');
        $(".mobileinfo").hide();
    }
    if((smallScreen && aboutInfo) || (!smallScreen && aboutInfo)) {
        $(".dmbAbout").css('bottom', '0px');
    }
    containerPos();
}

function projResize() {
    projImageHeight = $(".projects").children("img").height();
    projImageHeightDivided = projImageHeight/2;
    windowHeightDivided = wH/2;
    projImagePosition = windowHeightDivided - projImageHeightDivided;
    $(".projects").children("img").css('margin-top', projImagePosition+'px');
}

function containerPos() {
    if(wH > 650) {
        $(".fullcontainer").css('margin-top', (mainPos - 10)+'px');
    }
    if(smallScreen)
    {
        $(".fullcontainer").css('margin-top', (mainPosSmall - 20)+'px');
    }
}

$(".thumbBox").hover(function() {
    var divNum = parseInt(this.id);
    var divPlus = divNum + 1;
    var divMin = divNum - 1;
    var nextDiv = $("div[class*=Info]", "#"+divPlus);
    var prevDiv = $("#second", "#"+divMin);
    var thisDivName = $(this).attr('name');
    if(!smallScreen) {
        $("img").not($("img", this)).not($(".projects")).stop().fadeTo(400, .3);
        if(this.id != "5" || this.id != "10" || this.id != "15") {
            nextDiv.stop().animate({top: "0px"}, 400);
        }
        if(this.id == "5" || this.id == "10" || this.id == "15") {
            prevDiv.stop().animate({top: "0px"}, 400);
        }
        switch(thisDivName) {
            case "dig": $(".dmbDesignSub").show().html("Digital").css('color','#bc5353');
            break;
            case "adver": $(".dmbDesignSub").show().html("Advertising").css('color','#53bcb1');
            break;
            case "packid": $(".dmbDesignSub").show().html("Packaging").css('color','#537dbc');
            break;
            case "poster": $(".dmbDesignSub").show().html("Posters").css('color','#67bc53');
            break;
            case "misc": $(".dmbDesignSub").show().html("Misc.").css('color','#777');
            break;
        }
    }
}, function() {
    if(!smallScreen) {
        $("div[class*=Info], #first, #second").stop().animate({top: "-140px"}, 400);
    }
    $(".dmbDesignSub").hide();
    $("img").stop().fadeTo(400, 1);
});

$(".closeProjects").hover(function(){
    $(this).fadeTo(100, .5);
    },function(){
    $(this).fadeTo(100, 1);
});

function showAbout() {
    if(!aboutInfo) {
        $(".dmbAbout").animate({bottom: "0px"}, 1000);
        aboutInfo = true;
    }
    else {
        if(!smallScreen) {
            $(".dmbAbout").animate({bottom: "-500px"}, 1000);
        }
        else {
            $(".dmbAbout").animate({bottom: "-330px"}, 1000);   
        }
        aboutInfo = false;
    }
}

function hoverOver() {
    $(this).css('color', '#666');
}

function hoverOut() {
    $(this).css('color', '#222');
}

$(window).resize(function() {
    size();
});

$(".dinfo, .dmbDesign").click(showAbout);

$(".dinfo, .dmbDesign, .mobileinfo").hover(hoverOver, hoverOut);

$(".dmbDesignSub").hide();

size();

containerPos();

// Aaron's Code

var currentImage = 0;
var image = [];

$('body').on('click','.thumbBox',function(){
    currentImage = 0;
    var thumb = $(this)
    image = thumb.attr('data-images').split(',')
    if (image.length == 1) {$(".nextImage").hide()}
    else {$(".nextImage").show()}
    $("#projectImage").attr('src','/images/'+image[0])
    $('.projtitle').text(thumb.attr('data-title'))
    $('.projects').show();
    $('.projects').animate({top:0},1500)
})
$('body').on('click','.closeProjects',function(){
    $(".projects").click(closeProject());
})
$('body').on('click','.closeProjects',function(){
    $(".projects").click(closeProject());
})
$('body').on('click','.nextImage',function(){
    nextImage();
})
$('body').on('click','.previousImage',function(){
    prevImage();
})
$(document).keyup(function(e) {
    if (e.keyCode == 27) { closeProject() }   // esc
    if (e.keyCode == 37) { prevImage() }
    if (e.keyCode == 39) { nextImage() }
});
function closeProject(){
    $('.projects').animate({top:$('body').height()},1500,function(){
        $(".projects").hide()
    })

}
function nextImage(){
    if(currentImage == image.length -1) {
        return false;
    }
    currentImage ++
    console.log(image[currentImage])
    console.log(currentImage)
    $("#projectImage").fadeOut(function(){
        $("#projectImage").attr('src','/images/'+image[currentImage])
        $('#projectImage').fadeIn();
    })
    $(".previousImage").show();
    if(currentImage == image.length -1) {
        $(".nextImage").hide();
    }
}
function prevImage(){
    if(currentImage == 0) {
        return false
    }
    $(".nextImage").show();
    currentImage --
    $("#projectImage").fadeOut(function(){
        $("#projectImage").attr('src','/images/'+image[currentImage])
        $('#projectImage').fadeIn();
    })
    if (currentImage == 0) {
        $(".previousImage").hide();        
    }
}
