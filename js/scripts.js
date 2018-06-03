
jQuery(document).ready(function () {

    if ($('.slides li').size() > 1) {

        $('.flexslider').flexslider({
            animation: "slide",
            slideshow: true,
            animationDuration: 700,
            slideshowSpeed: 6000,
            animation: "fade",
            controlsContainer: false,
            controlNav: true,
            keyboardNav: true
        });
        //.hover(function(){ $('.flex-direction-nav').fadeIn();}, function(){$('.flex-direction-nav').fadeOut();});

    }

    $("select.loc_on_change").change(function () {
        if ($(this).attr("value") == "#") return false;
        window.location = $(this).attr("value");
    });


});

jQuery(document).ready(function ($) {


    $("nav.mobile select").change(function () {
        window.location = jQuery(this).val();
    });
    $('#product .thumbs a').click(function () {

        $('#placeholder').attr('href', $(this).attr('href'));
        $('#placeholder img').attr('src', $(this).attr('data-original-image'))

        $('#zoom-image').attr('href', $(this).attr('href'));
        return false;
    });

    $('input[type="submit"], input.btn, button').click(function () { // remove ugly outline on input button click
        $(this).blur();
    })

    $("li.dropdown").hover(function () {
        $(this).children('.dropdown').show();
        $(this).children('.dropdown').stop();
        $(this).children('.dropdown').animate({
            opacity: 1.0
        }, 200);
    }, function () {
        $(this).children('.dropdown').stop();
        $(this).children('.dropdown').animate({
            opacity: 0.0
        }, 400, function () {
            $(this).hide();
        });
    });

}); // end document ready

/* jQuery css bezier animation support -- Jonah Fox */



// The following piece of code can be ignored.
$(function () {
    $(window).resize(function () {
        $('#info').text("Page width: " + $(this).width());
    });
    $(window).trigger('resize');
});
$(document).ready(function () {
    $("#countries").mouseover(function () {
        $(this).addClass("countries_hover");
        $(".countries_ul").addClass("countries_ul_hover");
    });
    $("#countries").mouseout(function () {
        $(this).removeClass("countries_hover");
        $(".countries_ul").removeClass("countries_ul_hover");
    });
});
;
$(document).ready(function () {
    $("#setCurrency").mouseover(function () {
        $(this).addClass("countries_hover");
        $(".currencies_ul").addClass("currencies_ul_hover");
    });
    $("#setCurrency").mouseout(function () {
        $(this).removeClass("countries_hover");
        $(".currencies_ul").removeClass("currencies_ul_hover");
    });
});
;

//Add Cart


//Menu danh mục trang collection
$(document).ready(function () {
    $('ul.tree.dhtml').hide();

    //to do not execute this script as much as it's called...
    if (!$('ul.tree.dhtml').hasClass('dynamized')) {
        //add growers to each ul.tree elements
        $('ul.tree.dhtml ul').prev().before("<span class='grower OPEN'> </span>");

        //dynamically add the '.last' class on each last item of a branch
        $('ul.tree.dhtml ul li:last-child, ul.tree.dhtml li:last-child').addClass('last');

        //collapse every expanded branch
        $('ul.tree.dhtml span.grower.OPEN').addClass('CLOSE').removeClass('OPEN').parent().find('ul:first').hide();
        $('ul.tree.dhtml').show();

        //open the tree for the selected branch
        $('ul.tree.dhtml .selected').parents().each(function () {
            if ($(this).is('ul')) toggleBranch($(this).prev().prev(), true);
        });
        toggleBranch($('ul.tree.dhtml .selected').prev(), true);

        //add a fonction on clicks on growers
        $('ul.tree.dhtml span.grower').click(function () {
            toggleBranch($(this));
        });
        //mark this 'ul.tree' elements as already 'dynamized'
        $('ul.tree.dhtml').addClass('dynamized');

        $('ul.tree.dhtml').removeClass('dhtml');
    }
});

//animate the opening of the branch (span.grower jQueryElement)
function openBranch(jQueryElement, noAnimation) {
    jQueryElement.addClass('OPEN').removeClass('CLOSE');
    if (noAnimation) jQueryElement.parent().find('ul:first').show();
    else jQueryElement.parent().find('ul:first').slideDown();
}

//animate the closing of the branch (span.grower jQueryElement)
function closeBranch(jQueryElement, noAnimation) {
    jQueryElement.addClass('CLOSE').removeClass('OPEN');
    if (noAnimation) jQueryElement.parent().find('ul:first').hide();
    else jQueryElement.parent().find('ul:first').slideUp();
}

//animate the closing or opening of the branch (ul jQueryElement)
function toggleBranch(jQueryElement, noAnimation) {
    if (jQueryElement.hasClass('OPEN')) closeBranch(jQueryElement, noAnimation);
    else openBranch(jQueryElement, noAnimation);
}


//begin jQuery view tab list/grid
function bindGrid() {
    var view = $.totalStorage('display');

    if (!view && (typeof displayList != 'undefined') && displayList) view = 'list';

    if (view && view != 'grid') display(view);
    else $('.display').find('li#grid').addClass('selected');

    $(document).on('click', '#grid', function (e) {
        e.preventDefault();
        display('grid');
    });

    $(document).on('click', '#list', function (e) {
        e.preventDefault();
        display('list');
    });
}

function display(view) {
    if (view == 'list') {
        $('ul.product_list').removeClass('grid').addClass('list row');
        $('.product_list > li').removeClass('col-xs-12 col-sm-6 col-md-4').addClass('col-xs-12');
        $('.left-block_collection').addClass('col-xs-12 col-sm-5 col-md-4');
        $('.right-block_collection').addClass('post_title col-xs-12 col-sm-7 col-md-8');
        $('.pr-0').removeClass('product-contents');
        $('.pr-0').addClass('right-block-content row');
        $('.product-desc').show();
        $('.quick-view_list').show();
        $('.ajax_add_to_cart_button').show();
        $('.pr-q1').hide();
        $('.hidde-quick-list').hide();
        $('.hidde-ajax_add_to_cart').hide();
        $('.display').find('li#list').addClass('selected');
        $('.display').find('li#grid').removeAttr('class');
        $.totalStorage('display', 'list');
    } else {
        $('ul.product_list').removeClass('list').addClass('grid row');
        $('.product_list > li').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-4');
        $('.left-block_collection').removeClass('col-xs-12 col-sm-5 col-md-4');
        $('.right-block_collection').removeClass('post_title col-xs-12 col-sm-7 col-md-8');
        $('.pr-0').addClass('product-contents');
        $('.pr-0').removeClass('right-block-content row');
        $('.product-desc').hide();
        $('.quick-view_list').hide();
        $('.ajax_add_to_cart_button').hide();
        $('.hidde-quick-list').show();
        $('.hidde-ajax_add_to_cart').show();
        $('.pr-q1').show();
        $('.display').find('li#grid').addClass('selected');
        $('.display').find('li#list').removeAttr('class');
        $.totalStorage('display', 'grid');
    }
    $("[data-toggle='tooltip']").tooltip();
}

$(document).ready(function () {
    bindGrid()
});
//end jQuery view tab list/grid
$(document).ready(function () {
    $('li.dropdown li.active').parents('.dropdown').addClass('active')
    if ($('.right-menu').width() + $('#navbar').width() > $('.nav-wrapper').width() - 40) {
        $('.nav-wrapper').addClass('responsive-menu');
    }
    else {
        $('.nav-wrapper').removeClass('responsive-menu');
    }
});


$(document).on("click", "ul.mobile-menu-icon .dropdown-menu ,.drop-control .dropdown-menu, .drop-control .input-dropdown", function (e) {
    e.stopPropagation();
});
$(document).ready(function () {
    var homeslide = $(".home-slide");
    homeslide.owlCarousel({
        items: 1,
        singleItem: true,
        autoPlay: 3000,
        stopOnHover: false,
    });

    var posTabProduct = $("#tab_collection_1_in");
    posTabProduct.owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [767, 2],
        itemsMobile: [480, 1],
        autoPlay: false,
        stopOnHover: false,
        addClassActive: true,

    });
    $(".navi_collection_1 .nexttab").click(function () {
        posTabProduct.trigger('owl.next');
    });
    $(".navi_collection_1 .prevtab").click(function () {
        posTabProduct.trigger('owl.prev');
    })

    var blogSlider = $(".ourbrands");
    blogSlider.owlCarousel({
        items: 6,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [767, 3],
        itemsMobile: [480, 2],
        autoPlay: false,
        stopOnHover: false,
    });

    // Custom Navigation Events
    $(".bx-controls .bx-controls-direction .bx-prev").click(function () {
        blogSlider.trigger('owl.prev');
    })
    $(".bx-controls .bx-controls-direction .bx-next").click(function () {
        blogSlider.trigger('owl.next');
    })

    var blogSlider = $(".blogSlider");
    blogSlider.owlCarousel({
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [991, 5],
        itemsTablet: [767, 2],
        itemsMobile: [480, 1],
        autoPlay: false,
        stopOnHover: false,
    });

    // Custom Navigation Events
    $(".carousel-control_left").click(function () {
        blogSlider.trigger('owl.prev');
    });
    $(".carousel-control_right").click(function () {
        blogSlider.trigger('owl.next');
    });
    //Check to see if the window is top if not then display button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.scrollToTop').fadeIn();
    //     } else {
    //         $('.scrollToTop').fadeOut();
    //     }
    // });
    //
    // //Click event to scroll to top
    // $('.scrollToTop').click(function () {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 600);
    //     return false;
    // });

});