function projImageClose() {
    $(".projtitle").css('position', 'absolute');
    projShowing = false;
    $(".projects").animate({top: wH+'px'}, 1500, function() {
        $(this).hide()
    });
    $(".projects").children("img").fadeTo(400, 0, function() {
        $(".projects").children("img").remove();
    });
    $(".closeProjects").fadeTo(400, 0);
}

// $(".thumbBox").click(function() {
//     projResize();
//     $(".closeProjects").fadeTo(0, 0);
//     projShowing = true;
//     thisThumb = $(this).attr('id');
//     wH = $(window).height();
//     wW = $(window).width();
//     $(".projects").css('visibility','visible');
//     $(".projects").animate({top: '0px'}, 1500, function(){
//         $(".closeProjects").delay(500).fadeTo(400, 1);
//         $(".projtitle").css('position', 'fixed');
//         switch (thisThumb) {
//         case "1":
//         $(".projects").children("#bnet").css('visibility', 'visible');
//         $(".projtitle").html("Business<br>Networking<br>Website<br>Concept<br><br>");
//         break;
//         case "2":
//         $(".projects").children("#coffeetable").css('visibility', 'visible');
//         $(".projtitle").html("Interactive<br>Coffee Table<br>Concept<br><br>");
//         break;
        
//         case "4":
//         $(projImg).load(appendImage).attr({src: 'images/cage1.jpg', height: '100%', width: 'auto', align: 'center', style: 'display: block; margin: auto; max-height: 500px; max-width: 500px;'});
//         $(".projtitle").html("John Cage<br>CD Package:<br>Cover<br><br>");
//         break;
//         case "6":
//         $(projImg).load(appendImage).attr({src: 'images/blue2.jpg', height: 'auto', width: '75%', align: 'center', style: 'display: block; margin: auto;'});
//         $(".projtitle").html("Blue Sky<br>Organic Soda<br>Packaging<br><br>");
//         break;
//         case "7":
//         $(projImg).load(appendImage).attr({src: 'images/ifyou.jpg', height: '100%', width: 'auto', align: 'center', style: 'display: block; margin: auto;'});
//         $(".projtitle").html("If You<br>See Something<br>Say Something<br>Poster<br><br>");
//         break;
//         case "8":
//         $(projImg).load(appendImage).attr({src: 'images/vans3.jpg', height: 'auto', width: '75%', align: 'center', style: 'display: block; margin: auto;'});
//         $(".projtitle").html("Skate Vans<br>Website:<br>Home Page<br><br>");
//         break;
//         case "9":
//         $(projImg).load(appendImage).attr({src: 'images/palm.jpg', height: 'auto', width: '75%', align: 'center', style: 'display: block; margin: auto;'});
//         $(".projtitle").html("Palm Pre<br>Two-Page<br>Advertisement<br><br>");
//         break;
//         case "10":
//         $(projImg).load(appendImage).attr({src: 'images/civil1.jpg', height: '100%', width: 'auto', align: 'center', style: 'display: block; margin: auto;'});
//         $(".projtitle").html("Civilwarland<br>In Bad Decline<br>Book Cover<br><br>");
//         break;
//         case "11":
//         $(projImg).load(appendImage).attr({src: 'images/type1.jpg', height: 'auto', width: '75%', align: 'center', style: 'display: block; margin: auto;'});
//         $(".projtitle").html("Type<br>Directors<br>Club<br>Mailer<br><br>");
//         break;
//         case "12":
//         logoShowing = true;
//         $(projImg).load(appendImage).attr({src: 'images/kruLogo.jpg', height: '100%', width: 'auto', align: 'center', style: 'display: block; margin: auto; max-height: 500px; max-width: 500px;'});
//         $(".projtitle").html("Kru<br>Contemporary<br>Japanese<br>Cuisine<br>Logo<br><br>");
//         break;
//         case "13":
//         $(projImg).load(appendImage).attr({src: 'images/exit1.jpg', height: '100%', width: 'auto', align: 'center', style: 'display: block; margin: auto;'});
//         $(".projtitle").html("Senior<br>Exit Review<br>Poster<br><br>");
//         break;
//         case "14":
//         $(projImg).load(appendImage).attr({src: 'images/paint3.jpg', height: '100%', width: 'auto', align: 'center', style: 'display: block; margin: auto;'});
//         $(".projtitle").html("'Red<br>& Yellow'<br>Acrylic<br>Painting<br><br>");
//         break;
//         case "15":
//         $(projImg).load(appendImage).attr({src: 'images/photo2.jpg', height: '100%', width: 'auto', align: 'center', style: 'display: block; margin: auto;'});
//         $(".projtitle").html("'Untitled 2'<br>Digital<br>Photograph<br><br>");
//         break;
//         default:
//         $("#projImg").attr({src: '#', height: '#', width: '#'});
//         $(".projtitle").html("<br>");
//         break; 
//     }
//     });
//     $(".projects").click(projImageClose);
// });