let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".fa-search");

btn.onclick = function() {
    // $('.sidebar').toggleClass('active');
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}

$(function(){
    $('.1').click(function(){
        $('.container0').removeClass('off2');
        $('.container0').addClass('active1');
        $('.container1').addClass('off2');
        $('.container2').addClass('off2');
        $('.container3').addClass('off2');
        $('.container4').addClass('off2');
        $('.container5').addClass('off2');
        $('.container6').addClass('off2');
    });
});

$(function(){
    $('.2').click(function(){
        $('.container1').removeClass('off2');
        $('.container1').addClass('active1');
        $('.container0').addClass('off2');
        $('.container2').addClass('off2');
        $('.container3').addClass('off2');
        $('.container4').addClass('off2');
        $('.container5').addClass('off2');
        $('.container6').addClass('off2');
    });
});
$(function(){
    $('.3').click(function(){
        $('.container2').removeClass('off2');
        $('.container2').addClass('active1');
        $('.container0').addClass('off2');
        $('.container1').addClass('off2');
        $('.container3').addClass('off2');
        $('.container4').addClass('off2');
        $('.container5').addClass('off2');
        $('.container6').addClass('off2');
    });
});




$(function(){
    $('.4').click(function(){
        $('.container3').removeClass('off2');
        $('.container3').addClass('active1');
        $('.container0').addClass('off2');
        $('.container1').addClass('off2');
        $('.container2').addClass('off2');
        $('.container4').addClass('off2');
        $('.container5').addClass('off2');
        $('.container6').addClass('off2');
    });
});




$(function(){
    $('.5').click(function(){
        $('.container4').removeClass('off2');
        $('.container4').addClass('active1');
        $('.container0').addClass('off2');
        $('.container1').addClass('off2');
        $('.container2').addClass('off2');
        $('.container3').addClass('off2');
        $('.container5').addClass('off2');
        $('.container6').addClass('off2');
    });
});




$(function(){
    $('.6').click(function(){
        $('.container5').removeClass('off2');
        $('.container5').addClass('active1');
        $('.container0').addClass('off2');
        $('.container1').addClass('off2');
        $('.container2').addClass('off2');
        $('.container3').addClass('off2');
        $('.container4').addClass('off2');
        $('.container6').addClass('off2');
    });
});
$(function(){
    $('.7').click(function(){
        $('.container6').removeClass('off2');
        $('.container6').addClass('active1');
        $('.container0').addClass('off2');
        $('.container1').addClass('off2');
        $('.container2').addClass('off2');
        $('.container3').addClass('off2');
        $('.container4').addClass('off2');
        $('.container5').addClass('off2');
    });
});
