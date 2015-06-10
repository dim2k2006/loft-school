$(document).ready(function(){
	var inputs = $('.form__input'),
		upload = $('.modal__upload-input'),
		uploadName = $('.modal__upload-text');

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


	upload.change(function(event) {
		var fileName = $(this).val().split("\\");
		uploadName.html(fileName[fileName.length-1]);
	});
})