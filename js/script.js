$(window).ready(function () {


	/*************** sub-navigation *************************/

    $('.nav-item').hover(
        function() {

        	if($(window).width() >= 980) {
				$(this).toggleClass('active');
        	}
        }
    );


	/*************** hamburger *************************/

	$('.burger').click(function() {
		$(this).toggleClass('active');
		$('nav').toggleClass('active');
	});


	/*************** search field *************************/

    $('.to-search').click(function() {
        $(this).siblings('.form-search').toggleClass('active');
    }
    );

/*************** back-to-top *************************/
/********* содрал решение с ютуб урока ****************/

	var btt = $('.back-to-top');

	$(window).on('scroll', function () {
		var self = $(this),
			top = self.scrollTop();

		if (top > 50) {
			if (!btt.is(':visible')) {
				btt.fadeIn(200);
			}
		} else {
			btt.fadeOut(200);
		}
	});
});










