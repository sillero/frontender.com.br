$(function(){
	$(window).bind('deviceorientation', function(){
		$('#content').fadeToggle();
	})
});
