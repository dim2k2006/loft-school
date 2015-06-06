$(document).ready(function(){
	var inputs = $('.form__input');

	inputs.each(function() {
    	$(this)
		.data('default', $(this).val())
		.addClass('inactive')
		.focus(function() {
    		$(this).removeClass('inactive');
	        if($(this).val() === $(this).data('default') || $(this).val() === '') {
	        	$(this).val('');
	        }
		})
		.blur(function() {
		if($(this).val() === '') {
		  	$(this).addClass('inactive').val($(this).data('default'));
		}
		});
	});
})