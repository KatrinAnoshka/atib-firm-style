$(document).ready(function() {
// 	function playVideo(el) {
//     var videoId = el.data('video');
//     var video = document.getElementById(videoId);

//     if (video.paused) {
//         // Play the video
//         video.play();
//         el.removeClass('paused').addClass('playing');

//     }
//     else {
//         // Pause the video
//         video.pause();
//         el.removeClass('playing').addClass('paused');
//         $('.video-control').css('opacity', '0');
//     }
// }

// $(document).on('click', '.js-video-control', function(e) {
//   playVideo($(this));
//   e.preventDefault();
// });

	$('.video__start').click(function() { 
		$('.video').get(0).play(); 
		$('.video-control').css('opacity', '0'); 
	});
	$('.video__pause, .video__stop').click(function() { 
		$('.video').get(0).pause(); 
		$('.video-control').css('opacity', '0.8'); 
	});
});

