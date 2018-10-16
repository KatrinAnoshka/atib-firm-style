$(document).ready(function() {
// Firm style page

	$('.video__start').click(function() { 
		$('.video').get(0).play(); 
	});
	$('.video__pause, .video__stop').click(function() { 
		$('.video').get(0).pause(); 
	});
});

