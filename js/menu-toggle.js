(function ($) {
	var openMenu = false;
	$('.menu-toggle').click(function () {

		$('.header__nav .nav').toggleClass('shown');

		if (!openMenu) {
			openMenu = true;
			$("body").append("<div class='overlay'></div>");
		} else {
			$('body .overlay').remove();
			openMenu = false;
		}

		$('body .overlay').click(function () {
			$('body .overlay').remove();
			$('.header__nav .nav').removeClass('shown');
			openMenu = false;
		})
	});

})(jQuery);