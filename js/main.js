$(function () {
    $('.main').fullpage({
        // navigation: true, 우측 중간에 도트로 위치를 알려줌
        paddingTop: '80px',
        // navigation: true,
        anchors: ['sec01', 'sec02', 'sec03', 'sec04'],

        afterLoad: function (anchorLink, index) {
            console.log(index)
            $('.fp_nav>ul>li').eq(index - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(index - 1).addClass('on').siblings().removeClass('on');
        }
    });

    $('.mainSlide').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1000,
    });

    $('.mainVisual .arrows .prev').on('click', function () {
        $('.mainSlide').slick('slickPrev');
    })
    $('.mainVisual .arrows .next').on('click', function () {
        $('.mainSlide').slick('slickNext');
    })

    $('.mainVisual .controller .play').on('click', function () {
        $('.mainSlide').slick('slickPlay');
    })
    $('.mainVisual .controller .pause').on('click', function () {
        $('.mainSlide').slick('slickPause');
    })

    var barWidth = $('.bar').width();
    $('.mainSlide').on('init afterChange', function (e, s, c) {
        var gauge = barWidth / s.slideCount;
        $('.bar div').css({ width: gauge })
        $('.bar div').css({ width: gauge * (c + 1) })
    })
    // mainVisual

    $('.con_slide').slick();

    $('.news_slide').slick({
        arrows: false,
    });

    $('.mainNews .news .prev').on('click', function () {
        $('.news_slide').slick('slickPrev');
    });
    $('.mainNews .news .next').on('click', function () {
        $('.news_slide').slick('slickNext');
    });
})



