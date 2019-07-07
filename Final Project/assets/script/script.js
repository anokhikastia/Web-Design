( function( $ ) {
	$(document).ready( function() {
		$('.AKTypes').typeIt({
		     strings: ["Software Engineer", "Student", "Lifelong Learner", "Boba Aficionado", "A human being", "Amateur Adult", "Music Lover"],
		     speed: 185,
		     loop: true,
		     startDelay: 150,
		     deleteDelay: 1500,
		     loopDelay: 1000
  		});
	});
} )( jQuery );