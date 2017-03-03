$( document ).ready(function() {
	console.log( "ready!" );
	var green, red, blue;
	var Green, Red, Blue;
	$("#red").on("change mousemove", function(){
		red = $(this).val();
		console.log(red);
		$("body").css({"background-color":'rgb(' + red + ',' + green + ',' + blue + ')'});
	});
	$("#green").on("change mousemove", function(){
		green = $(this).val();
		$("body").css({"background-color":'rgb(' + red + ',' + green + ',' + blue + ')'});
	});
	$("#blue").on("change mousemove", function(){
		blue = $(this).val();
		$("body").css({"background-color":'rgb(' + red + ',' + green + ',' + blue + ')'});
	});
	$('#gradient1').on("change mousemove",function(){
		Red = $(this).val();
		$('body').css({'background': "linear-gradient(to right, rgb(" + Red + "," + Green + "," + Blue + "),rgb(" + red + "," + green + "," + blue + ")"}); 
	});
	$('#gradient2').on("change mousemove",function(){
		Green = $(this).val();
		$('body').css({'background': "linear-gradient(to right, rgb(" + Red + "," + Green + "," + Blue + "),rgb(" + red + "," + green + "," + blue + ")"}); 
	});
	$('#gradient3').on("change mousemove",function(){
		Blue = $(this).val();
		$('body').css({'background': "linear-gradient(to right, rgb(" + Red + "," + Green + "," + Blue + "),rgb(" + red + "," + green + "," + blue + ")"}); 
	});
	// var red = $("#red").val();
	// var green = $("#green").val();
	// var blue = $("#blue").val();
	// document.body.style.background = "rgb(" + red + "," + green + "," + blue + ")";
});