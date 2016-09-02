$(document).ready(function() {
	$(".slider-1").owlCarousel({
		navigation: true,
		slideSpeed : 700,
		singleItem:true,
		pagination: false,
		autoPlay: true
	});

	$(".slider-2").owlCarousel({
		navigation: false,
		singleItem: true,
		pagination: true,
		autoPlay: true,
		slideSpeed : 700,
		stopOnHover: true
	});

	$(".portfolio__container").mixItUp({

		selectors: {
			target: '.portfolio__mix',
			filter: '.portfolio__tab'
		},

		controls: {
			activeClass: 'portfolio__tab--active'
		},

		layout: {
			display: 'block'
		},

		animation: {
			effects: 'fade translateX'
		}

	});
});