$(document).ready(function() {

  $('.js-slick').slick({
    slidesToShow: 1,
    centerMode: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='/assets/images/lt-arrow-slick.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='/assets/images/rt-arrow-slick.png'>",
    draggable: true,
    infinite: false,
    speed: 1000
  });

  // animating elements in when in viewport
  function androidSucks() {
    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      }
    };
    if (isMobile.Android()) {
      return false;
    } else {
      console.log('NEXTYYYYYY')
      $('.mockZ, .aboutMeText').addClass("dontShow").viewportChecker({classToAdd: 'doShow animated fadeInUp', offset: 200});

      // $('.post:nth-child(3),.post:nth-child(6)').addClass("dontShow").viewportChecker({classToAdd: 'doShow animated fadeInUp', offset: 265});
    }
  }
  androidSucks();
  // starting typed animation when in viewport
  $('.inspo').viewportChecker({
    callbackFunction: function() {
      $(".inspo").typed({
        strings: [
          "WORK",
          "CREATE",
          "INSPIRE",
          "DISRUPT",
          "SUCCEED",
          "DESIGN"
        ],
        typeSpeed: 75,
        backDelay: 500,
        backSpeed: 75,
        loop: true,
        loopCount: false
      });
    }
  });

  $('.nexty').viewportChecker({classToAdd: 'nextyyy', offset: 200});


  // amimating navbar properties
  var $navbar = $("#mNavbar");
  var $navbarLogo = $("#mNavbar-logo");
  // $('.js-tilt').tilt({scale: 1.2})

  AdjustHeader(); // Incase the user loads the page from halfway down (or something);
  $(window).scroll(function() {
    AdjustHeader();
  });

  function AdjustHeader() {
    // if ($(window).scrollTop() > 100) {
    //   if (!$navbar.hasClass("navbar-fixed-top ")) {
    //     $navbar.removeClass("navbar-scale");
    //     $navbarLogo.addClass("blog-logo-top")
    //   }
    // } else {
    //   $navbarLogo.removeClass("blog-logo-top");
    //   $navbar.addClass("navbar-scale");
    // }

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
      // console.log('BOT')
      // if scrolled down past 100
      // scale the logo & size of navbar

      TweenMax.to(".blog-logo", .25, {
        transform: "scale(0.8)",
        transformOrigin: "0 0",
        ease: Linear.easeNone

      });

      if (is_safari) {
        TweenMax.set(".navbar-default", {
          minHeight: "92px",
          autoRound: false,
          ease: Linear.easeNone,
          webkitTransition: "delay: 0s",
          transitionDelay: "0s"
        });
      } else {
        TweenMax.to(".navbar-default", .25, {
          minHeight: "92px",
          autoRound: false,
          ease: Linear.easeNone
        });

      }

    } else {

      // console.log('TOP')
      //if at top
      //scale logo and navbar
      TweenMax.to(".blog-logo", .25, {
        transform: "scale(1)",
        transformOrigin: "0 0",
        ease: Linear.easeNone
      });
      if (is_safari) {
        TweenMax.set(".navbar-default", {
          minHeight: "92px",
          autoRound: false,
          webkitTransition: "delay: 0s",
          transitionDelay: "0s",
          ease: Linear.easeNone
        });
      } else {
        TweenMax.to(".navbar-default", .25, {
          minHeight: "120px",
          autoRound: false,
          ease: Linear.easeNone

        });

      }
    }
  }

});
