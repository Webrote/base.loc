(function ($) {
	// Вадидация
	$('#form').validate({
		rules: {
			name: {
				required: true,
				minlength: 3,
			},
			
			email: {
				required: true,
				email: true,
			},
			message: {
				required: true,
				minlength: 3,
			}
		},

		messages: {
			name: {
				required: "Поле 'Ваше имя и фамилия' обязательно к заполнению",
				minlength: "Введите не менее 3-х символов в поле 'Имя'",
			},
			
			email: {
				required: "Поле 'E-mail' обязательно к заполнению",
				email: "Необходим формат адреса email",
			},
			message: {
				required: "Поле 'Ваш вопрос' обязательно к заполнению",
				minlength: "Слишком короткое сообщение",
			},
		},
		errorElement: 'div',
		errorClass: "form__error",
		validClass: "form__success",
		submitHandler: function(form) {
			sendEmail(form);
		}
	});

	function sendEmail(form) {
		var _form = $(form),
			msg = _form.serialize(),
			title = _form.data("formname");
            msg = msg + '&title='+ title;

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: msg,
			success: function(){
				$('.form__controul',_form).val('');
				$.fancybox.open('<div class="message">Ваше сообщение отправленно.<br> Наши сотрудники свяжутся с Вами!</div>');
			},
			error: function () {
				$.fancybox.open('<div class="message">При отправке возникла ошибка.<br>Попробуйте написать попозже.</div>');
			}
		});
	}
})(jQuery);