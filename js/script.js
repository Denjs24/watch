$(document).ready(function () {
    $(".burger-menu").click(function () {
        $(".nav-menu").toggleClass("nav-menu__active");
        $(".burger-menu").toggleClass("burger-menu__active");
        $("body").toggleClass("block-body");
    });

});