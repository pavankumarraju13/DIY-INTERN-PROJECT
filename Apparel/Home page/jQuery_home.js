// slider for different category

$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 2000,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay:true,
	autoplaySpeed: 2000,
	edgeFriction: 0.15,
	focusOnSelect:true,
	responsive: [
		{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		}
		},
		{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows:true,
			infinite: true,
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true
		}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

