$(function() { 
    $(".p-header__menu").on("click", function() {
        $(".l-sidebar").toggleClass("menu-open");
        $(".l-container").toggleClass("bg-fixed");
    });
});

$(function() { 
    $(".p-sidebar__btn").on("click", function() {
        $(".l-sidebar").toggleClass("menu-open");
        $(".l-container").toggleClass("bg-fixed");
    });
});