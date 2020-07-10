 $(document).ready(function(){
 	$('.clients-slider').slick({
 		arrows: false,
 		dots: true,
 		speed: 1000,
 		autoplay: true,
 		autoplaySpeed: 7000,
 	});
 }) 

 $(document).ready(function() {
	$('.burger').click(function(event){
		$('.burger,.nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.nav_link').click(function(event) {
        $('.burger,.nav').removeClass('active');
        $('body').removeClass('lock')
     });
});