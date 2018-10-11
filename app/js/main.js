$(document).ready(function(){

	//ActiveMenu'Anch
	let menuAnch = $('.header__list a');
	menuAnch.on('click', function(e){
		e.preventDefault();
		menuAnch.removeClass('active');
		$(this).addClass('active');
	})

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
	})

	//Background parallax
	// $(window).mousemove(function(e) {
 //    	var change;
 //    	var xpos = e.clientX;
 //    	var ypos = e.clientY;
 //    	var left = change*5;
 //    	var  xpos = xpos * 2;
 //    	ypos = ypos * 2;
 //    	$('.inn-lab').css('background-position', `${((0+(ypos/75))+"px")} ${(( 0+(xpos/100))+"px")}`);
 //  	});

	//FixedMenu
	$(window).scroll(function(){
		var sticky = $('.header'),
		scroll = $(window).scrollTop();

		if (scroll >= 100) sticky.addClass('fixed');
		else sticky.removeClass('fixed');
	});

	$('.slider').owlCarousel({
	    loop:true,
	    nav:true,
	    navText: [`<i class="fas fa-angle-left"></i>`, `<i class="fas fa-angle-right"></i>`],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	    }
	})
})

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
