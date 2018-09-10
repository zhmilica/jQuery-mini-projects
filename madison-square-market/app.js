
$(document).ready(function(){
  $('.cart h3').click(function(){
    $('.account .dropdown-menu').hide();
    $('.help .dropdown-menu').hide();
		$('.cart h3').next().toggle();
	});
  
  $('.account h3').click(function(){
    $('.cart .dropdown-menu').hide();
    $('.help .dropdown-menu').hide();
		$('.account h3').next().toggle();
	});

  $('.help h3').click(function(){
    $('.cart .dropdown-menu').hide();
    $('.account .dropdown-menu').hide();
		$('.help h3').next().toggle();  	
	});
});
