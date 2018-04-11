/*
 * Galathemes
 *
 * @license commercial software
 * @copyright (c) 2014 Codespot Software JSC - Galathemes.com. (http://www.galathemes.com)
 */
(function($) {
    if (typeof EM == 'undefined') EM = {};
    if (typeof EM.SETTING == 'undefined') EM.SETTING = {};
    /* Retina Image Mobile */
    function emRetina(){        
        if (window.devicePixelRatio > 1 ||
	       (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)) {
			  var images = $('img.retina-img');
              var len = images.length;
              if(len){
                    /* loop through the images and make them hi-res */
    			  for(var i = 0; i < len; i++) {    
    				/* create new image name */
    				var imageType = images[i].src.substr(-4);
    				var imageName = images[i].src.substr(0, images[i].src.length - 4);
    				imageName += "@2x" + imageType;
    
    				/* rename image */
    				images[i].src = imageName;
    			  }
              }
		 }
    };
    
    function emCollapsible(){
        var wi = $(window).width();
        if(isPhone || wi<768){            
            var sCollap = $("[data-collapse-target]");            
            var len = sCollap.length;
            if(len){
                sCollap.removeClass('em-collapsed non-collapsed').addClass('non-collapsed');
                for(var i=0;i<len;i++){
                    var id = sCollap.eq(i).data('collapse-target');
                    var $id=$(id);
                    if($id.length){
                        if($id.is(':visible')){
                            $id.hide(200,function(){
                                $(this).css('overflow','inherit');
                            });
                        }
                    }                    
                }
                sCollap.unbind('click');
                sCollap.click(function(){
                    var $this = $(this);
                    $this.toggleClass('non-collapsed');
                    $this.toggleClass('em-collapsed');
                    var id = $this.data('collapse-target');
                    var $id = $(id);
                    $id.slideToggle(200,function(){
                        $(this).css('overflow','inherit');
                    });
                });
            }   
        }else{
            var sCollap = $("[data-collapse-target]");
            var len = sCollap.length;
            if(len){
                sCollap.removeClass('em-collapsed non-collapsed');
                sCollap.unbind('click');
                for(var i=0;i<len;i++){
                    var id = sCollap.eq(i).data('collapse-target');
                    var $id=$(id);
                    if($id.length){
                        if(!$id.is(':visible')){
                            $id.show(200,function(){
                                $(this).css('overflow','inherit');
                            });
                        }
                    }                    
                }
            } 
        }
    };

    /* Fix iPhone/iPod auto zoom-in when text fields, select boxes are focus */
    function fixIPhoneAutoZoomWhenFocus() {
        var viewport = $('head meta[name=viewport]');
        if (viewport.length == 0) {
            $('head').append("<meta name='viewport' content='width=device-width, initial-scale=1.0'/>");
            viewport = $('head meta[name=viewport]');
        }
        var old_content = viewport.attr('content');

        function zoomDisable() {
            viewport.attr('content', old_content + ', user-scalable=0');
        }

        function zoomEnable() {
            viewport.attr('content', old_content);
        }
        $('input[type=text], textarea, select').mouseover(zoomDisable).mousedown(zoomEnable);
    };
    
    /* sticky menu */
    function stickyElement() {
        var $_e = $('.em-fixed-top');
        if ($_e.length) {            
            if (EM.SETTING.STICKY_MENU_SEARCH_CART != 0 && !isPhone) {
                var sticky_navigation = function() {
                    var wWindow = $(window).width();
                    var scroll_top = $(window).scrollTop();
                    var navpos = $('#em-fixed-top').offset().top;
                    if (wWindow > 767) {
                        if (scroll_top > navpos) {
                            if (!$_e.hasClass('navbar-fixed-top')) {
                                $_e.addClass('navbar-fixed-top');
                            }
                        } else {
                            if ($_e.hasClass('navbar-fixed-top')) { 
                                $_e.removeClass('navbar-fixed-top');
                            }
                        }
                    } else {
                        if ($_e.hasClass('navbar-fixed-top')) {   
                            $_e.removeClass('navbar-fixed-top');
                        }
                    }
                };
                $(window).scroll(function() {
                    sticky_navigation();
                });
                sticky_navigation();
            }            
        }
    };

    /* sticky menu no responsive */
    function freezedMenuNoResponsive() {
        var $_e = $('.em-fixed-top');
        if (sMenu.length) {
            if (EM.SETTING.STICKY_MENU_SEARCH_CART != 0 && !isPhone) {
                var sticky_navigation = function() {
                    var scroll_top = $(window).scrollTop();
                    var navpos = $('#em-fixed-top').offset().top;
                    if (scroll_top > navpos) {
                        if (!sMenu.hasClass('navbar-fixed-top')) {  
                            sMenu.addClass('navbar-fixed-top');
                        }
                    } else {
                        if (sMenu.hasClass('navbar-fixed-top')) {
                            sMenu.removeClass('navbar-fixed-top');
                        }
                    }
                };
                $(window).scroll(function() {
                    sticky_navigation();
                });
                sticky_navigation();
            }
            if (isPhone) {
                if (sMenu.hasClass('navbar-fixed-top')) { 
                    sMenu.removeClass('navbar-fixed-top');
                }
            }
        }
    };
    /* random string */
    function randomString(len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    };

    /* do slider */
    function doSliderOwl() {
        function getOption(e, optionType, optionValue) {
            /* number of item class */
            if ($(e).data(optionType)) {
                optionValue = $(e).data(optionType);
            }
            return optionValue;
        };
        var $selector = $('.em-slider');
        var $len = $selector.length;
        if ($len) {
            for (var i = 0; i < $len; i++) {
                var stringRandom = randomString(100);
                $selector.eq(i).attr('id', 'owl_slider_' + stringRandom);
                var owl = $('#owl_slider_' + stringRandom);
                if(EM.SETTING.DISABLE_RESPONSIVE!=0){
                    var items = getOption(owl, 'emslider-items', 4);
                    var itemsDesktop = getOption(owl, 'emslider-desktop', items);
                    var itemsDesktopSmall = getOption(owl, 'emslider-desktop-small', items);
                    var itemsTablet = getOption(owl, 'emslider-tablet', items);
                    var itemsMobile = getOption(owl, 'emslider-mobile', items);
                    var responsive =  true;
                }else{
                    var items = getOption(owl, 'emslider-items', 4);
                    var itemsDesktop = items;
                    var itemsDesktopSmall = items;
                    var itemsTablet = items;
                    var itemsMobile = items;
                    var responsive =  false;
                }
                var navigation = getOption(owl, 'emslider-navigation', false);
                var pagination = getOption(owl, 'emslider-pagination', false);
                var paginationNumbers = getOption(owl, 'emslider-pagination-numbers', false);
                if (paginationNumbers == true) {
                    pagination = true;
                }
                /* do owl carousel */
                owl.owlCarousel({
                    /* Basic Speeds */
                    slideSpeed: 800,
                    rewindSpeed: 800,
                    /* Autoplay */
                    lazyLoad: true,
                    stopOnHover: true,
                    /* Navigation */
                    navigation: navigation,
                    pagination: pagination,
                    paginationNumbers: paginationNumbers,
                    /* Responsive */ 
                    responsive: responsive,
                    items: items,
                    transitionStyle : false,
                    /*items above 1200px browser width */
                    itemsDesktop: [1200, itemsDesktop],
                    /* items between 1199px and 981px */
                    itemsDesktopSmall: [992, itemsDesktopSmall],
                    itemsTablet: [768, itemsTablet],
                    itemsMobile: [480, itemsMobile],
                    /* CSS Styles */
                    baseClass: 'owl-carousel',
                    theme: 'owl-theme',
                    addClassActive: true
                });
            }
        }
    };

    /* safari hack: remove bold in h5, .h5 */
    function fixFontBoldSafari() {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            $('h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6').css('font-weight', 'normal');
        }
    };
    
    function fixClickASliderMobile(){
        if(isMobile){
            var $_aProduct = $('a.product-image');
            $_aProduct.each(function(i){
                var temp = false;
                var el = $(this);
                el.on('click', function(e) {
                    var $_this = $(this);
                    e.preventDefault();
                    if(temp==true){                        
                        var link = el.attr('href');
                        window.location = link;
                    }  
                    temp = true;              
                });  
            });
            var $_aZoom = $('a.cloud-zoom-gallery');
            $_aZoom.each(function(){
                var tempmore = false;
                var el = $(this);
                el.on('click', function(e) {
                    var $_this = $(this);
                    e.preventDefault();
                    if(tempmore==true){                        
                        var link = $_this.attr('href');
                        window.location = link;
                    }  
                    tempmore = true;              
                });  
            });
        } 
    };
    
    /** Ready Function **/
    $(document).ready(function() {              
        //fixOwlSliderRtl();
        fixFontBoldSafari();
        /* init ajax wishlist for wishlist link which has css class "link-wislist" */    

        /* responsive */
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
            isMobile && fixIPhoneAutoZoomWhenFocus();
            stickyElement();
        } else {
            freezedMenuNoResponsive();
        }
        emRetina();    
                     
    }); 

    /* Load Function */
    $(window).bind('load', function() {
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {        
            if(EM.SETTING.DISABLE_COLLAPSE!=0){
                emCollapsible();   
            }
        }
        setTimeout(function() {
            doSliderOwl();
        }, 300); 
        fixClickASliderMobile();
    });
    var tmresize;
    $(window).resize($.throttle(300,function(){
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
            clearTimeout(tmresize);
            if(EM.SETTING.DISABLE_COLLAPSE!=0){
                emCollapsible();   
            }
            stickyElement();
        }        	   
    })); 
})(jQuery);

function setEqualElement($_element,$_selector) {
    var $=jQuery;
    //console.log($($_selector));
    var $_e = $($_element);
    if($_e.length){
        var $_maxHeight= 0;
        var $listItems = $_e.find($_selector);            
        var lenLi = $listItems.length;
        $listItems.css('height', '');
        if(lenLi>1){
            for(var j=0;j<lenLi;j++){                
                $_maxHeight = Math.max($_maxHeight, $listItems.eq(j).outerHeight());
            }
        }
        $listItems.css('min-height', $_maxHeight + 'px');        
    }
};