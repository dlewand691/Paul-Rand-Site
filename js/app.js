// @codekit-prepend "../node_modules/jquery/dist/jquery.min.js"
// @codekit-prepend "../node_modules/fastclick/lib/fastclick.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.core.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.util.timer.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.util.imageLoader.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.util.nest.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.util.touch.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.abide.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.accordion.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.dropdownMenu.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.magellan.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.sticky.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.tabs.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.responsiveAccordionTabs.min.js"
// @codekit-prepend "../node_modules/foundation-sites/dist/js/plugins/foundation.reveal.min.js"
// @codekit-prepend "../node_modules/rrssb/js/rrssb.min.js"
// @codekit-prepend "../node_modules/select2/dist/js/select2.min.js"
// @codekit-prepend "maximize-select2-height-master/maximize-select2-height.min.js"
// @codekit-prepend "../node_modules/darkmode-js/lib/darkmode-js.min.js"




// @codekit-append "_nav.js"



// ===================================================================================
// ██████  ██     ██  █████
// ██   ██ ██     ██ ██   ██
// ██████  ██  █  ██ ███████
// ██      ██ ███ ██ ██   ██
// ██       ███ ███  ██   ██
// ===================================================================================

// @codekit-append "_pwabuilder-sw.js"

// -----  End of PWA  -----------------------------------




// window.addEventListener('load', () =>{
//    quicklink();
// });


$(document).foundation();

$(document).ready(function() {
    // =============================================================================================
    //  █████  ██████      ██████  ██       ██████   ██████ ██   ██
    // ██   ██ ██   ██     ██   ██ ██      ██    ██ ██      ██  ██
    // ███████ ██   ██     ██████  ██      ██    ██ ██      █████
    // ██   ██ ██   ██     ██   ██ ██      ██    ██ ██      ██  ██
    // ██   ██ ██████      ██████  ███████  ██████   ██████ ██   ██
    // =============================================================================================
    // @codekit-prepend "../node_modules/blockadblock/blockadblock.js"
    // Function called if AdBlock is not detected
    function adBlockNotDetected() {
        // alert('AdBlock is not enabled');
    }
    // Function called if AdBlock is detected
    function adBlockDetected() {
        alert('\n*** AD BLOCKER DETECTED ***\n\nPlease disable your ad blocker or whitelist this site in your ad blocker settings to be able to view all of Mr. Rand’s work. Thank you!\n');
    }

    // Recommended audit because AdBlock lock the file 'blockadblock.js' 
    // If the file is not called, the variable does not exist 'blockAdBlock'
    // This means that AdBlock is present
    if (typeof blockAdBlock === 'undefined') {
        adBlockDetected();
    } else {
        // blockAdBlock.onDetected(adBlockDetected);
        // blockAdBlock.onNotDetected(adBlockNotDetected);
        // and|or
        // blockAdBlock.on(true, adBlockDetected);
        // blockAdBlock.on(false, adBlockNotDetected);
        // and|or
        blockAdBlock.on(true, adBlockDetected).onNotDetected(adBlockNotDetected);
    }

    // Change the options
    blockAdBlock.setOption('checkOnLoad', false);
    // and|or
    // blockAdBlock.setOption({
    //     debug: false,
    //     checkOnLoad: true,
    //     resetOnEnd: false
    // });

    // -----  End of AD BLOCK  ---------------------------------------------





    // =============================================================================================
    //  █████   ██████  ███████
    // ██   ██ ██    ██ ██
    // ███████ ██    ██ ███████
    // ██   ██ ██    ██      ██
    // ██   ██  ██████  ███████
    // =============================================================================================
    // @codekit-prepend "../node_modules/aos/dist/aos.js"
    AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease',
        disable: 'mobile',
        startEvent: 'DOMContentLoaded'
    });
    // -----  End of AOS  ---------------------------------------------


    // =============================================================================================
    // ███████  █████  ███    ██  ██████ ██    ██ ██████   ██████  ██   ██
    // ██      ██   ██ ████   ██ ██       ██  ██  ██   ██ ██    ██  ██ ██
    // █████   ███████ ██ ██  ██ ██        ████   ██████  ██    ██   ███
    // ██      ██   ██ ██  ██ ██ ██         ██    ██   ██ ██    ██  ██ ██
    // ██      ██   ██ ██   ████  ██████    ██    ██████   ██████  ██   ██
    // =============================================================================================
    // @codekit-prepend "../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js"
    $("[data-fancybox]").fancybox({
        protect: true,
        idleTime: 1.5,
        afterLoad: function(instance, current) {
            //     // this.title = $(this.element).find('img').attr('alt');
            // current.$image.attr('alt', current.opts.$orig.find('img').attr('alt'));
            // $(".fancybox-image").attr("alt", current.opts.$orig.data('alt'));
        }
        // afterLoad: function(instance, slide) {
        //     // slide.$slide.find('img').attr("alt", slide.opts.$orig.data('alt'));
        //     $(".fancybox-image").attr("alt", slide.opts.$orig.data('alt'));
        // }
    });

    // $('[data-fancybox]').fancybox({
    //     afterLoad: function(instance, current) {
    //         current.$image.attr('alt', current.opts.$orig.find('img').attr('alt'));
    //     }
    // });
    // -----  End of FANCYBOX  ---------------------------------------------


    // =============================================================================================
    // ███████ ██   ██  █████  ██████  ███████     ████████ ██   ██ ██ ███████
    // ██      ██   ██ ██   ██ ██   ██ ██             ██    ██   ██ ██ ██
    // ███████ ███████ ███████ ██████  █████          ██    ███████ ██ ███████
    //      ██ ██   ██ ██   ██ ██   ██ ██             ██    ██   ██ ██      ██
    // ███████ ██   ██ ██   ██ ██   ██ ███████        ██    ██   ██ ██ ███████
    // =============================================================================================
    // @codekit-prepend "../node_modules/share-this/dist/share-this.js"
    // @codekit-prepend "../node_modules/share-this/dist/sharers/twitter.js"
    // @codekit-prepend "../node_modules/share-this/dist/sharers/email.js"
    // @codekit-prepend "../node_modules/share-this/dist/sharers/facebook.js"
    ShareThis({
        sharers: [ShareThisViaTwitter, ShareThisViaFacebook, ShareThisViaEmail]
    }).init();
    // -----  End of SHARE THIS  ---------------------------------------------


    // =============================================================================================
    // ██████  ██   ██    ██ ██████
    // ██   ██ ██    ██  ██  ██   ██
    // ██████  ██     ████   ██████
    // ██      ██      ██    ██   ██
    // ██      ███████ ██    ██   ██
    // =============================================================================================
    // @codekit-prepend "../node_modules/plyr/dist/plyr.min.js"
    // plyr.setup();
    // const player = new Plyr('#player');
    const players = Array.from(document.querySelectorAll('.plyr-js')).map(player => new Plyr(player));
    // const player = new Plyr('.js-player');
    // const players = Plyr.setup('.js-player', options);

    // -----  End of PLYR  ---------------------------------------------

    // ===================================================================================================
    // =            REMOVE ANIMSITION LINK FROM BUTTONS            =
    // ===================================================================================================
    // $(".external").click(function() {
    //     $(this).removeClass("animsition-link");
    // });

    // =====  End of REMOVE ANIMSITION LINK FROM BUTTONS  ============================================================



    // ===================================================================================================
    // =            PREVENT RIGHT CLICK ON IMAGES            =
    // ===================================================================================================
    $("img").bind("contextmenu", function(e) {
        return false;
    });

    // =====  End of PREVENT RIGHT CLICK ON IMAGES  ============================================================---


    // =============================================================================================
    // ██       █████  ███████ ██    ██ ███████ ██ ███████ ███████ ███████
    // ██      ██   ██    ███   ██  ██  ██      ██    ███  ██      ██
    // ██      ███████   ███     ████   ███████ ██   ███   █████   ███████
    // ██      ██   ██  ███       ██         ██ ██  ███    ██           ██
    // ███████ ██   ██ ███████    ██    ███████ ██ ███████ ███████ ███████
    // =============================================================================================
    // @codekit-prepend "../node_modules/lazysizes/lazysizes.js"
    window.lazySizesConfig = window.lazySizesConfig || {};
    // window.lazySizesConfig.init = false;
    lazySizesConfig.loadMode = 2;
    lazySizesConfig.expFactor = 4;
    lazySizesConfig.expand = 1000;
    //add simple support for background images:
    document.addEventListener('lazybeforeunveil', function(e) {
        var bg = e.target.getAttribute('data-bg');
        if (bg) {
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
    });

    // -----  End of LAZYSIZES  ---------------------------------------------


    // =============================================================================================
    // AUTOFOCUS GOOGLE SITE SEARCH
    // =============================================================================================
    $('#searchModal').on('open.zf.reveal', function() {
        // document.getElementById('#gsc-i-id1').focus();
        // console.log('Reveal opened!');
        setTimeout("document.getElementById('gsc-i-id1').focus().setAttribute('placeholder', 'Type to search…');", 550);
    });


    // -----  End of AUTOFOCUS GOOGLE SITE SEARCH  ---------------------------------------------




    // =============================================================================================
    // TABS TITLE SCROLL TO TOP
    // =============================================================================================

    $(".tabs-title").on("click", function() {
        $(window).scrollTop(1);
    });

    // -----  End of TABS TITLE SCROLL TO TOP  ---------------------------------------------


    // ===================================================================================================
    //  █████  ███    ██ ██ ███    ███ ███████ ██ ████████ ██  ██████  ███    ██
    // ██   ██ ████   ██ ██ ████  ████ ██      ██    ██    ██ ██    ██ ████   ██
    // ███████ ██ ██  ██ ██ ██ ████ ██ ███████ ██    ██    ██ ██    ██ ██ ██  ██
    // ██   ██ ██  ██ ██ ██ ██  ██  ██      ██ ██    ██    ██ ██    ██ ██  ██ ██
    // ██   ██ ██   ████ ██ ██      ██ ███████ ██    ██    ██  ██████  ██   ████
    // ===================================================================================================

    // $("a").addClass("animsition-link");
    // $(".tabs-title a, a.cd-nav-trigger, li.go-back a, .my-gallery a, #writing-suggested-readings .button, .menu li a, #original-article-link").removeClass("animsition-link");
    // $(".animsition").animsition({
    //     inClass: "fade-in",
    //     outClass: "fade-out",
    //     inDuration: 1500,
    //     outDuration: 800,
    //     linkElement: ".animsition-link",
    //     // e.g. linkElement: "a:not([target="_blank"]):not([href^=#])"
    //     loading: true,
    //     loadingParentElement: "body", //animsition wrapper element
    //     loadingClass: "animsition-loading",
    //     loadingInner: "", // e.g "<img src="loading.svg" />"
    //     timeout: true,
    //     timeoutCountdown: 5000,
    //     onLoadEvent: true,
    //     browser: ["animation-duration", "-webkit-animation-duration"],
    //     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    //     overlay: false,
    //     overlayClass: "animsition-overlay-slide",
    //     overlayParentElement: "body",
    //     transition: function(url) {
    //         window.location.href = url;
    //     }
    // });

    // =====  End of ANIMSITION PAGE TRANSITION  =====




    // =================================================================================================
    // ███████  ██████ ██████   ██████  ██      ██
    // ██      ██      ██   ██ ██    ██ ██      ██
    // ███████ ██      ██████  ██    ██ ██      ██
    //      ██ ██      ██   ██ ██    ██ ██      ██
    // ███████  ██████ ██   ██  ██████  ███████ ███████
    // ██    ██ ██████
    // ██    ██ ██   ██
    // ██    ██ ██████
    // ██    ██ ██
    //  ██████  ██
    // ==================================================================================================
    // @codekit-prepend "../bower_components/scrollup/dist/jquery.scrollUp.min.js"
    $.scrollUp({
        scrollName: "scrollUp", // Element ID
        topDistance: "800", // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: "slide", // Fade, slide, none
        animationInSpeed: 500, // Animation in speed (ms)
        animationOutSpeed: 300, // Animation out speed (ms)
        scrollText: "Scroll to top", // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g "#00FFFF"
        scrollImg: true,
        zIndex: 10
    });

    // =====  End of SCROLL UP  =====




    // ===================================================================================================
    // ███████  ██████ ██████   ██████  ██      ██
    // ██      ██      ██   ██ ██    ██ ██      ██
    // ███████ ██      ██████  ██    ██ ██      ██
    //      ██ ██      ██   ██ ██    ██ ██      ██
    // ███████  ██████ ██   ██  ██████  ███████ ███████
    // ██████   ██████  ██     ██ ███    ██
    // ██   ██ ██    ██ ██     ██ ████   ██
    // ██   ██ ██    ██ ██  █  ██ ██ ██  ██
    // ██   ██ ██    ██ ██ ███ ██ ██  ██ ██
    // ██████   ██████   ███ ███  ██   ████
    // ===================================================================================================

    $("#original-article-link").click(function() {
        $("html,body").animate({
            scrollTop: $("#original-article").offset().top
        }, "1000");
        return false;
    });

    // =====  End of SCROLL DOWN TO ORIGINAL ARTICLE  =====



    // ===================================================================================================
    // ██████  ███████  █████  ██████  ██ ███    ██  ██████
    // ██   ██ ██      ██   ██ ██   ██ ██ ████   ██ ██
    // ██████  █████   ███████ ██   ██ ██ ██ ██  ██ ██   ███
    // ██   ██ ██      ██   ██ ██   ██ ██ ██  ██ ██ ██    ██
    // ██   ██ ███████ ██   ██ ██████  ██ ██   ████  ██████
    // ██████  ██████   ██████   ██████  ██████  ███████ ███████ ███████
    // ██   ██ ██   ██ ██    ██ ██       ██   ██ ██      ██      ██
    // ██████  ██████  ██    ██ ██   ███ ██████  █████   ███████ ███████
    // ██      ██   ██ ██    ██ ██    ██ ██   ██ ██           ██      ██
    // ██      ██   ██  ██████   ██████  ██   ██ ███████ ███████ ███████
    // ===================================================================================================

    // $(window).load(function() {
    //     $(window).scroll(function() {
    //         var wintop = $(window).scrollTop(),
    //             docheight = $('body').height(),
    //             winheight = $(window).height();
    //         // console.log(wintop);
    //         var totalScroll = (wintop / (docheight - winheight)) * 100;
    //         // console.log("total scroll" + totalScroll);
    //         $(".progress-bar").css("width", totalScroll + "%");
    //     });
    // 
    // });

    // FROM: https://alligator.io/js/progress-bar-javascript-css-variables/
    $(function() {
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight',
            progress = document.querySelector('.progress-bar'),
            scroll;

        document.addEventListener('scroll', function() {
            scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            progress.style.setProperty('--scroll', scroll + '%');
        });
    });

    // =====  End of READING PROGRESS INDICATOR  =====



    // ===================================================================================================
    // ███████ ██      ██  ██████ ██   ██
    // ██      ██      ██ ██      ██  ██
    // ███████ ██      ██ ██      █████
    //      ██ ██      ██ ██      ██  ██
    // ███████ ███████ ██  ██████ ██   ██
    // ██████  █████  ██████   ██████  ██    ██ ███████ ███████ ██
    // ██      ██   ██ ██   ██ ██    ██ ██    ██ ██      ██      ██
    // ██      ███████ ██████  ██    ██ ██    ██ ███████ █████   ██
    // ██      ██   ██ ██   ██ ██    ██ ██    ██      ██ ██      ██
    // ██████ ██   ██ ██   ██  ██████   ██████  ███████ ███████ ███████
    // ===================================================================================================
    // // =====
    // // Change element when it has scrolled into or out of view. 
    // // From this jsFiddle: http://jsfiddle.net/tovic/vVaat/light/
    // // =====
    // function isScrolledIntoView(elem) {
    //     var $window = $(window),
    //         docViewTop = $window.scrollTop(),
    //         docViewBottom = docViewTop + $window.height(),
    //         elemTop = $(elem).offset().top,
    //         elemBottom = elemTop + $(elem).outerHeight(),
    //         threshold = 0;
    //     return ((elemBottom <= docViewBottom + threshold) && (elemTop >= docViewTop - threshold));
    // }
    // $(function() {
    //     $(window).on("scroll", function() {
    //         $('.slick-carousel').each(function() {
    //             if (isScrolledIntoView(this)) {
    //                 // $(this).addClass('active-carousel').find('.slick-list').attr('tabindex', -1).focus();
    //                 $(this).find('.slick-list').attr('tabindex', -1).focus();
    //                 $(this).find('.slick-slide').height('auto');
    //                 // $(this).find('.slick-list').height('auto');
    //                 $(this).slick('setOption', null, null, true);
    //                 // console.log("Carousel IN!");
    //                 // setTimeout(function() {
    //                 //     $(document).find('.slick-list').attr('tabindex', -1).focus();
    //                 // }, 100);
    //             } else {
    //                 // // $(this).removeClass('active-carousel').find('.slick-list').attr('tabindex', -1).blur();
    //                 $(this).find('.slick-list').attr('tabindex', -1).blur();
    //                 // // console.log("Carousel OUT!");
    //                 // // setTimeout(function() {
    //                 // //     $(document).find('.slick-list').attr('tabindex', -1).blur();
    //                 // // }, 100);
    //             }
    //         });
    // 
    //     });
    // 
    //     $(".slick-carousel").slick({
    //         infinite: true,
    //         speed: 300,
    //         centerMode: true,
    //         lazyLoad: 'ondemand',
    //         centerPadding: '180px',
    //         adaptiveHeight: true,
    //         dots: true,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         responsive: [
    //             {
    //                 breakpoint: 1025,
    //                 settings: {
    //                     centerPadding: '0px',
    //                     dots: false
    //                 }
    //         },
    //             {
    //                 breakpoint: 769,
    //                 settings: {
    //                     centerPadding: '0px',
    //                     dots: false
    //                 }
    //         },
    //             {
    //                 breakpoint: 375,
    //                 settings: {
    //                     dots: false,
    //                     centerPadding: '100px',
    //                 }
    //         }
    //         // You can unslick at a given breakpoint now by adding:
    //         // settings: "unslick"
    //         // instead of a settings object
    //       ]
    //     });
    // });


    // =====  End of SLICK CAROUSEL  =====


    // ===================================================================================
    // ███████ ██     ██ ██ ██████  ███████ ██████
    // ██      ██     ██ ██ ██   ██ ██      ██   ██
    // ███████ ██  █  ██ ██ ██████  █████   ██████
    //      ██ ██ ███ ██ ██ ██      ██      ██   ██
    // ███████  ███ ███  ██ ██      ███████ ██   ██
    //  ██████  █████  ██████   ██████  ██    ██ ███████ ███████ ██
    // ██      ██   ██ ██   ██ ██    ██ ██    ██ ██      ██      ██
    // ██      ███████ ██████  ██    ██ ██    ██ ███████ █████   ██
    // ██      ██   ██ ██   ██ ██    ██ ██    ██      ██ ██      ██
    //  ██████ ██   ██ ██   ██  ██████   ██████  ███████ ███████ ███████
    // ===================================================================================
    // @codekit-prepend "../node_modules/swiper/js/swiper.min.js"
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoHeight: true,
        centeredSlides: true,
        grabCursor: true,
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 5
        },
        loadOnTransitionStart: true,
        breakpoints: {
            375: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        },
        keyboard: {
            enabled: true
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // -----  End of SWIPER CAROUSEL  -----------------------------------


    // ===================================================================================
    // ███████ ██      ██  ██████ ██   ██ ██ ████████ ██    ██
    // ██      ██      ██ ██      ██  ██  ██    ██     ██  ██
    // █████   ██      ██ ██      █████   ██    ██      ████
    // ██      ██      ██ ██      ██  ██  ██    ██       ██
    // ██      ███████ ██  ██████ ██   ██ ██    ██       ██
    // ===================================================================================
    // $('.flickity-carousel').flickity({
    //     cellAlign: 'center',
    //     wrapAround: true,
    //     adaptiveHeight: true,
    //     lazyLoad: 3,
    // });


    // -----  End of FLICKITY  -----------------------------------


    // ===================================================================================================
    // ██   ██ ███████  █████  ██████  ███████ ██████      ███████  ██████   ██████  ████████ ███████ ██████
    // ██   ██ ██      ██   ██ ██   ██ ██      ██   ██     ██      ██    ██ ██    ██    ██    ██      ██   ██
    // ███████ █████   ███████ ██   ██ █████   ██████      █████   ██    ██ ██    ██    ██    █████   ██████
    // ██   ██ ██      ██   ██ ██   ██ ██      ██   ██     ██      ██    ██ ██    ██    ██    ██      ██   ██
    // ██   ██ ███████ ██   ██ ██████  ███████ ██   ██     ██       ██████   ██████     ██    ███████ ██   ██
    // ██████   █████  ██████   █████  ██      ██       █████  ██   ██
    // ██   ██ ██   ██ ██   ██ ██   ██ ██      ██      ██   ██  ██ ██
    // ██████  ███████ ██████  ███████ ██      ██      ███████   ███
    // ██      ██   ██ ██   ██ ██   ██ ██      ██      ██   ██  ██ ██
    // ██      ██   ██ ██   ██ ██   ██ ███████ ███████ ██   ██ ██   ██
    // ===================================================================================================
    // function scrollFooter(scrollY, heightFooter) {
    //     // console.log(scrollY);
    //     // console.log(heightFooter);
    // 
    //     if (scrollY >= heightFooter) {
    //         $("footer").css({
    //             "bottom": "0px",
    //             "z-index": "2"
    //         });
    //     } else {
    //         $("footer").css({
    //             "bottom": "-" + heightFooter + "px",
    //             "z-index": "0"
    //         });
    //     }
    // }
    // 
    // $(window)
    //     .load(function() {
    //         var windowHeight = $(window).height(),
    //             footerHeight = $("footer").height(),
    //             heightDocument = (windowHeight) + ($(".content").height());
    // 
    //         // Definindo o tamanho dos elementos header e conteÃºdo
    //         // $(".wrapper-parallax").css({
    //         //     "margin-top": windowHeight + "px"
    //         // });
    // 
    //         scrollFooter(window.scrollY, footerHeight);
    // 
    //         // ao dar rolagem
    //         window.onscroll = function() {
    //             var scroll = window.scrollY;
    // 
    //             scrollFooter(scroll, footerHeight);
    //         };
    //     });

    // function scrollFooter(scrollY, heightFooter) {
    //     console.log(scrollY);
    //     console.log(heightFooter);
    // 
    //     if (scrollY >= heightFooter) {
    //         $('footer').css({
    //             'bottom': '0px'
    //         });
    //     } else {
    //         $('footer').css({
    //             'bottom': '-' + heightFooter + 'px'
    //         });
    //     }
    // }
    // 
    // $(window).load(function() {
    //     var windowHeight = $(window).height(),
    //         footerHeight = $('footer').height(),
    //         heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;
    // 
    //     // Definindo o tamanho do elemento pra animar
    //     $('#scroll-animate, #scroll-animate-main').css({
    //         'height': heightDocument + 'px'
    //     });
    // 
    //     // Definindo o tamanho dos elementos header e conteúdo
    //     $('.imageHeader-full').css({
    //         'height': windowHeight + 'px',
    //         'line-height': windowHeight + 'px'
    //     });
    // 
    //     $('.cd-main-content').css({
    //         'margin-top': windowHeight + 'px'
    //     });
    // 
    //     scrollFooter(window.scrollY, footerHeight);
    // 
    //     // ao dar rolagem
    //     window.onscroll = function() {
    //         var scroll = window.scrollY;
    // 
    //         $('#scroll-animate-main').css({
    //             'top': '-' + scroll + 'px'
    //         });
    // 
    //         $('.imageHeader-full').css({
    //             'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
    //         });
    // 
    //         scrollFooter(scroll, footerHeight);
    //     };
    // });

    // =====  End of HEADER FOOTER PARALLAX  =====




    // ================================================================================================
    // ██   ██ ███████  █████  ██████  ██████   ██████   ██████  ███    ███
    // ██   ██ ██      ██   ██ ██   ██ ██   ██ ██    ██ ██    ██ ████  ████
    // ███████ █████   ███████ ██   ██ ██████  ██    ██ ██    ██ ██ ████ ██
    // ██   ██ ██      ██   ██ ██   ██ ██   ██ ██    ██ ██    ██ ██  ██  ██
    // ██   ██ ███████ ██   ██ ██████  ██   ██  ██████   ██████  ██      ██
    // =================================================================================================

    var lastScroll = 0;

    $("header").addClass("nav-down nav-up");

    $(window).scroll(function() {
        setTimeout(function() { //give them a second to finish scrolling before doing a check
            var scroll = $(window).scrollTop();
            if (scroll > lastScroll + 10) {
                $("header").removeClass("nav-down");
            } else if (scroll < lastScroll - 10) {
                $("header").addClass("nav-down");
            }
            lastScroll = scroll;
        }, 250);
    });

    // =====  End of HEADROOM  =====

    // ===================================================================================================
    // ██████  ███████  █████  ██████  ██ ███    ██  ██████
    // ██   ██ ██      ██   ██ ██   ██ ██ ████   ██ ██
    // ██████  █████   ███████ ██   ██ ██ ██ ██  ██ ██   ███
    // ██   ██ ██      ██   ██ ██   ██ ██ ██  ██ ██ ██    ██
    // ██   ██ ███████ ██   ██ ██████  ██ ██   ████  ██████
    // ████████ ██ ███    ███ ███████
    //    ██    ██ ████  ████ ██
    //    ██    ██ ██ ████ ██ █████
    //    ██    ██ ██  ██  ██ ██
    //    ██    ██ ██      ██ ███████
    // ===================================================================================================
    // @codekit-prepend "../node_modules/reading-time/build/readingTime.min.js"
    $(function() {
        $('.cd-main-content').readingTime({
            readingTimeTarget: $('.reading-time'),
            round: true,
            success: function(data) {
                console.log(data);
            },
            error: function(data) {
                console.log(data.error);
                $('.reading-time').remove();
            }
        });
    });
    // $(function() {
    //     var $article = $('.cd-main-content');
    // 
    //     $article.readingTime({
    //         readingTimeAsNumber: true,
    //         readingTimeTarget: $article.find('.reading-time'),
    //         // wordCountTarget: $article.find('.word-count'),
    //         wordsPerMinute: 275,
    //         round: false,
    //         lang: 'en'
    //     });
    // });

    // =====  End of READING TIME ESTIMATOR  =====

    // =============================================================================================
    // ██████  ███████ ██      ██       █████  ██   ██
    // ██   ██ ██      ██      ██      ██   ██  ██ ██
    // ██████  █████   ██      ██      ███████   ███
    // ██   ██ ██      ██      ██      ██   ██  ██ ██
    // ██   ██ ███████ ███████ ███████ ██   ██ ██   ██
    // =============================================================================================
    // @codekit-prepend "../node_modules/rellax/rellax.min.js"
    var rellax = new Rellax('.rellax', {
        // speed: -2,
        center: true,
        // wrapper: '.rellax-wrapper',
        // round: true,
        // vertical: true,
        // horizontal: false
    });

    // -----  End of RELLAX  ---------------------------------------------



    // =============================================================================================
    // ██████   ██████   ██████     ██████  ███████  █████  ██████  ██    ██
    // ██   ██ ██    ██ ██          ██   ██ ██      ██   ██ ██   ██  ██  ██
    // ██   ██ ██    ██ ██          ██████  █████   ███████ ██   ██   ████
    // ██   ██ ██    ██ ██          ██   ██ ██      ██   ██ ██   ██    ██
    // ██████   ██████   ██████     ██   ██ ███████ ██   ██ ██████     ██
    // ███████ ███    ██ ██████
    // ██      ████   ██ ██   ██
    // █████   ██ ██  ██ ██   ██
    // ██      ██  ██ ██ ██   ██
    // ███████ ██   ████ ██████
    // =============================================================================================
});


// =============================================================================================
//  ██████  ██    ██ ██  ██████ ██   ██ ██      ██ ███    ██ ██   ██
// ██    ██ ██    ██ ██ ██      ██  ██  ██      ██ ████   ██ ██  ██
// ██    ██ ██    ██ ██ ██      █████   ██      ██ ██ ██  ██ █████
// ██ ▄▄ ██ ██    ██ ██ ██      ██  ██  ██      ██ ██  ██ ██ ██  ██
//  ██████   ██████  ██  ██████ ██   ██ ███████ ██ ██   ████ ██   ██
//     ▀▀
// =============================================================================================

// window.addEventListener('load', () =>{
//    quicklink();
// });
// quicklink();
// import quicklink from "../node_modules/quicklink/dist/quicklink.mjs";
// quicklink();

// -----  End of QUICKLINK  ---------------------------------------------




// =====================================================================================
// ███████ ██     ██ ██    ██ ██████
// ██      ██     ██ ██    ██ ██   ██
// ███████ ██  █  ██ ██    ██ ██████
//      ██ ██ ███ ██ ██    ██ ██
// ███████  ███ ███   ██████  ██
// =====================================================================================

// import Swup from 'swup';
// var swupOptions = {
//     LINK_SELECTOR: 'a[class*="swup"]',
//     animationSelector: '[class*="swup-transition-"]',
//     pageClassPrefix: false,
// };
// var swup = new Swup(swupOptions);
// 
// swup.on('contentReplaced', function () {
//     navInit();
// });

// -----  End of SWUP  ---------------------------------------------



// ===================================================================================
// ██████   █████  ██████  ██   ██     ███    ███  ██████  ██████  ███████
// ██   ██ ██   ██ ██   ██ ██  ██      ████  ████ ██    ██ ██   ██ ██
// ██   ██ ███████ ██████  █████       ██ ████ ██ ██    ██ ██   ██ █████
// ██   ██ ██   ██ ██   ██ ██  ██      ██  ██  ██ ██    ██ ██   ██ ██
// ██████  ██   ██ ██   ██ ██   ██     ██      ██  ██████  ██████  ███████
// ===================================================================================
var options = {
    // bottom: '32px', // default: '32px'
    // right: '32px', // default: '32px'
    // left: 'unset', // default: 'unset'
    // time: '0.3s', // default: '0.3s'
    // mixColor: '#fff', // default: '#fff'
    // backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#121212', // default: '#100f2c'
    // buttonColorLight: '#fff', // default: '#fff'
    // saveInCookies: true, // default: true,
    label: '&#9680;', // default: '🌓'
    // autoMatchOsTheme: true // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
// -----  End of DARK MODE  -----------------------------------
