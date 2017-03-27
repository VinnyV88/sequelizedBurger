$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.logo').addClass("logo-sm");
        $('.logo').removeClass("logo-lg");
        $('.byname').addClass("byname-sm");
        $('.byname').removeClass("byname-lg");
        $('.navbar').addClass("navbar-sm");
        $('.navbar').removeClass("navbar-lg");
    } else {
        $('.logo').removeClass("logo-sm");
        $('.logo').addClass("logo-lg");
        $('.byname').removeClass("byname-sm");
        $('.byname').addClass("byname-lg");
        $('.navbar').removeClass("navbar-sm");
        $('.navbar').addClass("navbar-lg");
    }
});