$(document).ready(() => {
	$('#text').on('keyup', e => {
		$('.preview').html($(event.currentTarget).val());
	})

	$('#font').on('change', e => {
		$('.preview').css('font-family', $(event.currentTarget).val());
	})

	$('#weight').on('change', e => {
	    $('.preview').css('font-weight', $(event.currentTarget).val());

	})

	$('#size').on('keyup', e => {
    var fontSize = $(e.currentTarget).val() + 'px';
    $('.preview').css('font-size', fontSize); 
  })

})