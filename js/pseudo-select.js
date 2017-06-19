(function ($) {
	// Псевдо Select
	$('.js-pseudoselect, .icon.select').click(function(e) {
		e.preventDefault();
		
		// Сохраняем выпадающий спсиок
		var dropBlock = $(this).parent().find('.js-drop');

		// Если он скрыт, то сначала скрываем все открытые
		// затем открываем выбранный
		if (dropBlock.is(':hidden')) {

			$('.js-drop').each(function() {
				if ($(this).is(':visible')) {
					$(this).slideUp(100);
				}
			});

			dropBlock.slideDown(100);

			// ОБрабатываем выбор элемента из выпадающего списка
			$('.js-drop').find('li').click(function() {
				var selectResult = $(this).text();

				// сохраняем значение в скрытом input
				$(this).parent().parent().find('input').val(selectResult);
				// показываем выбранное значение в видимое поле (js-pseudoselect)
				$(this).parent().parent().find('.js-pseudoselect').html(selectResult);

				// скрываем список
				dropBlock.slideUp(100);
			});
		} else {
			dropBlock.slideUp(100);
		}

		return false;
	});

	// Скрываем все выпадающие списки при нажатии во вне
	$('body').click(function() {
		$('.js-drop').each(function() {
			if ($(this).is(':visible')) {
				$(this).slideUp(100);
			}
		});
	});
})(jQuery);