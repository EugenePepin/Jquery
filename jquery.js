// *** ПОЧАТОК ТЕМИ 1 ***




//1.1 begin\\

//$(document).ready(function () {
//	var html = $('h1').text();
//	alert(html);
//});

//1.1 end\\







////1.2 begin\\

//$(document).ready(function () {
//	var html = $('.link-moto').text();
//	alert(html);
//});

// //1.2 end\\







 //1.3 begin\\

  //$(function (){
  //  $(document).ready(function () {
  //    $('.slide-btn').hide();
  //});
  //});

 //1.3 end\\





 //1.4 begin\\

//$(function () {
//    $(document).ready(function () {
//        $('.features-grid p').hide(3000);
//    });
//});

 //1.4 end\\





 //1.5 begin\\

//$(function () {
//    $(document).ready(function () {
//        $('.categorie').show(2000);
//    });
//});

 //1.5 end\\





//1.6 begin\\

//$(function () {
//    $(document).ready(function () {
//        var html = $('.up-header').text();
//        alert(html);
//    });
//});

 //1.6 end\\






//1.7 begin\\

//$(function () {
//    $(document).ready(function () {
//        $('h1+span').hide(3500);
//        $('h1+span').show(2000);
//    });
//});

 //1.7 end\\





//1.8 begin\\

//$(function () {
//    $(document).ready(function () {
//        $('h3 span').hide(1000);
//        $('h3 span').show(2000);
//    });
//});

 //1.8 end\\






//1.9 begin\\

//$(function () {
//    $(document).ready(function () {

//        var html = $('.categorie a').text();
//        alert(html);
//    });
//});

 //1.9 end\\






//1.10 begin\\

//$(function () {
//$(document).ready(function () {
//    var html = $('span label').text();
//        alert(html);
//    });
//});

 //1.10 end\\






//1.11 begin\\

//$(function () {
//$(document).ready(function () {
//    var html = $('h4 a').text();
//        alert(html);
//    });
//});

 //1.11 end\\






//1.12 begin\\

//$(function () {
//$(document).ready(function () {
//    $('img[src*=logo]').hide();

//    });
//});

 //1.12 end\\








//1.13 begin\\

//$(function () {
//$(document).ready(function () {
//    var html = $('#my_form, #img_2, #moto_models');
//    hidesomething(html);
//    });
//});

//function hidesomething(html) {
//    settimeout(function () {
//        html.hide();
//    }, 5000);

//}

 //1.13 end\\


// *** КІНЕЦЬ ТЕМИ 1 ***




// *** ПОЧАТОК ТЕМИ 2 ***




//2.1 begin\\

//$(function () {
//$(document).ready(function () {
//    $("h1").fadeOut(3000);
//    $("h1").fadeIn(3000);
//});
//});

//2.1 end\\





//2.2 begin\\

//$(function () {
//$(document).ready(function () {
//    $(".head-moto-img").fadeTo(0, 0.05);
//    $(".head-moto-img").fadeTo(7000, 1);

//});
//});

//2.2 end\\









//2.3 begin\\

//$(function () {
//$(document).ready(function () {
//    $("#fea, .work, #blog, #test").fadeOut(2000);
//    $("#fea, .work, #blog, #test").fadeIn(1000);

//});
//});

//2.3 end\\





//2.3 begin\\

//$(function () {
//$(document).ready(function () {
//    $("#fea, .work, #blog, #test").fadeOut(2000);
//    $("#fea, .work, #blog, #test").fadeIn(1000);

//});
//});

//2.3 end\\








//2.4 begin\\


//$(function () {
//    $(document).ready(function () {
//        $('.post-head').fadeTo(1500,0);
//        $('.blog-post').slideUp(2000);
//        $('.blog-post').slideDown(3000);
//        $('.post-head').fadeTo(6000, 1);

//    });
//});

//2.4 end\\






//2.5 begin\\

//$(function () {
//    $(document).ready(function () {
//        var html = $('#my_form');
//        var t1 = 2000;
//        var t2 = 3000;
//    zr(html,t1,t2);
//    });
//});

//function zr(html, t1, t2) {

//    $(html).slideUp(t1);
//    $(html).slideDown(t2);

//};

//2.5 end\\







//2.6 begin\\

//$(function () {
//    $(document).ready(function () {
//        var html = $('#my_form');
//        var time = 3500;
//        var opacity = 0.5;
//        prozor(html,time,opacity);
//    });
//});

//function prozor(html, time, opacity) {

//    $(html).fadeTo(time, opacity);
//    $(html).slideUp(time);
//    $(html).slideDown(time);
//    $(html).fadeTo(time, 1);
//};

//2.6 end\\







//2.7 begin\\

//$(function () {
//    $(document).ready(function () {
//        $(".top-nav").slideUp(3000, function () {
//            alert("Меню сховано");
//        })
//    });
//});


//2.7 end\\








//2.8 begin\\

//$(function () {
//    $(document).ready(function () {
//        var html = $('#my_form');
//        var t1 = 2000;
//        var t2 = 3000;
//        var time = 3500;
//        var opacity = 0.5;
//        $("#home").slideUp(5000, function () {
//           zr(html, t1, t2);
//        prozor(html,time,opacity);
//        })
//    });
//});

//function zr(html, t1, t2) {

//    $(html).slideUp(t1);
//    $(html).slideDown(t2);

//};

//function prozor(html, time, opacity) {

//    $(html).fadeTo(time, opacity);
//    $(html).slideUp(time);
//    $(html).slideDown(time);
//    $(html).fadeTo(time, 1);
//};

//2.8 end\\


// *** КІНЕЦЬ ТЕМИ 2 ***





// *** ПОЧАТОК ТЕМИ 3 ***





//3.1 begin\\


//$(function () {

//    $(document).ready(function () {
//        $('.slide-btn').click(function () {

//            alert('Була натиснута кнопка з класом slide-btn');
//        });
//    });
//});


//3.1 end\\









//3.2 begin\\


//$(function () {
//    $('.features-grids').click(function () {
//        $('.col-md-3').slideUp(3000);
//    });
//});


//3.2 end\\









//3.3 begin\\


//$(function () {
//    $('.features-grids').click(function () {
//        $('.col-md-3').slideToggle(2000);
//    });
//}); 


//3.3 end\\









//3.4 begin\\





//3.4 end\\









//3.5 begin\\




//3.5 end\\








//3.6 begin\\
//3.6 end\\








//3.7 begin\\
//3.7 end\\








//3.8 begin\\
//3.8 end\\









//3.9 begin\\
//3.9 end\\









//3.10 begin\\
//3.10 end\\








// *** КІНЕЦЬ ТЕМИ 3 ***

