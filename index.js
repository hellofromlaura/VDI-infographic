$(function(){
  $('[data-bs-toggle="tooltip"]').tooltip();
});



// Slider
var SlideIndex = 0;
let isMobile = false;

var x = window.matchMedia("(max-width: 768px)");
showSlides(SlideIndex);
myFunction(x);
x.addEventListener("change", myFunction);
x.addEventListener("change", function(){ location.reload(); });

function plusSlides(plus) {
    showSlides(SlideIndex += plus);
}

function showSlides(n) {
    var slides  = document.getElementsByClassName("mySlides");
    if (isMobile) {
      if ((n) > 9) {
        SlideIndex = 0
      }
      if ((n) < 0) {
          SlideIndex = slides.length - 1
      }
        if(n >= 1 && n < 3) {       
            slides[0].style.display = "block";
            slides[1].style.display = "none";
            slides[2].style.display = "none";
        }
        if(n >= 3 && n < 6) {        
            slides[1].style.display = "block";
            slides[0].style.display = "none";
            slides[2].style.display = "none";
        }
        if(n >= 6 && n <= 8) {        
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

var glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    rewind: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        breakpoint: 768,
        draggable: true,
        rewind: true,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          duration: 0.25
        }
      }
    ]
  });