$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
		loop:true,
        margin: 10,
        items: 3,
        autoplay:true,
        autoplayTimeout:4000,
        dots: true,
        center: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
    })
    $('.owl-carousel2').owlCarousel({
		loop:true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:1500,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	})
});