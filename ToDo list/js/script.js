//Check Off Specific Todos By Clicking
/*$("li").click(function(){
	//if li is silver
	if($(this).css("color") === "rgb(192, 192, 192)"){
		//turn it black
		$(this).css({
		color: "black",
		textDecoration: "none"
		});
	} else {
		//turn it silver
		$(this).css({
		color: "silver",
		textDecoration: "line-through"
	});
	}
});*/ 
//the easier way:

//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();//prevents the event from bubbling
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){//keycode of enter - 13
		let todoText = $(this).val();
		$(this).val("");//clear the input
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle();
})
