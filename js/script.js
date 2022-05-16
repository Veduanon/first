var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 60
    }, 400);
    return false;
});

// $(function() {})

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        speed: 450,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1224,
              settings: {
                
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ],
    });
});

$(document).ready(function(){
  $('.slider_2').slick({
      infinite: true,
      speed: 450,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      responsive: [
          {
            breakpoint: 1224,
            settings: {
              
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ],
  });
});


$(function(){
  $('.button').click(function(){
      $('.modal').toggleClass('none');
  });
});


$(function(){
  $('.button_x').click(function(){
      $('.modal').toggleClass('none');
  });
});

$(function(){
  $('.button_2_1').click(function(){
      $('.nav_ul_2').toggleClass('none_2');
  });
});

$(function(){
  $('.nav_ul_a').click(function(){
      $('.nav_ul_2').toggleClass('none_2');
  });
});

$(window).on('load', function() {
  $preloader = $('.preloader'),
  $loader = $preloader.find('.preloader');
  $loader.fadeOut();
  $preloader.delay(1500).fadeOut('slow');
});

// document.body.onload = function()
// {
//     $(".dot-1").css("animation", "dot-light 1s 0s forwards");
//     $(".dot-2").css("animation", "dot-light 1.5s 0.75s forwards");
//     $(".dot-3").css("animation", "dot-light 1.5s 1.5s forwards");
//     $(".dot-4").css("animation", "dot-light 1.5s 2.25s forwards");
//     setTimeout(function(){$(".item-1").css("width", "0");}, 4000);
//     setTimeout(function(){$(".item-2").css("height", "0");}, 5000);
//     setTimeout(function(){$(".item-3").css("height", "0");}, 5300);
//     setTimeout(function(){$(".item-4").css("height", "0");}, 5500);
 
//     setTimeout(function(){$(".header").css({"opacity":"1", "transform":"translate(0)"});}, 6100);
//     setTimeout(function(){$(".p-1").css({"opacity":"1", "transform":"translate(0)"});}, 6300);
//     setTimeout(function(){$(".p-2").css({"opacity":"1", "transform":"translate(0)"});}, 6500);
//     setTimeout(function(){$(".p-3").css({"opacity":"1", "transform":"translate(0)"});}, 6700);
 
//     setTimeout(function(){$(".preloader").css("visibility", "hidden");}, 7000);
// }