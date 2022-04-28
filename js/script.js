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



// dots: true,
// infinite: false,
// speed: 300,
// slidesToShow: 4,
// slidesToScroll: 4,
// responsive: [
// {
//     breakpoint: 1024,
//     settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//     }
// },
// {
// breakpoint: 600,
// settings: {
//     slidesToShow: 2,
//     slidesToScroll: 2
//     }
// },
// {
//     breakpoint: 480,
//     settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//         }
// }
// ]
// });