(function ($) {
	// Навешиваем калиндари
	// открываем по клику на иконку
	$('#date').datepicker({
		autoHide: true,
		trigger: 'span.icon.calendar',
		format: 'dd.mm.yyyy',
		weekStart: 1
	});
})(jQuery);