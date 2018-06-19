$(document).ready(function () {

    "use strict";
    
    // Nice Scrolling
    $("html").niceScroll();

    // Show color option on the gear

    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });

    // Change Theme Color On Click

    var scrollButton = $("#scroll-top"),
        onepageButon = $("#onepageButon");

    
    // Caching The Scroll Top Element
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 480) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
        //console.log($(this).scrollTop());
        
    });
    
    scrollButton.click(function () { $("html,body").animate({scrollTop : 0}, 1000); });
    onepageButon.click(function () { $("html,body").animate({scrollTop : 1000}, 1000); });

});

// Loading Screen

window.onload = function () {

    "use strict";
    
    $(".loading-overlay").fadeOut(1000,
        function () { $("body").css("overflow", "auto"); });
};

