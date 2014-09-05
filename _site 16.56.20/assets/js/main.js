$(function() {
	// Toggle mobile menu
	$("button.navbar-toggle").click(function() {
		$(".collapse").slideToggle();
	});

	// scroll to anchor with same id as link plugin
	$.fn.scrollToBlock = function() {
		$(this).click(function() {
			var id = $(this).attr("id");
			console.log(id);

			$("html, body").animate({
				scrollTop: ($("#" + id +".block").offset().top)
			}, 500);

			return false;	
		});	
	};

	$("nav a").scrollToBlock();

	// Back to top link
	$("a#back-to-top").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);

		return false;
	});
});