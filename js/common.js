$(document).ready(function(){
    console.log('common_js_start')
    // common_js_start



    AOS.init({
        duration: 1000,
        // disable: function () {
        //     var maxWidth = 767;
        //     return window.innerWidth < maxWidth;
        // }
    });    

    // slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    var Mainswiper = new Swiper('.main_section_01', {
        parallax: true,
        effect: "",
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
        },
        
        touchMoveStopPropagation : true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable : true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    



    
    var mainProduct_01 = new Swiper('.main_product_slide_01', {
        slidesPerView: 4,
        // centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 1,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        spaceBetween : 40, 
        touchMoveStopPropagation : true,

        navigation: {
            nextEl: '.swiper_next_02',
            prevEl: '.swiper_prev_02',
        },
        breakpoints : {
            "1100" :{
                slidesPerView: 3,
                spaceBetween : 20, 
            },
            "767" : {
                slidesPerView: 2,
            }
        },
        lazy : {
            loadPrevNext : true
        },
    });


        
    let mainProduct_02 = new Swiper('.main_product_slide_02', {
        slidesPerView: 1,
        // centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 1,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        touchMoveStopPropagation : true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.swiper_next_03',
            prevEl: '.swiper_prev_03',
        },
    });
    

            
    let mainevent_01 = new Swiper('.main_event_01', {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 1,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        touchMoveStopPropagation : true,

        navigation: {
            nextEl: '.swiper_next_04',
            prevEl: '.swiper_prev_04',
        },
        breakpoints : {
            "1100" :{
                spaceBetween:5,
            }
        }
    });
    
    let company_slide = new Swiper('.company_slide', {
        slidesPerView: 1,
        centeredSlides: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        touchMoveStopPropagation : true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
    


    



    // header_default 
    let header = document.querySelector('#header'),
    header_right = document.querySelector('.header_right'),
    header_center = document.querySelector('.header_center'),
    header_ham = document.querySelector('.header_ham'),
    header_full = document.querySelector('.header_full'),
    depth_01 = document.querySelectorAll('.header_full_list .depth_01'),
    depth_02 = document.querySelectorAll('.header_full_list .depth_02'),
    depth_03 = document.querySelectorAll('.header_full_list .depth_03'),
    fullnav_depth_01 = document.querySelectorAll('.header_full .header_full_wrap .header_full_list .depth_01 > a');

    

    
    

        
    //     $('.header_full_list .depth_01').click(function(){
    //         $(this).children('.depth_02').slideToggle();
    //         $(this).siblings().children('.depth_02').slideUp();
    //         return;
    //     })


    $('.depth_02').hide();
    $('.header_full_list .depth_01').click(function(){
        $(this).children('.depth_02').slideToggle();
        $(this).siblings().children('.depth_02').slideUp();
    })

    

  
    




    header_ham.addEventListener('click', function() {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            header_full.classList.add('active');
            $('html').css({"overflow":"hidden"});
        } else {
            header_full.classList.remove('active');
            $('html').css({"overflow":"auto"});
        }
    })



    

    // jj_add window Scroll event

    let this_scroll = 0;
   

    $(window).scroll(function (e) {
        let y = $(this).scrollTop(),
            path = location.pathname,
            sub_depth = $('.header_center .depth_01');

        if (y > 0) {
            $("#header").addClass('active')
        } else {
            $("#header").removeClass('active')
            sub_depth.removeClass('active');
        }


        if ($(window).scrollTop() > this_scroll) {
            $("#header").addClass('change_top');

            sub_depth.hover(function(){
                sub_depth.removeClass('active');
            });


            // if about_page 이부분 로직 수정해야함ㅋㅋ
            (path.indexOf("/about/") >= 0) ? sub_depth[0].classList.add('active') : sub_depth[0].classList.remove('active');
            (path.indexOf("/rnd/") >= 0) ? sub_depth[1].classList.add('active') : sub_depth[1].classList.remove('active');
            (path.indexOf("/product_info/") >= 0) ? sub_depth[2].classList.add('active') : sub_depth[2].classList.remove('active');
            (path.indexOf("/health/") >= 0) ? sub_depth[4].classList.add('active') : sub_depth[4].classList.remove('active');
            (path.indexOf("/petfood/") >= 0) ? sub_depth[5].classList.add('active') : sub_depth[5].classList.remove('active');

        } else {
            $("#header").removeClass('change_top');

        }
        this_scroll = y
    });



    // jj_add window Scroll event




    // if (y >= 70) {
    //     $("#header").addClass('active') 
    //     if (path.indexOf("/about/") >= 0) {
    //         sub_depth[2].style['display'] = 'flex'
    //     }
    // } else {
    //     $("#header").removeClass('active');
    //     sub_depth[2].style['display'] = 'none'
    // }

    // function IndexPop() {
    //     let popbanner = document.querySelector('.event_banner_01'),
    //         popbannerHei = popbanner.offsetTop;

    //     if (y >= popbannerHei) {
    //         $('.banner_pop').addClass("active");
    //     } else {
    //         $('.banner_pop').removeClass("active");
    //     }
    // }



    (function() {
        var viewModel = {
            templateIE: function(browser, version) {
                var template = '';
                template += '<div class="result_inner">';
                template += '<h2 class="tit">마이크로소프트는 2022년 6월 15일부터 ' + browser + '' + version + '을 지원하지 않습니다.</h2>';
                template += '<h2 class="tit">크롬, 엣지, 파이어폭스 브라우저에 최적화 되어 있습니다.</h2>';
                template += '<a class="result_button" href="https://www.google.com/intl/ko/chrome/">크롬브라우저 다운받기</a><br>';
                template += '<a class="result_button" href="https://www.mozilla.org/ko/firefox/download/thanks/">파이어폭스 다운받기</a>';
                template += '</div>';
                document.querySelector('body').innerHTML = template;
                window.location = 'microsoft-edge:' + window.location.href;
            },
        };

        var detectIE = function() {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf('MSIE');
            if (msie > 0) {
                // IE 10 이상 버전 채크
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }
            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 버전 체크
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }
            // 다른 브라우저 리턴
            return false;
        };

        // IE 또는 Edge 브라우저 버전 가져오기
        var version = detectIE();

        if (version) {
            return viewModel.templateIE('IE', version);
        }
    })();

    // common_js_end
    console.log('common_js_end')
});

