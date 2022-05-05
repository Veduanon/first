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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
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
  $preloader.delay(2000).fadeOut('slow');
});