$(document).ready(function() {
  //----- HELPERS

  // check for scroll bar presence
  $.fn.hasHScrollBar = function() {
    return this.get(0).scrollWidth > this.innerWidth();
  }

  //----- INITIALIZERS

  //loading first Tab - ALL
  document.getElementById("defaultOpen").click();

  //----- RESIZE EVTS

  //check if on resize a scrollbar is present for
  // svg icons row in work tabs
  $(window).on('resize', function() {
    if ($('.scrollableX').hasHScrollBar()) {
      // if a scroll bar is present, show the right arrow
      // console.log('resize---------- has scroll bar!')
      $('.rt-arrow-libs').removeClass('dontShowArrow')
      $('.rt-arrow-libs').addClass('doShow')
    } else if (!$('.scrollableX').hasHScrollBar()) {
      // if a scroll bar is NOT  present, hide the right arrow
      // console.log('resize---------- no scroll bar!')
      $('.rt-arrow-libs').removeClass('doShow')
      $('.rt-arrow-libs').addClass('dontShowArrow')
    }
  })
  //----- SLICK CONFIG
  $('.js-slick').slick({
    slidesToShow: 1,
    centerMode: true,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='/assets/images/lt-arrow.png'>",
    nextArrow: "<img class='a-right control-c next slick-next'  id='stopPlayback' src='/assets/images/rt-arrow.png'>",
    draggable: true,
    infinite: false,
    speed: 1000
  });


  //----- ANIMATIONS WHEN IN VIEWPORT
  // $('.device-container, .coffee-good-mobile, .coffee-good').addClass("dontShow").viewportChecker({classToAdd: 'doShow animated  full-visible fadeInRight', offset: 1000});
  $('.hello-sub-text, .USA, .animated-blog-post,.coffee-title, .form-wrapper, .contact-icons').addClass("dontShow").viewportChecker({classToAdd: 'doShow full-visible animated fadeInUp', offset: 0});
  $('.device-container, .coffee-can').addClass("dontShow").viewportChecker({classToAdd: 'doShow full-visible animated fadeInRight', offset: 90});
  $('.wrapper-desc, .slick-slider, .tab-title-container, .scrollableX, .post, .tabcontent .wrapper-desc').addClass("dontShow").viewportChecker({classToAdd: 'doShow full-visible animated fadeInUp', offset: 0});

  //ON SCROLL FN FOR SVG ICON ROW IN WORK TABS
  $(function() {

    function checkScroll(tabName) {
      // console.log('TABNAME----', tabName)
      var $elem = $('.scrollableX');
      var newScrollLeft = $elem.scrollLeft(),
        width = $elem.width(),
        scrollWidth = $elem.get(0).scrollWidth,
        offset = $(`#${tabName + ' .rt-arrow-libs'}`).width(),
        padding = 16;

      // console.log('width------- ', width)
      // console.log('scrollWidth------- ', scrollWidth)
      // console.log('newScrollLeft------- ', newScrollLeft)
      // console.log('offset------- ', offset)
      // current scrollPos
      var scrollPos = width + newScrollLeft + offset - padding;

      // Tolerances
      var scrollErrorMinus = scrollWidth - 80;
      var scrollErrorPlus = scrollWidth + 150;

      // Helper fn to check if scroll is at far right
      function between(x, min, max) {
        // console.log('Is scrollPos of ', x, ' between ', min, ' and ', max, ' ?')
        return x >= min && x <= max;
      }

      // CONDITIONALS TO DETERMINE SCROLLPOS
      if (between(scrollPos, scrollErrorMinus, scrollErrorPlus)) {
        // check if we are at the right-end
        $('.rt-arrow-libs').removeClass('doShow')
        $('.rt-arrow-libs').addClass('dontShowArrow')
        // console.log('between------- at right');
      } else if (newScrollLeft === 0) {
        // check if we are at the left-end))
        // console.log('at----- left')
        $('.rt-arrow-libs').removeClass('dontShowArrow')
        $('.rt-arrow-libs').addClass('doShow')
      } else {
        // we are neither far left or right)
        $('.rt-arrow-libs').addClass('doShow')
        $('.rt-arrow-libs').removeClass('dontShowArrow')
      }
    }
    $('.horizonScroll1').on('scroll', function() {
      checkScroll('ALLtab')
    });
    $('.horizonScroll2').on('scroll', function() {
      checkScroll('UItab')
    });
    $('.horizonScroll3').on('scroll', function() {
      checkScroll('UXtab')
    });
    $('.horizonScroll4').on('scroll', function() {
      checkScroll('Devtab')
    });
  });

  // amimating navbar properties
  var $navbar = $("#mNavbar");
  var $navbarLogo = $("#mNavbar-logo");

  AdjustHeader(); // Incase the user loads the page from halfway down (or something);
  $(window).scroll(function() {
    AdjustHeader();
  });

  function AdjustHeader() {
    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome) && (is_safari)) {
      is_safari = false;
    }
    if ((is_chrome) && (is_opera)) {
      is_chrome = false;
    }
    if ($(window).scrollTop() > 140) {
      // if scrolled down past 100
      // scale the logo & size of navbar

      TweenMax.to(".blog-logo", .25, {
        transform: "scale(0.8)",
        transformOrigin: "0 0",
        ease: Linear.easeNone
      });

      if (is_safari) {
        TweenMax.set(".navbar-default", {
          minHeight: "80px",
          autoRound: false,
          ease: Linear.easeNone,
          webkitTransition: "delay: 0s",
          transitionDelay: "0s"
        });
      } else {
        TweenMax.to(".navbar-default", .25, {
          minHeight: "80px",
          autoRound: false,
          ease: Linear.easeNone
        });
      }
    } else {
      //if at top
      //scale logo and navbar
      TweenMax.to(".blog-logo", .25, {
        transform: "scale(1)",
        transformOrigin: "0 0",
        ease: Linear.easeNone
      });
      if (is_safari) {
        TweenMax.set(".navbar-default", {
          minHeight: "80px",
          autoRound: false,
          webkitTransition: "delay: 0s",
          transitionDelay: "0s",
          ease: Linear.easeNone
        });
      } else {
        TweenMax.to(".navbar-default", .25, {
          minHeight: "100px",
          autoRound: false,
          ease: Linear.easeNone
        });
      }
    }
  }
});
