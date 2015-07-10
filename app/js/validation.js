$(document).ready(function(){
	/**
	 * Tooltipster Init
	 */
	$('.tooltip').each(function(index, el) {
		var position = $(this).attr('data-position') || 'left';
		$(this).tooltipster({
			autoClose: 'false',
			trigger: 'custom',
			position: position
		});
	});
	


	/**
	 * Form Validation 
	 */
	$('.form').submit(function(event) {
		event.preventDefault();
		
		var data = '',
			mask = '',
			id = '';

		$('.form__input', this).each(function(index, el) {
			data = $(this).val();
			mask = $(this).attr('data-mask');
			id = $(this).attr('id');
			if (data === mask || data === '' || data === ' ') {
				$(this).addClass('form__error');
				$('#'+id).tooltipster('show');
			} else {
				$(this).removeClass('form__error');
				$('#'+id).tooltipster('hide');
			}
		});		
	});
});