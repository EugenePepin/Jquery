// œŒ◊¿“Œ  “≈Ã» 5 \\


//5.1 begin\\

//$(function () {
//    $("#about-moto").removeClass('about-moto').addClass('new');
//});

//5.1 end\\





//5.3 begin\\

//$(function () {
//    $("li").hover(function () {
//        $(this).removeClass('m1').addClass('svitlo');
//    },function () {
//        $(this).removeClass('svitlo').addClass('m1');
//    });
//});

//5.3 end\\



//5.4 begin\\


//$(function () {
//    $("#img_1, #img_2, #img_3, #img_4").click(function () {
//        $(this).clone().appendTo('#buy-moto').parent().removeClass('koshik-wrapper').addClass('full-koshik')
//    });
//});


//5.4 end\\




//5.5 begin\\

//$(function () {
//    $("#img_1, #img_2, #img_3, #img_4").click(function () {
//        $(this).remove().clone().appendTo('#buy-moto').parent().removeClass('koshik-wrapper').addClass('full-koshik')
//    });

//});



//5.5 end\\


//  ≤Õ≈÷‹ “≈Ã» 5 \\






// œŒ◊¿“Œ  “≈Ã» 6 \\

//6.1 begin\\

//$(function () {
//        $('.slide-btn').height(100);

//});


//6.1 end\\


//6.2 begin\\

//$(function () {
//$(document).ready(function () {
//    var object = $('#img_2');
//    var w = 500;
//    change_width(object, w);
//    });
//});

//function change_width(object,w) {
//    $(object).css({"width": w }
//    );

//}


//6.2 end\\


//6.3 begin\\

//$(function () {
//    $(document).ready(function () {
//        var object = $('#img_2');
//        var w = 300;
//        change_width(object, w);
//    });
//});

//function change_width(object, w) {
//    var h = w / 2;
//    $(object).css({ "width": w, "height": h}
//    );

//}


//6.3 end\\

//6.4 begin\\


//$(function () {
//    $(document).ready(function () {
//        var object = $('#img_2');
//        change_width(object);
//    });
//});

//function change_width(object) {
//    var ws = $("#img_2").innerWidth();
//    var w = ws / 2;
//    var h = w / 2;

//    $(object).css({ "width": w, "height": h}
//    );

//}


//6.4 end\\



//6.5 begin\\


//$(document).ready(function () {
//    $('img').on('click', function () {
//        $(this).toggleClass('interim');
//        if ($(this).hasClass('interim')) {
//            $(this).animate({ width: "240px", height: "187px" }, 100);
//        } else {
//            $(this).animate({ width: "160px", height: "125px" }, 100);
//        }
//    });
//});

//6.5 end\\




//6.6 begin\\

//$(function () {
//    $('img').mouseover(function () {
//        var w = $("#img_1").innerWidth();
//        $(this).width(w/2);
//        $('img').mouseout(function () {
//            $(this).width(w);
//        });
//    });
//});  


//6.6 end\\




//  ≤Õ≈÷‹ “≈Ã» 6 \\