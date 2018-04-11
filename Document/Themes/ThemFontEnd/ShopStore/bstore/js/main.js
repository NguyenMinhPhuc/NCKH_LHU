(function ($) {
    "use strict";

$(document).ready(function(){
/*---------------------------------------
	curency and language js
----------------------------------------- */	
	$(".current-currency").on( "click", function(){
		$(".currency-toogle").slideToggle(400);
	});
	$(".current-lang").on( "click", function(){
		$(".language-toogle").slideToggle(400);
	});	
		
/*---------------------------------------
	price range ui slider js
----------------------------------------- */		
	$( "#price-range" ).slider({
		range: true,
		min: 1,
		max: 100,
		values: [ 10, 90 ],
		slide: function( event, ui ) {
			$( "#slidevalue" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#slidevalue" ).val( "$" + $( "#price-range" ).slider( "values", 0 ) +
		" - $" + $( "#price-range" ).slider( "values", 1 ) );	
		
/*---------------------------------------
	scroll to top
----------------------------------------- */	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 250) {
			$('.bstore-scrollertop').fadeIn();
		} else {
			$('.bstore-scrollertop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.bstore-scrollertop').on( "click", function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});	
	
/*---------------------------------------
	mobile menu
----------------------------------------- */	
		$('.mobile-menu').meanmenu();	
		
/*---------------------------------------
	new  product, sale product carousel
----------------------------------------- */	
	$('.new-pro-carousel, .sale-carousel').owlCarousel({
		items : 2,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [991,1],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});	
		
/*---------------------------------------
	featured  product, bestseller, carousel
----------------------------------------- */	
	$('.feartured-carousel, .bestseller-carousel').owlCarousel({
		items : 5,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,		
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']	
	});	
		
/*---------------------------------------
	related-product  carousel
----------------------------------------- */	
	$('.related-product').owlCarousel({
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,		
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']	
	});	
		
/*---------------------------------------
	latest news carousel
----------------------------------------- */	
	$('.latest-news-carousel').owlCarousel({
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,		
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});	
		
/*---------------------------------------
	client carousel
----------------------------------------- */	
	$('.client-carousel').owlCarousel({
		items : 6,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,		
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});	
/*---------------------------------------
	home 2 left category menu
----------------------------------------- */	
	$('.category-heading').on( "click", function(){
		$('.category-menu-list').slideToggle(300);
	});	
		
/*---------------------------------------
	home 2 new product, home 2 sale product carousel
----------------------------------------- */	
	$('.home2-new-pro-carousel, .home2-sale-carousel').owlCarousel({
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,2],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,		
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']	
	});
		
/*---------------------------------------
	sidebar best seller carousel
----------------------------------------- */
	$('.sidebar-best-seller-carousel').owlCarousel({
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [991,1],
		itemsTablet: [767,1],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,		
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});
		
/*---------------------------------------
	tab product carousel	
----------------------------------------- */	
	$('.tab-carousel-1, .tab-carousel-2, .tab-carousel-3').owlCarousel({
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,		
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});
			
/*---------------------------------------
	mainSlider
----------------------------------------- */	
	$('#mainSlider').nivoSlider({
		controlNav: true,
		 directionNav: false,
		 pauseTime: 5000,
		nextText: '<div class="slider-bolut"></div>',
		prevText: '<div class="slider-bolut"></div>'
		
	});		

/*---------------------------------------
	single product product thumbnail
----------------------------------------- */	
	$('.bxslider').bxSlider({
	  minSlides: 3,
	  maxSlides: 3,
	  slideWidth: 88,
	  responsive:true,
	   nextText: '<i class="fa fa-angle-left"></i>',
	  prevText: '<i class="fa fa-angle-right"></i>'
	});	

/*---------------------------------------
	francy box lightbox
----------------------------------------- */	
	$(".fancybox").fancybox();	

/*-----------------------------------------
	cart plus minus button
--------------------------------------------*/	  
	 $(".cart-plus-minus-button").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	  $(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
		  }
		  }
		$button.parent().find("input").val(newVal);
	  });
		
}); 

})(jQuery);	