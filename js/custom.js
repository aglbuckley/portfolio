$(window).scroll(function() {
    if ($(".navbar").offset().top > 375) {
        $(".navbar-fixed-top").addClass("solid-top");
        $(".navbar-fixed-top").removeClass("transparent-top");
    } else {
        $(".navbar-fixed-top").removeClass("solid-top");
        $(".navbar-fixed-top").addClass("transparent-top");
    }
});
