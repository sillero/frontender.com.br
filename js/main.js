$(function(){
	$(window).bind('deviceOrientation', function(){
		$('#content').fadeToggle();
	})
});
