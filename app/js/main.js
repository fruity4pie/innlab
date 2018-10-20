(function ($) {

	$(document).ready(function(){

		$(document).mouseup(function (e) {
  		var container = $(".header-m-menu-wrap");
  		if (container.has(e.target).length === 0){
    		container.removeClass('active');
				container.find('.header-hmb').removeClass('active');
				$('body').removeClass('active');
  		}
		});

		//Hamburger
		let mobMenu = $('.header-hmb');
		let mobMenuClose = $('.header-m-menu-close');
		mobMenu.on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active').parent().find('.header-m-menu-wrap').addClass('active');
			$('body').addClass('active');
		});

		mobMenuClose.on('click', function(e) {
			e.preventDefault();
			mobMenu.removeClass('active');
			$(this).parent().removeClass('active');
			$('body').removeClass('active');
		});

		//Background parallax
		// $(window).mousemove(function(e) {
 	 	// 	var change;
 	 	// 	var xpos = e.clientX;
 	 	// 	var ypos = e.clientY;
 	 	// 	var left = change*5;
 	 	// 	var  xpos = xpos * 2;
 	 	// 	ypos = ypos * 2;
 	 	// 	$('.parallax img').css({'left': `${((0+(ypos/75))+"px")}`, top: `${(( 0+(xpos/100))+"px")}`});
 		// });

		//FixedMenu
		$(window).scroll(function(){
			var sticky = $('.header'),
			scroll = $(window).scrollTop();

			if (scroll >= 100) sticky.addClass('fixed');
			else sticky.removeClass('fixed');
		});

		//Carousel
		$('.slider').owlCarousel({
	  	loop:true,
	  	nav:true,
	  	navText: [`<img src="img/arl.png" alt="previous button">`, `<img src="img/arr.png" alt="next button">`],
	  	dots: false,
	  	responsive:{
	    	0:{
	     		items:1
	    	},
	  	}
		});

		//GoToProjects
		let anchors = $('.projects a');
		let containers = $('.l-projects');

		anchors.on('click', function(e){
			e.preventDefault();
			let dataHref = $(this).attr('href');
			containers.removeClass('active');
			$(`#${dataHref}`).addClass('active');
		})

	});
})(jQuery);

let container = document.getElementById('lottie');
if(container) {
	var params = {
	    container,
	    renderer: 'svg',
	    loop: true,
	    autoplay: true,
	    path: 'js/data.json'
	};

	var anim;

	anim = lottie.loadAnimation(params);
}
