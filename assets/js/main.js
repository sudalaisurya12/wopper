document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* POPUP VIDEO */
  if ($(".video-btn").length) {
    $(".video-btn").on("click", function () {
      $.fancybox({
        href: this.href,
        type: $(this).data("type"),
        title: this.title,
        helpers: {
          title: { type: "inside" },
          media: {},
        },

        beforeShow: function () {
          $(".fancybox-wrap").addClass("gallery-fancybox");
        },
      });
      return false;
    });
  }

  $(window).on("load", function () {
    $(".fancybox").fancybox();
  });

  $(document).ready(function () {
    $(".carousel").slick({
      autoplay: false, // Enable autoplay
      autoplaySpeed: 2000, // Set autoplay speed in milliseconds (e.g., 2000 = 2 seconds)
      dots: false, // Hide navigation dots (optional)
      arrows: false, // Hide navigation arrows (optional)
      infinite: true, // Enable infinite loop
      // Add any other options or callbacks as needed
    });
  });

  $(".offersCarousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left sliderArwClr" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right sliderArwClr" aria-hidden="true"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 700,
    fluidSpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1,
        smartSpeed: 900,
        fluidSpeed: 900,
      },
      426: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1024: {
        items: 2,
      },
      1400: {
        items: 2,
      },
    },
  });

  $(".newArrivalsCarousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left newArrivalsCrsl" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right newArrivalsCrsl" aria-hidden="true"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 700,
    fluidSpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    dots: false,

    responsive: {
      0: {
        items: 1,
        smartSpeed: 900,
        fluidSpeed: 900,
      },
      426: {
        items: 1,
      },
      768: {
        items: 2,
      },
      575: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 4,
      },
    },
  });

  $(".testimonialsCrsl").owlCarousel({
    loop: true,
    margin: 100,

    nav: true,
    navText: [
      '<i class="fa fa-chevron-left newArrivalsCrsl" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right newArrivalsCrsl" aria-hidden="true"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 700,
    fluidSpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    dots: false,

    responsive: {
      0: {
        items: 1,
        smartSpeed: 900,
        fluidSpeed: 900,
      },
      426: {
        items: 1,
      },
      767: {
        items: 1,
      },
      768: {
        items: 1,
      },
      576: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1024: {
        items: 2,
      },
      1200: {
        items: 2,
      },
      1400: {
        items: 2,
      },
    },
  });


  $(".blogCarosouel").owlCarousel({
    loop: true,
    margin: 100,
    nav: false,
    navText: [
      '<i class="fa fa-chevron-left newArrivalsCrsl" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right newArrivalsCrsl" aria-hidden="true"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 700,
    fluidSpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    dots: false,

    responsive: {
      0: {
        items: 1,
        smartSpeed: 900,
        fluidSpeed: 900,
      },
      426: {
        items: 1,
      },
      767: {
        items: 1,
      },
      768: {
        items: 1,
      },
      576: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 4,
      },
      2560: {
        items: 4,
      },
    },
  });


		window.onscroll = function () { myFunction() };

		var header = document.getElementById("stickyHeader");
		var sticky = header.offsetTop;

		function myFunction() {
			if (window.pageYOffset > sticky) {
				header.classList.add("sticky");
			} else {
				header.classList.remove("sticky");
			}
		}
    $(function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 130,
        max: 500,
        values: [ 130, 250 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    });
 
});
