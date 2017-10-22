(function($){
	'use strict';

	//Preloder
	$(window).on('load', function() { 
		$(".loader").fadeOut(); 
		$("#preloder").delay(400).fadeOut("slow");
	});


	//Intro Section
	$('.action-switch').on('click',function(event) {
		$('.intro-section').toggleClass('pull');
		$('.right-section').toggleClass('active');
		$('.counter-section').removeClass('active');
		event.preventDefault();
	});


	//Magnific Popup
	$('#show-popup').magnificPopup({
		type:'inline',
		mainClass:'mfp-zoom-in',
		removalDelay: 400
	});

	$('.img-popup').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out', 
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});

	$('.video-btn').magnificPopup({
		type: 'iframe',
		autoplay : true,
		mainClass:'video-zoom-in',
		removalDelay: 400
	});


	//Ajax Chimp
	$('#mc-form').ajaxChimp({
		url: 'http://webdevhomes.us12.list-manage.com/subscribe/post?u=4d62424bdf73c15d3fa0f3578&id=9c6fab69f2',//Set Your Mailchamp URL
		callback: function(resp){
			if (resp.result === 'success') {
				setTimeout(function () {
					$('.mc-info').text("");
					$("#mc-email").val("");
				}, 4500);
			}else{
				setTimeout(function () {
					$('.mc-info').text("");
				}, 4500);
			}
		},
	});


	//CountDown
	$('.timer-btn').on('click',function(event) {
		$('.counter-section').addClass('active');
		setTimeout(function() {
			$('.counter-section').removeClass('active');
		}, 5000);
		event.preventDefault();
	});
	$(".counter").countdown("2018/01/01", function(event) {
		$(this).html(event.strftime("<div class='cd-item'>%D<span>days</span></div>" + "<div class='cd-item'>%H<span>hour</span></div>" + "<div class='cd-item'>%M<span>min</span></div>" + "<div class='cd-item'>%S<span>sec</span></div>"));
	});


	// Background 
	$('.iBG').each(function() {
		var image = $(this).data('bg');
		$(this).css({
			'background-image': 'url(' + image + ')',
		});
	});


	// Backstretch
	$("#slideshow").backstretch([
		"img/slide1.jpg",
		"img/slide2.jpg",
	], {duration: 4000, fade: 650});



	// Contact Form
	$('#contact-form').on('submit', function() {
		var send_btn = $('#send-form'),
			form = $(this),
			formdata = $(this).serialize(),
			chack = $('#form-chack');
			send_btn.text('Wait...');

		function reset_form(){
		 	$("#name").val('');
			$("#email").val('');
			$("#massage").val('');
		}

		$.ajax({
			url:  $(form).attr('action'),
			type: 'POST',
			data: formdata,
			success : function(text){
				if (text == "success"){
					send_btn.addClass('done');
					send_btn.text('Success');
					setTimeout(function() {
						reset_form();
						send_btn.removeClass('done');
						send_btn.text('Send Massage');
					}, 3000);
				}
				else {
					reset_form();
					send_btn.addClass('error');
					send_btn.text('Error');
					setTimeout(function() {
						send_btn.removeClass('error');
						send_btn.text('Send Massage');
					}, 5000);
				}
			}
		});
		return false;
	});

})(jQuery);