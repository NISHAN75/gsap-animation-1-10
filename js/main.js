
// gsap scroll animation start
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".square", {
// //   x: 1000,
//   duration: 8,
//   scrollTrigger: {
//     trigger: ".square2",
//     start: "top 80%",
//     end:"top 30%",
// 	scrub: 4,
// 	toggleActions:"restart none none none ",
// 	pin:".square",
// 	pinSpacing:true,
// 	markers: {
// 		startColor:"purple",
// 		endColor: "fuchsia",
// 		fontSize:"2rem",
// 	},
//   },
  
// });

// Timeline
// gsap.to(".box" , {
// 	x:500,
// 	duration: 5
// });
// gsap.to(".box", {
// 	y: 200,
// 	duration: 3,
// 	delay:2,
// });
// gsap.to(".box", {
// 	x:0 ,
// 	duration: 2 ,
// 	 delay:5
// });
// gsap.to(".box", {
// 	y:0 ,
// 	duration: 2 ,
// 	 delay:8
// });

// const tl = gsap.timeline();

// tl.to(".box" , {x:500, duration:5})
//   .to(".box" , {y:200 , duration: 2})
//   .to(".box", {x:0 , duration: 2})

// const tl = gsap.timeline({
// 	scrollTrigger:{
// 		trigger:".box",
// 	    markers:true,
// 		start: "top 80%",
// 		end: "top 30%",
// 		scrub:1
// 	}
// });

// tl.to(".box" , {x:500 , duration:5})
//   .to(".box" , {y:200 , duration:2})
//   .to(".box" , {x:0 , duration:2})

// ScrollTrigger.create({
// 	trigger:".box",
// 	start:"top 80%",
// 	end:"top 50%",
// 	markers: true,
// 	toggleClass:"red"
// });

// ScrollTrigger.create({
// 	markers:true,
// 	start:"top 6%",
// 	end: "top 50%",
// 	// trigger:".panel",
// 	// toggleClass: { targets:"nav" , className:"nav-active" },
// 	trigger:".box",
// 	onUpdate: (self) => console.log(self)
	
// 	// onEnter:() => console.log("enter"),
// 	// onLeave:() => console.log("onLeave"),
// 	// onEnterBack:() => console.log("onEnterBack"),
// 	// onLeaveBack:() => console.log("onLeaveBack"),
// })


// const tl = gsap.timeline();

// tl.to(".box" , {x:500 , duration:5})
//   .to(".box" , {y:200 , duration:2})
// //   .addLabel("rotate")
//   .to(".box" , {rotate:90 , repeat:5, ease:'bounce'})


//   tl.addLabel('rotate' , 8)
//   tl.paly("rotate")


// //   ScrollTrigger.create({
// // 	animation:tl,
// // 	trigger:".box",
// // 	start: "top center"
// //   })


gsap.utils.toArray("span").forEach((span) =>{
	ScrollTrigger.create({
	  trigger: span,
	  start: "top 50%",
	  end: "top 20%",
	//   toggleClass: "active",
	onEnter:()=>{
		span.classList.add("active")
	},
	  markers:true
	})
})



// gsap scroll animation end
























(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});



// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);