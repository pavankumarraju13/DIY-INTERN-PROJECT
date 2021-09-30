// slider for different category

$('.slider').slick({
	dots: false,
	infinite: true,
	speed: 2000,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay:true,
	autoplaySpeed: 2000,
	edgeFriction: 0.15,
	focusOnSelect:true,
	responsive: [
		{
		breakpoint: 1024,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			speed: 2000,
		}
		},
		{
		breakpoint: 600,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows:true,
			infinite: true,
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true
		}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});


// slider for different angle of images

$('.image-slider').slick({
	dots: true,
	infinite: true,
	speed: 2000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay:true,
	autoplaySpeed: 2000,
	edgeFriction: 0.15,
	focusOnSelect:true,
	responsive: [
		{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
		}
		},
		{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:true,
			infinite: true,
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true
		}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});


