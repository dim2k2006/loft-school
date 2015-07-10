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

			if (id === 'project-attach') {
				if (data === mask || data === '' || data === ' ') {
					$(this).parent().addClass('form__error');
					$('#'+id).parent().tooltipster('show');
				} else {
					$(this).parent().removeClass('form__error');
					$('#'+id).parent().tooltipster('hide');
				}
			} else {
				if (data === mask || data === '' || data === ' ') {
					$(this).addClass('form__error');
					$('#'+id).tooltipster('show');
				} else {
					$(this).removeClass('form__error');
					$('#'+id).tooltipster('hide');
				}
			}
		});		
	});



	/**
	 * Input Keyup
	 */
	$('.form__input').keyup(function(event) {
		var id = $(this).attr('id');

		if ($(this).hasClass('form__error')) {
			$(this).removeClass('form__error');
			$('#'+id).tooltipster('hide');
		}
	});



	/**
	 * Input Type File Change
	 */
	$('.modal__upload-input').change(function(event) {
		var id = $(this).attr('id');

		$(this).parent().removeClass('form__error');
		$('#'+id).parent().tooltipster('hide');
	});



	/**
	 * Form Reset
	 */
	$('.form-reset').click(function(event) {
		var container = $(this).parent().parent().parent(),
			id = '';

		

		$('.form__input', container).each(function(index, el) {
			id = $(this).attr('id');
			
			$(this).removeClass('form__error');
			$('#'+id).tooltipster('hide');
		});	
	});



	/**
	 * Hide tooltips and reset form state after modal close
	 */
	$('#add-project').on('hidden.bs.modal', function () {
    	$('.tooltip').tooltipster('hide');
    	$('.form__input', this).removeClass('form__error');
    	$('.modal__upload-box', this).removeClass('form__error');
	});
});