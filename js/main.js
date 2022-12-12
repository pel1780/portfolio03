$(function () {
    $('.main').fullpage({
        // navigation: true, 우측 중간에 도트로 위치를 알려줌
        anchors: ['sec01', 'sec02', 'sec03', 'sec04'],
        afterLoad: function (anchorLink, index) {
            $('.header nav>ul>li').eq(index - 1).addClass('on').
                siblings().removeClass('on');
            $('.f_page').eq(index - 1).addClass('on').
                siblings().removeClass('on');
        }
    });

    $('.mainSlide').slick({
        dots: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1000,
    });

})