(function($) {
    "use strict";

    function toogleMenuPro_7_5505() {
        var wi = $(window).width();
        var wrapperMenu = $(".wrapper-7_5505");
        var container = $("#toogle_menu_7_5505");
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
            if (wi <= 767) {
                wrapperMenu.addClass('em-menu-mobile');
            } else {
                wrapperMenu.removeClass('em-menu-mobile');
                container.show();
            }
        } else {
            wrapperMenu.removeClass('em-menu-mobile');
            container.show();
        }
    };

    /* Toolbar Language */
    function emHoverUlLanguage() {
        if (!isMobile) {
            var sLan = $('#em-hoverUl-language');
            var len = sLan.length;
            if (len) {
                sLan.insertUlLanguage();
                sLan.selectUl();
            }
        }
    }
    /* Toolbar Currency */
    function emHoverUlCurrency() {
        if (!isMobile) {
            var sCur = $('#em-hoverUl-currency');
            var len = sCur.length;
            if (len) {
                sCur.insertUl();
                sCur.selectUl();
            }
        }
    }

    /* Toolbar Search */
    var timeoutSearch = null;

    function hideSearch(e) {
        var $_container = e.children().find('.em-container-js-search');
        if (timeoutSearch) clearTimeout(timeoutSearch);
        timeoutSearch = setTimeout(function() {
            timeoutSearch = null;
            $_container.hide(300, function() {
                $(this).css('overflow', 'inherit');
            });
        }, 200);
    }
    // Show Cart
    function showSearch(e) {
        var $_container = e.children().find('.em-container-js-search');
        if (timeoutSearch) clearTimeout(timeoutSearch);
        timeoutSearch = setTimeout(function() {
            timeoutSearch = null;
            $_container.show(300, function() {
                $(this).css('overflow', 'inherit');
            });
        }, 200);
    }
    /* Toolbar Login */
    var tmlink;

    function showlink(el) {
        clearTimeout(tmlink);
        tmlink = setTimeout(function() {
            el.slideDown();
        }, 200);
    }

    function hidelink(el) {
        clearTimeout(tmlink);
        tmlink = setTimeout(function() {
            el.slideUp();
        }, 200);
    }

    function effectLoginForm() {
        var sLogin = $('#em-account-login-form');
        var sLink = $('#link-login');
        var sDivLink = $('#em-login-link');
        if (sLogin.length > 0) {
            //hover login form
            if (isMobile) {
                sLink.attr('href', 'javascript:void(0);');
                sLink.click(function(e) {
                    sLogin.slideToggle();
                });
            } else {
                sDivLink.mouseover(function() {
                    showlink(sLogin);
                });
                sDivLink.mouseout(function() {
                    hidelink(sLogin);
                });
            }
            // Popup Login Form
        }
    }

    /* Top Cart */
    var timeout = null;

    function hideCart(e) {
        var $_container = e.children().find('.em-container-js-topcart');
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            $_container.hide(300, function() {
                $(this).css('overflow', 'inherit');
            });
        }, 200);
    }
    // Show Cart
    function showCart(e) {
        var $_container = e.children().find('.em-container-js-topcart');
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            $_container.show(300, function() {
                $(this).css('overflow', 'inherit');
            });
        }, 200);
    }

    /* Menu toogle_menu_4_7164 */
    function toogleMenuPro_4_7164() {
        var $ = jQuery;
        var wi = $(window).width();
        var wrapperMenu = $(".wrapper-4_7164");
        var container = $("#toogle_menu_4_7164");
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
            if ((wi <= 767 || isPhone == true)) {
                wrapperMenu.addClass('em-menu-mobile');
            } else {
                wrapperMenu.removeClass('em-menu-mobile');
                container.show();
            }
        } else {
            wrapperMenu.removeClass('em-menu-mobile');
            container.show();
        }
    };

    /* Mobile Navigation */
    function fixNavigationMobileView() {
        var $_winW = $(window).width();
        var $_mmenu = $('#em-mheader-menu-content');
        var elem = $('#em-mheader-menu-content');
        var $_parent = $('#em-mheader-wrapper-menu');
        var $_iconNav = $('#em-mheader-menu-icon');
        if (!isPhone || $_winW > 767) {
            $_mmenu.removeClass();
            $_iconNav.removeClass('active');
            elem.removeClass('show');
            $_parent.removeClass('active');
        }
    };

    function fixNavOverFlow() {
        var $_iconNav = $('#em-mheader-menu-icon');
        var elem = $('#em-mheader-menu-content');
        var $_parent = $('#em-mheader-wrapper-menu');
        $_iconNav.click(function(e) {
            e.preventDefault();
            var self = $(this);
            var isSkipContentOpen = elem.hasClass('show') ? 1 : 0;
            self.removeClass('active');
            elem.removeClass('show');
            $_parent.removeClass('active');
            if (isSkipContentOpen) {
                self.removeClass('active');
                $_parent.removeClass('active');
            } else {
                self.addClass('active');
                elem.addClass('show');
                $_parent.addClass('active');
            }
        });
        if (isPhone) {
            $_parent.on("swipeleft", function() {
                var self = $(this);
                if (self.hasClass('active')) {
                    elem.removeClass('show');
                    $_iconNav.removeClass('active');
                    self.removeClass('active');
                }
            });
        }
    };


    /* Set Column New Arrival Tab 1*/
    function setColumnCountGridMode_em_fashion_new_arrivals_tab01() {
        var wWin = $(window).width();
        if (EM.SETTING.DISABLE_RESPONSIVE == 1) {
            var sDesktop = 'emcatalog-desktop-';
            var sDesktopSmall = 'emcatalog-desktop-small-';
            var sTablet = 'emcatalog-tablet-';
            var sMobile = 'emcatalog-mobile-';
            var sGrid = $('#em-grid-mode-em_fashion_new_arrivals_tab01');
            if (wWin > 1200) {
                if (!sGrid.hasClass(sDesktop + '4')) {
                    sGrid.removeClass().addClass(sDesktop + '4');
                }
            } else {
                if (wWin <= 1200 && wWin > 768) {
                    if (!sGrid.hasClass(sDesktopSmall + '4')) {
                        sGrid.removeClass().addClass(sDesktopSmall + '4');
                    }
                } else {
                    if (wWin <= 768 && wWin > 480) {
                        if (!sGrid.hasClass(sTablet + '4')) {
                            sGrid.removeClass().addClass(sTablet + '4');
                        }
                    } else {
                        if (!sGrid.hasClass(sMobile + '4')) {
                            sGrid.removeClass().addClass(sMobile + '4');
                        }
                    }
                }
            }
        } else {
            var sDesktop = 'emcatalog-desktop-';
            var sGrid = $('#em-grid-mode-em_fashion_new_arrivals_tab01');
            if (!sGrid.hasClass(sDesktop + '4')) {
                sGrid.removeClass().addClass(sDesktop + '4');
            }
        }

    };
    /* Set Column New Arrival Tab 2*/
    function setColumnCountGridMode_em_fashion_new_arrivals_tab02() {
        var wWin = $(window).width();
        if (EM.SETTING.DISABLE_RESPONSIVE == 1) {
            var sDesktop = 'emcatalog-desktop-';
            var sDesktopSmall = 'emcatalog-desktop-small-';
            var sTablet = 'emcatalog-tablet-';
            var sMobile = 'emcatalog-mobile-';
            var sGrid = $('#em-grid-mode-em_fashion_new_arrivals_tab02');
            if (wWin > 1200) {
                if (!sGrid.hasClass(sDesktop + '4')) {
                    sGrid.removeClass().addClass(sDesktop + '4');
                }
            } else {
                if (wWin <= 1200 && wWin > 768) {
                    if (!sGrid.hasClass(sDesktopSmall + '4')) {
                        sGrid.removeClass().addClass(sDesktopSmall + '4');
                    }
                } else {
                    if (wWin <= 768 && wWin > 480) {
                        if (!sGrid.hasClass(sTablet + '4')) {
                            sGrid.removeClass().addClass(sTablet + '4');
                        }
                    } else {
                        if (!sGrid.hasClass(sMobile + '4')) {
                            sGrid.removeClass().addClass(sMobile + '4');
                        }
                    }
                }
            }
        } else {
            var sDesktop = 'emcatalog-desktop-';
            var sGrid = $('#em-grid-mode-em_fashion_new_arrivals_tab02');
            if (!sGrid.hasClass(sDesktop + '4')) {
                sGrid.removeClass().addClass(sDesktop + '4');
            }
        }

    };
    /* Set Column New Arrival Tab 3*/
    function setColumnCountGridMode_em_fashion_new_arrivals_tab03() {
        var wWin = $(window).width();
        if (EM.SETTING.DISABLE_RESPONSIVE == 1) {
            var sDesktop = 'emcatalog-desktop-';
            var sDesktopSmall = 'emcatalog-desktop-small-';
            var sTablet = 'emcatalog-tablet-';
            var sMobile = 'emcatalog-mobile-';
            var sGrid = $('#em-grid-mode-em_fashion_new_arrivals_tab03');
            if (wWin > 1200) {
                if (!sGrid.hasClass(sDesktop + '4')) {
                    sGrid.removeClass().addClass(sDesktop + '4');
                }
            } else {
                if (wWin <= 1200 && wWin > 768) {
                    if (!sGrid.hasClass(sDesktopSmall + '4')) {
                        sGrid.removeClass().addClass(sDesktopSmall + '4');
                    }
                } else {
                    if (wWin <= 768 && wWin > 480) {
                        if (!sGrid.hasClass(sTablet + '4')) {
                            sGrid.removeClass().addClass(sTablet + '4');
                        }
                    } else {
                        if (!sGrid.hasClass(sMobile + '4')) {
                            sGrid.removeClass().addClass(sMobile + '4');
                        }
                    }
                }
            }
        } else {
            var sDesktop = 'emcatalog-desktop-';
            var sGrid = $('#em-grid-mode-em_fashion_new_arrivals_tab03');
            if (!sGrid.hasClass(sDesktop + '4')) {
                sGrid.removeClass().addClass(sDesktop + '4');
            }
        }

    };
    /* Set Column New Arrival Tab 4*/
    function setColumnCountGridMode_em_fashion_new_arrivals_tab04() {
        var wWin = $(window).width();
        if (EM.SETTING.DISABLE_RESPONSIVE == 1) {
            var sDesktop = 'emcatalog-desktop-';
            var sDesktopSmall = 'emcatalog-desktop-small-';
            var sTablet = 'emcatalog-tablet-';
            var sMobile = 'emcatalog-mobile-';
            var sGrid = $('#em-grid-mode-em_fashion_new_arrivals_tab04');
            if (wWin > 1200) {
                if (!sGrid.hasClass(sDesktop + '4')) {
                    sGrid.removeClass().addClass(sDesktop + '4');
                }
            } else {
                if (wWin <= 1200 && wWin > 768) {
                    if (!sGrid.hasClass(sDesktopSmall + '4')) {
                        sGrid.removeClass().addClass(sDesktopSmall + '4');
                    }
                } else {
                    if (wWin <= 768 && wWin > 480) {
                        if (!sGrid.hasClass(sTablet + '4')) {
                            sGrid.removeClass().addClass(sTablet + '4');
                        }
                    } else {
                        if (!sGrid.hasClass(sMobile + '4')) {
                            sGrid.removeClass().addClass(sMobile + '4');
                        }
                    }
                }
            }
        } else {
            var sDesktop = 'emcatalog-desktop-';
            var sGrid = $('#em-grid-mode-em_fashion_new_arrivals_tab04');
            if (!sGrid.hasClass(sDesktop + '4')) {
                sGrid.removeClass().addClass(sDesktop + '4');
            }
        }

    };

    /* Sidebar Menu */
    function toogleMenuPro_5_4607() {
        var $ = jQuery;
        var wi = $(window).width();
        var wrapperMenu = $(".wrapper-5_4607");
        var container = $("#toogle_menu_5_4607");
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
            if ((wi <= 767 || isPhone == true)) {
                wrapperMenu.addClass('em-menu-mobile');
            } else {
                wrapperMenu.removeClass('em-menu-mobile');
                container.show();
            }
        } else {
            wrapperMenu.removeClass('em-menu-mobile');
            container.show();
        }
    };

    /* Scroll Top */
    function backToTop() {
        // hide #back-top first
        var sBackTop = $('#back-top');
        if (sBackTop.length) {
            //var sClickBackTop = $('#back-top a');
            sBackTop.hide();
            // fade in #back-top
            if (!isMobile) {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 100) {
                        sBackTop.fadeIn();
                    } else {
                        sBackTop.fadeOut();
                    }
                });
                // scroll body to 0px on click
                $('a', sBackTop).click(function() {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 800);
                    return false;
                });
            }
        }
    };


    /* Newsletter */
    function showPopUpLogin() {
        if ($('#em-popup').length > 0) {
            $.fancybox.open('#em-popup', {
                width: 'auto',
                height: 'auto',
                openEffect: 'elastic',
                closeEffect: 'elastic'
            });
        }
    }

    jQuery(document).ready(function() {
        if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
            fixNavigationMobileView();
            fixNavOverFlow();
        }

        toogleMenuPro_7_5505();
        emHoverUlLanguage();
        emHoverUlCurrency();

        $("body").on("mouseover", ".em-wrapper-js-search", function(e) {
            e.preventDefault();
            var $_this = $(this);
            showSearch($_this);
        });
        $("body").on("mouseout", ".em-wrapper-js-search", function(e) {
            e.preventDefault();
            var $_this = $(this);
            hideSearch($_this);
        });
        effectLoginForm();

        /* top-cart */
        if (isMobile == true) {
            var sLink = $('.em-amount-js-topcart');
            var sCartContent = $(".em-wrapper-js-topcart");
            sLink.attr('href', 'javascript:void(0)');
            sCartContent.click(function(event) {
                var $_this = $(this);
                var $_container = $_this.children().find('.em-container-js-topcart');
                $_container.slideToggle();
                $_this.toggleClass('em-click-topcart');
            });
        } else {
            // Hide Cart
            var sCartContent = $(".em-wrapper-js-topcart");
            sCartContent.bind('mouseover', function(e) {
                e.preventDefault();
                var $_this = $(this);
                showCart($_this);
            }).bind('mouseout', function(e) {
                e.preventDefault();
                var $_this = $(this);
                hideCart($_this);
            });
        }

        toogleMenuPro_4_7164();

        /* Main Slider */
        var sync1 = $('#em_owlcarousel_2_2484_sync1');
        sync1.owlCarousel({
            singleItem: true,
            responsiveRefreshRate: 200,
            paginationSpeed: 2000,
            rewindSpeed: 1000,
            lazyLoad: true,
            slideSpeed: 100,
            navigation: true,
            pagination: true,
            navigationText: ["Pre", "Next"],
            transitionStyle: 'fade',
            autoPlay: true,
        });

        /* Call Set Column */
        setColumnCountGridMode_em_fashion_new_arrivals_tab01();

        setColumnCountGridMode_em_fashion_new_arrivals_tab02();
        setEqualElement('#tab_em_fashion_new_arrivals_tab02', '.product-name');

        setColumnCountGridMode_em_fashion_new_arrivals_tab03();
        setEqualElement('#tab_em_fashion_new_arrivals_tab03', '.product-name');

        setColumnCountGridMode_em_fashion_new_arrivals_tab04();
        setEqualElement('#tab_em_fashion_new_arrivals_tab04', '.product-name');

        /* New Arrival Tabs */
        $('#emtabs_1').responsiveTabs({
            animation: 'fade',
            startCollapsed: 'accordion',
            active: 0,
            activateState: function(e, state) {
                if (state.newState == 'accordion') {
                    var ulTab = $(this).find("ul.r-tabs-nav");
                    var activeTab = $(this).find("div.r-tabs-state-active");
                    if (activeTab.length == 0) {
                        $(ulTab).find("li:first-child a").click();
                    }
                }
            },
            activate: function(event, tab) {
                var id = tab.id + 1;
                var $_img = $('#tab_emtabs_1_' + id).find('img.em-img-lazy');
                $_img.trigger("appear");
                var $_eheight = $('#tab_emtabs_1_' + id).find('.em-filterproducts-grid');
                setEqualElement($_eheight, '.product-name');
            },
        });

        toogleMenuPro_5_4607();
        backToTop();
        showPopUpLogin();
    });
})(jQuery);
jQuery(document).on('resize orientationchange', window, function() {
    if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
        toogleMenuPro_7_5505();
        toogleMenuPro_4_7164();
        toogleMenuPro_5_4607();
    }
});
$(window).resize($.throttle(300, function() {
    if (EM.SETTING.DISABLE_RESPONSIVE != 0) {
        fixNavigationMobileView();
    }
    setColumnCountGridMode_em_fashion_new_arrivals_tab01();
    setColumnCountGridMode_em_fashion_new_arrivals_tab02();
    setColumnCountGridMode_em_fashion_new_arrivals_tab03();
    setColumnCountGridMode_em_fashion_new_arrivals_tab04();
}));

//<![CDATA[
var isMobile = /iPhone|iPod|iPad|Phone|Mobile|Android|hpwos/i.test(navigator.userAgent);
var isPhone = /iPhone|iPod|Phone|Android/i.test(navigator.userAgent);
var isWindowPhone = '';
var language = 'images/language/';
var urlsite = '';
var layout = '2columns-left';
var product_zoom = null;
if (typeof EM == 'undefined') EM = {};
EM.SETTING = {
    USE_TAB: '1',
    DISABLE_VARIATION: '1',
    DISABLE_RESPONSIVE: '1',
    AJAXCART_AUTOCLOSE: '0',
    DISABLE_AJAX_ADDTO: '1',
    DISABLE_COLLAPSE: '1',
    STICKY_MENU_SEARCH_CART: '1',
    RIGHT_TO_LEFT: '0',
    COLOR_SWATCHES: '1',
};
//]]>