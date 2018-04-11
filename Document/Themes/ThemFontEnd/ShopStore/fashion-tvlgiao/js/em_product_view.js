/*
 * Galathemes
 *
 * @license commercial software
 * @copyright (c) 2014 Codespot Software JSC - Galathemes.com. (http://www.galathemes.com)
 */

(function($) {
    if (typeof EM == 'undefined') EM = {};
    if (typeof EM.SETTING == 'undefined') EM.SETTING = {};
    var domLoaded = false;
    // details tabs
    function decorateProductCollateralTabs() {
        var sTab = $('.em-details-tabs');
        if (sTab.length) {
            sTab.each(function(i) {
                $(this).prepend("<ul class='tabs-control'></ul>");
                var controlTab = $('.tabs-control', this);
                $('.box-collateral', $(this)).each(function(j) {
                    id = 'em-details-tab-' + i + '-' + j;
                    $(this).attr('id', id);
                    controlTab.append('<li><a href="#' + id + '">' + $('h2', this).html() + '</a></li>');
                });
                $(this).responsiveTabs({
                    animation: 'fade',
                    startCollapsed:'accordion', 
                });
            });
        }
    };

    //scroll review
    function ScrollToElement(e) {
        if ($(e).size()) {
            $('html, body').animate({
                scrollTop: $(e).offset().top
            }, 500);
        } else {
            return false;
        }
        return true;
    };

    function ScrollToReview() {
        var sReview = $('.product-view .product-essential ');
        var sClick1 = $('.link_review_list', sReview);
        if(sClick1.length){
            sClick1.click(function(e) {
                if (ScrollToElement('#customer_review_list')) {
                    e.preventDefault();
                }
            });
        }
        
        var sClick2 = $('.link_review_form', sReview);
        if(sClick2.length){
            sClick2.click(function(e) {
                if (ScrollToElement('#customer_review_form')) {
                    e.preventDefault();
                }
            });
        }
    };
    
    function emFixedProductInfo() {
        var sInfo = $('.em-product-view-secondary').find('.product-shop');
        var $_colmain = $('.em-col-main');
        var $_primary = $('.em-product-view-primary');
        var sInfoW = $_colmain.width() - $_primary.outerWidth();
        if (EM.SETTING.STICKY_MENU_SEARCH_CART != 0) {
            var $_hmenu = 70;
        }else{
            var $_hmenu = 0;
        }
        var $_hButton = $('.product-options-bottom').height(); 
        if (sInfo.length) {            
            var sticky_info = function() {
                var wWindow = $(window).width();
                var scroll_top = $(window).scrollTop();
                var posTop = $('#em-product-shop-pos-top').offset().top;
                var posBottom = $('#em-product-shop-pos-bottom').offset().top - $(window).height() + 50;
                if(wWindow>1024 && !isMobile){
                    if ( (scroll_top > posTop) && (scroll_top < posBottom) ) {
                        if (!sInfo.hasClass('product-shop-fixed-top')) {  
                            sInfo.addClass('product-shop-fixed-top'); 
                            if($('#product-options-wrapper').length){
                                $_hProductOption = $(window).height() - $('#em-product-info-basic').height() - $_hButton - 40 - $_hmenu;
                                $('#product-options-wrapper').css({
                                   'height' : $_hProductOption + 'px',
                                   'overflow-y' : 'auto',
                                });
                            }   
                            sInfo.width(sInfoW);                        
                        }
                    } else {
                        if (sInfo.hasClass('product-shop-fixed-top')) { 
                            sInfo.removeClass('product-shop-fixed-top');
                            if($('#product-options-wrapper').length){                            
                                $('#product-options-wrapper').css({
                                   'height' : '',
                                   'overflow-y' : 'hidden',
                                });
                            }
                            sInfo.css('width',''); 
                        }
                    }
                }else{
                    if (sInfo.hasClass('product-shop-fixed-top')) { 
                        sInfo.removeClass('product-shop-fixed-top');
                        if($('#product-options-wrapper').length){                            
                            $('#product-options-wrapper').css({
                               'height' : '',
                               'overflow-y' : 'hidden',
                            });
                        } 
                        sInfo.css('width','');
                    }
                }
                
            };
            $(window).scroll(function() {
                sticky_info();
            });   
            sticky_info();
        }        
    };
    
    //Ready Function
    $(document).ready(function() {
        domLoaded = true;
        var wWindow = $(window).width();
        // details
        if (EM.SETTING.USE_TAB != 0) {
            decorateProductCollateralTabs();
        }
        ScrollToReview();
              
    });
    $(window).load(function() {
        if(layout=='1column'){
            emFixedProductInfo();
        }
        setEqualElement('#em-wrapper-related','.product-name');       
        setEqualElement('#em-wrapper-upsell','.product-name'); 
    });
    var tmresize;
    $(window).resize($.throttle(300,function(){        
        clearTimeout(tmresize);
        tmresize = setTimeout(function(){
            if(layout=='1column'){
                emFixedProductInfo();
            }
        },200);                	   
    })); 
})(jQuery);