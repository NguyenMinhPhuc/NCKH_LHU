// ------------------------------
// Sidebar Accordion Menu
// ------------------------------

$(function () {
    var menuCollapsed = localStorage.getItem('collapsed_menu');
    if (menuCollapsed === null) {
        localStorage.setItem('collapsed_menu', "false");
    }
    if (menuCollapsed === "true") {
        $('body').addClass('collapse-leftbar');
    }

    $('body').on('click', 'ul.acc-menu a', function() {
        var LIs = $(this).closest('ul.acc-menu').children('li');
        $(this).closest('li').addClass('clicked');
        $.each( LIs, function(i) {
            if( $(LIs[i]).hasClass('clicked') ) {
                $(LIs[i]).removeClass('clicked');
                return true;
            }
            $(LIs[i]).find('ul.acc-menu:visible').slideToggle();
            $(LIs[i]).removeClass('open');
        });

        if (!$('body').hasClass('collapse-leftbar') || $(this).parents('ul.acc-menu').length > 1) {
            if($(this).siblings('ul.acc-menu:visible').length>0)
                $(this).closest('li').removeClass('open');
            else
                $(this).closest('li').addClass('open');
                $(this).siblings('ul.acc-menu').slideToggle({
                    duration: 200
                });
        }
    });

    var targetAnchor;
    $.each ($('ul.acc-menu a'), function() {
        if( this.href == window.location ) {
            targetAnchor = this;
            return false;
        };
    });

    var parent = $(targetAnchor).closest('li');
    while(true) {
        parent.addClass('active');
        parent.closest('ul.acc-menu').show().closest('li').addClass('open');
        parent = $(parent).parents('li').eq(0);
        if( $(parent).parents('ul.acc-menu').length <= 0 ) break;
    };

    var liHasUlChild = $('li').filter(function(){
        return $(this).find('ul.acc-menu').length;
    });
    $(liHasUlChild).addClass('hasChild');




    //Make only visible area scrollable
    $("#widgetarea").css({"max-height":$("body").height()});
    //Bind widgetarea to nicescroll
    $("#widgetarea").niceScroll({horizrailenabled:false});


    // Toggle Buttons
    // ------------------------------

    //On click of left menu
    $("a#leftmenu-trigger").click(function () {
        
        if ((window.innerWidth)<768) {
            $('body').toggleClass('show-leftbar');
        } else {
            var menuCollapsed = localStorage.getItem('collapsed_menu');

            if (menuCollapsed == "true")
                localStorage.setItem('collapsed_menu', "false");
            else if (menuCollapsed == "false")
                localStorage.setItem('collapsed_menu', "true");

            $('body').toggleClass('collapse-leftbar');
        }


        checkpageheight();
        leftbarScrollShow();
    });

    // On click of right menu
    $("a#rightmenu-trigger").click(function () {
        $("body").toggleClass("show-rightbar");
        widgetheight();
    });

    //set minimum height of page
    dh=($(document).height()-40);
    $("#page-content").css("min-height",dh+"px");
    //checkpageheight();

});

// Recalculate widget area on a widget being shown
$(".widget-body").on('shown.bs.collapse', function () {
    widgetheight();
});

// -------------------------------
// Sidebars Positionings
// -------------------------------

$(window).scroll(function(){
    $("#widgetarea").getNiceScroll().resize();
    $(".chathistory").getNiceScroll().resize();
    rightbarTopPos();
    leftbarTopPos();
});

$(window).resize(function(){
    widgetheight();

    rightbarRightPos();
    $("#sidebar").getNiceScroll().resize();
});
rightbarRightPos();


// -------------------------------
// Mobile Only - set sidebar as fixed position, slide
// -------------------------------

enquire.register("screen and (max-width: 767px)", {
    match : function() {
        // For less than 768px
        $(function() {

            //Bind sidebar to nicescroll
            $("#sidebar").niceScroll({horizrailenabled:false});
            leftbarScrollShow();

            //Click on body and hide leftbar
            $("#wrap").click(function(){
                if ($("body").hasClass("show-leftbar")) {
                    $("body").removeClass("show-leftbar");
                    leftbarScrollShow();
                }
            });

            //Fix a bug
            $('#sidebar ul.acc-menu').css('visibility', '');

            //open up leftbar
            $("body").removeClass("show-leftbar");
            $("body").removeClass("collapse-leftbar");

        });

    },
    unmatch : function() {
        //Remove nicescroll to clear up some memory
            $("#sidebar").niceScroll().remove();
            $("#sidebar").css("overflow","visible");

        //hide leftbar
        $("body").removeClass("show-leftbar");

    }
});

//Helper functions
//---------------

//Fixing the show of scroll rails even when sidebar is hidden
function leftbarScrollShow () {
    if ($("body").hasClass("show-leftbar")) {
        $("#sidebar").getNiceScroll().show();
    } else {
        $("#sidebar").getNiceScroll().hide();
    }
    $("#sidebar").getNiceScroll().resize();
}

//set Top positions for changing between static and fixed header
function leftbarTopPos() {
    var scr=$('body.static-header').scrollTop();
    if (scr<41) {$('ul#sidebar').css('top',40-scr + 'px');} else {$('ul#sidebar').css('top',0);}
}

function rightbarTopPos() {
    var scr=$('body.static-header').scrollTop();
    if (scr<41) {$('#page-rightbar').css('top',40-scr + 'px');} else {$('#page-rightbar').css('top',0);}
}

//Set Right position for fixed layouts
function rightbarRightPos () {
    if ($('body').hasClass('fixed-layout')) {
        var $pc = $('#page-content');
        var ending_right = ($(window).width() - ($pc.offset().left + $pc.outerWidth()));
        if (ending_right<0) ending_right=0;
        $('#page-rightbar').css('right',ending_right);
    }
}

// Match page height with Sidebar Height
function checkpageheight() {
    sh=$("#page-leftbar").height();
    ch=$("#page-content").height();

    if (sh>ch) $("#page-content").css("min-height",sh+"px");
}

// Recalculate widget area to area visible
function widgetheight() {
    $("#widgetarea").css({"max-height":$("body").height()});
    $("#widgetarea").getNiceScroll().resize();
}

// -------------------------------
// Back to Top button
// -------------------------------

$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// -------------------------------
// Panel Collapses
// -------------------------------
$('a.panel-collapse').click(function() {
    $(this).children().toggleClass("fa-chevron-down fa-chevron-up");
    $(this).closest(".panel-heading").next().slideToggle({duration: 200});
    $(this).closest(".panel-heading").toggleClass('rounded-bottom');
    return false;
});

// -------------------------------
// Quick Start
// -------------------------------
$('#headerbardropdown').click(function() {
    $('#headerbar').css('top',0);
    return false;
});

$('#headerbardropdown').click(function(event) {
  $('html').one('click',function() {
    $('#headerbar').css('top','-1000px');
  });

  event.stopPropagation();
});


// -------------------------------
// Keep search open on click
// -------------------------------
$('#search>a').click(function () {
    $('#search').toggleClass('keep-open');
    $('#search>a i').toggleClass("opacity-control");
});

$('#search').click(function(event) {
  $('html').one('click',function() {
    $('#search').removeClass('keep-open');
    $('#search>a i').addClass("opacity-control");
  });

  event.stopPropagation();
});

//Presentational: set all panel-body with br0 if it has panel-footer
$(".panel-footer").prev().css("border-radius","0");