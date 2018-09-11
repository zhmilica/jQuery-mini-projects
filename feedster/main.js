$(document).ready(() => {
	$('.menu').on('mouseenter', () => {
		$('.nav-menu').show();
	}).on('mouseleave', () => {
		$('.nav-menu').hide();
	});

	$('.btn').on('mouseenter', e => {
		$(e.currentTarget).addClass('btn-hover');
	}).on('mouseleave', e => {
		$(e.currentTarget).removeClass('btn-hover');
	});

	$('.postText').on('keyup', e => {
		$('.postText').focus();
		let post = $(event.currentTarget).val();
    	let remaining = 140 - post.length;
    	if(remaining < 0){
	      $('.wordcount').addClass('red');
	      $('.characters').html("Stop");
	      $('.clear').html("");
	      
	    }
	    else{
	      $('.wordcount').removeClass('red');
	      $('.characters').html(remaining);
	      $('.clear').html(" character remaining");
	    }
  	});
});