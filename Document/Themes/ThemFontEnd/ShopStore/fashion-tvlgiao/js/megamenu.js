/**
 * EM MegaMenuPro
 *
 * @license commercial software
 * @copyright (c) 2012 Codespot Software JSC - htmlcooker.com. (http://www.emthemes.com)
 */
(function($) {
    function isMobileView() {
		return ( $(window).width() <= 767 || $('.em-menu-mobile').length);
    };
    /**
     * Make menu support on mobile
     */
    function mobile() { 
        var sNav = $('.em_nav');         
        var len = sNav.length;       
        if(len){
            for (var i=0;i<len; i++) {
                var $nav = $('.hnav, .vnav', sNav.eq(i));
                $('a.arrow', $nav).bind(isWindowPhone ? 'mouseenter' : (isMobile ? 'click mouseenter' : 'click'), function(event) {
                    if (!isMobileView()) return;
                    event.preventDefault();
                    event.stopPropagation();
                    var $li = $(this.parentNode);                    
                    if (!$li.hasClass('cur-toggle') && $('li.cur-toggle', $nav).length > 0 && !($li.parents('li.cur-toggle').length > 0)) {
                        var sLi = $('li.cur-toggle', $nav);
                        var lenLi = $('li.cur-toggle', $nav).length;
                        for(var j=0;j<lenLi;j++){
                            sLi.eq(j).removeClass('cur-toggle');
                            if (sLi.eq(j).css('display') != 'none') {
                                sLi.eq(j).children('ul').slideToggle();
                            }
                        }
                    }
                    // fix bug event called twice cause menu sub menu showed even not clicked
                    // don't know why it happens!!!
                    $li.children('ul').slideToggle();
                    if ($li.hasClass('cur-toggle')) $li.removeClass('cur-toggle');
                    else if ($li.parents('li.cur-toggle').length == 0) $li.addClass('cur-toggle');                    
                });
            }
        }
    };

    function fixPc() {
        if ($(window).width() > 767 && !$('.em-menu-mobile').length) {
            var sNav = $('.em_nav');
            var lenNav = sNav.length;
            if (lenNav) {
                for(var i=0;i<lenNav;i++){
                    var $nav = $('.hnav, .vnav', sNav.eq(i));
                    var $li = $(this.parentNode);
                    var sLi = $('li', $nav);
                    var lenLi = sLi.length;
                    for(var j=0;j<lenLi;j++){
                        sLi.eq(j).children('ul').css('display', '');
                    }
                }         
            }            
        }
    };
    /**
     * Fix mega menu drop-down's container overflows the right edge of page.
     *
     * Should be called once when document ready
     */

    function fixMegaMenuOverflow() {
        function fix($container, $nav) {
            var pad = $nav.offset().left + $nav.outerWidth() - ($container.offset().left + $container.outerWidth());
            var pad2 = $container.offset().left + pad - $nav.offset().left;
            if (pad2 < 0) pad = pad - pad2;
            if (pad < 0) {
                $container.css('left', pad - 10 + 'px');
            }
        };
        $('.em_nav > .hnav > .menu-item-link > .menu-container').parent().hover(function() {
            var $container = $(this).children('.menu-container');
            if ($(this).hasClass('menu-item-depth-0')) $container.css('left', 0);
            var $nav = $(this).parents('.em-menu-fix-pos').first();
            if($nav.length){fix($container, $nav);}            
        }, function() {
            $(this).children('.menu-container').css('left', '');
        });
    };
    
    function fixMegaMenuOverflowRight() {
        function fix($container, $nav) {
    		var nav_offsetright = $(window).width() - ($nav.offset().left + $nav.outerWidth(true));
    		var container_offsetright = $(window).width() - ($container.offset().left + $container.outerWidth(true));
    		var pad = nav_offsetright + $nav.outerWidth(true) - (container_offsetright + $container.outerWidth(true));
    		var pad2 = container_offsetright + pad - nav_offsetright;            
    		if (pad2 < 0) pad = pad - pad2;
    		if (pad < 0){
                $container.css('right', pad - 10 +'px');
            }
    	};    
    	$('.em_nav > .hnav > .menu-item-link > .menu-container').parent().hover(function() {
    		var $container = $(this).children('.menu-container');
            if ($(this).hasClass('menu-item-depth-0')) $container.css('right', 0);
    		var $nav = $(this).parents('.em-menu-fix-pos').first();
            if($nav.length){fix($container, $nav);}    		    		
    	}, function() {
    		$(this).children('.menu-container').css('right', '');
    	});        
    };        

    function menuVertical() {
        if (!isPhone && $(window).width() > 767 && !$('.em-menu-mobile').length) {
            if ($('.vnav > .menu-item-link > .menu-container > li.fix-top').length > 0) {
                $('.vnav > .menu-item-link > .menu-container > li.fix-top').parent().parent().mouseover(function() {
                    var $container = $(this).children('.menu-container,ul.level0');
                    var $containerHeight = $container.outerHeight();
                    var $containerTop = $container.offset().top;
                    var $winHeight = $(window).height();
                    var $maxHeight = $containerHeight + $containerTop;
                    $setTop = $(this).parent().offset().top - $(this).offset().top;
                    if (($setTop + $containerHeight) < $(this).height()) {
                        $setTop = $(this).outerHeight() - $containerHeight;
                    }
                    var $grid = $(this).parents('.em_nav').first().parents().first();
                    $container.css('top', $setTop);
                    if ($maxHeight < $winHeight) {
                        $('.vnav ul.level0,.vnav > .menu-item-link').children('.fix-top').parent('.menu-container').first().css('top', $setTop - 9 + 'px');
                    }
                });
                $('.vnav ul.level0,.vnav > .menu-item-link').children('.fix-top').parent('.menu-container').parent().mouseout(function() {
                    var $container = $(this).children('.menu-container,ul.level0');
                    $container.removeAttr('style');
                });
            }
        } else {
            $('.vnav > .menu-item-link > .menu-container > li.fix-top').parent().parent().off('mouseover mouseon');
            $('.vnav > .menu-item-link > .menu-container > li.fix-top').parent().off('mouseover mouseon');
            $('.vnav .menu-item-link > .menu-container,.vnav ul.level0').parent().off('mouseover mouseon');
        }
    };
    
    function fixMenuLong(){
        $_longMenu = $('.vnav.em-menu-long');
        $_longMenu.each(function(i){            
            $_this = $(this).parent('.em_nav');
            $_itemLong = $(this).children('.em-more-menu');
            $_itemLong.hide();
            $_this.append('<a href="javascript:void(0)" class="em-prepend-menu"><span>More Categories</span></a>');
            $('a.em-prepend-menu', $_this).bind('click',function(){
                var $_icon = $(this);
                $_icon.toggleClass('em-active');
                $_itemLong.toggle();
                $_itemLong.toggleClass('em-open');
                if($_itemLong.hasClass('em-open')){
                    $_icon.text('Close Categories');
                }else{
                    $_icon.text('More Categories');
                }
            });
        });        
    };
    var tm;
    $(document).ready(function() {
        $('.em_nav').each(function(i) {
            var $nav = $('.hnav, .vnav', this);
            $('.em-catalog-navigation li.parent, .menu-item-link.menu-item-parent', $nav).each(function() {
                $(this).prepend('<a href="javascript:void(0)" class="arrow"><span>&gt;</span></a>');
            });
            
            var sNav = $('.em-catalog-navigation').find('li').find('a').not('.arrow');            
            var len = sNav.length;
            for (var i=0;i<len; i++) {
                sNav.eq(i).addClass('em-menu-link');
            }
        });
        menuVertical();
        clearTimeout(tm);
        if (EM.SETTING.DISABLE_RESPONSIVE != 0 || $('.em-menu-mobile').length) {
            tm = setTimeout(function() {
                mobile();
            }, 100);
        }
        if(EM.SETTING.RIGHT_TO_LEFT!=1){
            fixMegaMenuOverflow();
        }else{
            fixMegaMenuOverflowRight();                    
        }
        /*fixMenuLong();*/
    });
    var temp;
    $(window).resize(function() {
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
            menuVertical();
            clearTimeout(temp);
            temp = setTimeout(function() {
                fixPc();
                if(EM.SETTING.RIGHT_TO_LEFT!=1){
                    fixMegaMenuOverflow();
                }else{
                    fixMegaMenuOverflowRight();
                }
            }, 100);
        }
    });
})(jQuery);