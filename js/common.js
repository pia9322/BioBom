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
    depth_03 = document.querySelectorAll('.header_full_list .depth_03');
    
    
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
            console.log(header_full);
            header_full.classList.add('active');
            $('.header_lang').addClass('active');
            $('.header_sns').addClass('active');
        } else {
            header_full.classList.remove('active');
            $('.header_lang').removeClass('active');
            $('.header_sns').removeClass('active');
        }
    })



    // sub_manu_navi 
    let sub_depth = document.querySelector('#sub_depth');



    

    // jj_add window Scroll event
    $(window).scroll(function () {
        let y = $(this).scrollTop(),
            scrolltop = $(window).scrollTop();
            // IndexHome = '/',
            // path = location.pathname;

        function IndexPop() {
            let popbanner = document.querySelector('.event_banner_01'),
                popbannerHei = popbanner.offsetTop;

            if (y >= popbannerHei) {
                $('.banner_pop').addClass("active");
            } else {
                $('.banner_pop').removeClass("active");
            }
        }

        (y >= 70) ? $("#header").addClass('active') : $("#header").removeClass('active');

    });
    // jj_add window Scroll event









    // common_js_end
    console.log('common_js_end')
});

