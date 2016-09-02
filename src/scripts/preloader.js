$(window).on('load', function () {
				var $preloader = $('.preloader'),
				$svg_anm = $preloader.find('.preloader');
				$svg_anm.fadeOut();
				$preloader.delay(500).fadeOut('slow');
			});