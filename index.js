// Slider
var SlideIndex = 0;
let isMobile = false;
var x = window.matchMedia("(max-width: 700px)");
showSlides(SlideIndex);
myFunction(x);

function plusSlides(plus) {
    showSlides(SlideIndex += plus);
}

function showSlides(n) {
    var slides  = document.getElementsByClassName("mySlides");
    var active = getCurrentGlider();
    if (isMobile) {
        if(active == 8 || active == 0 || active == 1) {
            slides[0].style.display = "block";
            slides[1].style.display = "none";
            slides[2].style.display = "none";
        }
        if(active == 2 || active == 3 || active == 4) {
            slides[1].style.display = "block";
            slides[0].style.display = "none";
            slides[2].style.display = "none";
        }
        if(active == 5 || active == 6 || active == 7) {
            slides[2].style.display = "block";
            slides[1].style.display = "none";
            slides[0].style.display = "none";
        }
    } 
    if (!isMobile) {
        if ((n) >= slides.length) {
            SlideIndex = 0
        }
        if ((n) < 0) {
            SlideIndex = slides.length - 1
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[SlideIndex].style.display = "block";
    }
}
function getCurrentGlider() {
    var active = 1;
    if (isMobile) {
        var gliders = document.getElementsByClassName("glider-slide");
        for (var i = 0; i < gliders.length; i++) {
            if (gliders[i].classList.contains('active')) {
                console.log(i)
                active = i;
            }
        }
    } 
    return active;
}

function myFunction(x) {
    if (x.matches) { 
      isMobile = true;
    } else {
      isMobile = false;
    }
  }
  
jQuery(function($) {
    var doAnimations = function() {
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }
          $animatables.each(function(i) {
         var $animatable = $(this);
              if (($animatable.offset().top + $animatable.height() - 20) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
              }
      });
      };
      $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  });
  
//   https://nickpiscitelli.github.io/Glider.js/

  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '.dots',
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rewind: true,
          duration: 0.25
        }
      }
    ]
  });