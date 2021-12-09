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
        }

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

    

    
    for(let i=0; i<depth_01.length; i++){
        depth_01[i].addEventListener('click', function(){
            $(this).children('.depth_02').slideToggle();
            $(this).siblings().children('.depth_02').slideUp();
            return;
        })
    }

  
    



    header_ham.addEventListener('click', function() {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            header_full.classList.add('active');
            $('.header_lang').addClass('active');
            $('.header_sns').addClass('active');
        } else {
            header_full.classList.remove('active');
            $('.header_lang').removeClass('active');
            $('.header_sns').removeClass('active');
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
            (path.indexOf("/about/") >= 0) ? sub_depth[2].classList.add('active') : sub_depth[2].classList.remove('active');

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




    // common_js_end
    console.log('common_js_end')
});

