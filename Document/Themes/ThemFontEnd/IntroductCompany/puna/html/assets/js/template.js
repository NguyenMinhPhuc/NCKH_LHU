"use strict";
function chosen_drop_down(){
    var winHeight  = jQuery(window).height();
    jQuery('.chosen-container').each(function(){
        var a = ( winHeight - jQuery(this).offset().top) + jQuery(window).scrollTop();
        (a < 240 ) ? jQuery(this).addClass('top-dropdown') : jQuery(this).removeClass('top-dropdown');
    })
};

jQuery(document).ready(function() {

    var winWidth = jQuery(window).width(),
        body     = jQuery('body');

    new WOW().init();

    if(jQuery.isFunction(jQuery.fn.owlCarousel)){
        // Main Slider
        var mainSlider = jQuery("#main-slider");
        mainSlider.owlCarousel({
            navigation : !0,
            singleItem : !0,
            addClassActive : !0,
            autoPlay : !0,
            pagination : !1,
        });

        // Testimonials slider
        jQuery("#testimonials-section .owl-carousel").owlCarousel({
            navigation : !1,
            singleItem : !0,
            addClassActive : !0,
            pagination : !0,
            autoPlay : 8000
        });

        // Highlights slider
        jQuery("#property-highlights-section .owl-carousel").owlCarousel({
            items : 3,
            itemsDesktop : [1200,4],
            itemsTablet : [980,2],
            itemsMobile : [480,1],
            navigation : !1,
            pagination : !0
        });
    }

    // Feature Section
    var featureSection = jQuery('#feature-section'),
        featureBoxes   = featureSection.find('.section-box'),
        firstBg        = featureBoxes.first().data('id');

    featureBoxes.each(function(index, el) {
        featureBoxes.append('<div class="section-slide-'+ jQuery(this).data('id') +'"></div>');     
        jQuery(this).children('.content').clone().removeClass('content').addClass('hidden-sm hidden-md hidden-lg content-box-'+ (index+1)).appendTo('#feature-section');
    });

    featureBoxes.on('mouseover', function() {
        var currentSlide = featureSection.data('active-slide'),
            hoverSlide   = jQuery(this),
            hoverSlideId = hoverSlide.data('id');
        if (hoverSlideId != currentSlide)
        {
            featureSection.removeClass().addClass('active-slide-'+ hoverSlideId).data('active-slide', hoverSlideId);
            featureBoxes.removeClass('active');
            hoverSlide.addClass('active');
            jQuery('[class*="content-box"]').removeClass('active');
            jQuery('.content-box-'+hoverSlideId).addClass('active');
        };
    });

    featureSection.on('mouseleave', function() {
        featureBoxes.removeClass('active');
    });

    if(jQuery.isFunction(jQuery.fn.isotope)){
        var mainContainer = jQuery(".image-main-box");
        mainContainer.isotope({
            transitionDuration: "0.7s"
        });
        mainContainer.imagesLoaded( function() {
            mainContainer.isotope("layout");
            jQuery(".sort-section-container").on( "click", "a", function(e) {
                e.preventDefault();
                jQuery(".sort-section-container a").removeClass("active");
                jQuery(this).addClass("active");
                var filterValue = jQuery(this).attr("data-filter");
                mainContainer.isotope({ filter: filterValue });
            });
        });
    }

    if(jQuery.isFunction(jQuery.fn.magnificPopup)){
        jQuery('.image-main-box:not(.portfolio)').magnificPopup({
            delegate: '.more-details',
            type: 'image',
            removalDelay: 600,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                titleSrc: 'data-title',
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
    }
    
    
    // Google Map
    function initialize() {
        var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
        var mapOptions = {
            zoom: 15,
            center: myLatLng,
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
            // Extra options
            scrollwheel: false,
            mapTypeControl: false,
            panControl: false,
            zoomControlOptions: {
                style   : google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        }
        var mapBox = document.getElementById("map");
        var map = new google.maps.Map(mapBox,mapOptions);

        var image = mapBox.getAttribute("data-marker");

        var beachMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
        });
    }
    if( typeof google != 'undefined'){
        google.maps.event.addDomListener(window, "load", initialize);
    }

    // Clone the main menu to the mobile menu
    jQuery('#main-menu').clone().appendTo('#mobile-menu-container');

    // Enable Manu menu toggling
    jQuery('#main-menu-handle').on('click', function() {
        jQuery(this).toggleClass('active');
        jQuery('#mobile-menu-container').slideToggle(function(){
            jQuery(window).trigger('scroll').trigger('resize');
        });
    });

    // Mobile Sort initialize
    jQuery('.sort-handle').on('click',function () {
        jQuery(this).next('ul').slideToggle();
    });

    

    
});