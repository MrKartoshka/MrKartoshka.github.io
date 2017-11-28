$(document).ready(function () {

    var navHeight;

    function SelectCurrentMenuPosition() {
         navHeight = $('nav').height() + 5;
        if ($(window).scrollTop() < $('#formulas').position().top - navHeight) {
            $('#nav_systems').addClass('nav-item_selected');
        } else {
            $('#nav_systems').removeClass('nav-item_selected');
        }
        if ($(window).scrollTop() >= $('#formulas').position().top - navHeight && $(window).scrollTop() < $('#club').position().top - navHeight) {
            $('#nav_formulas').addClass('nav-item_selected');
        } else {
            $('#nav_formulas').removeClass('nav-item_selected');
        }
        if ($(window).scrollTop() >= $('#club').position().top - navHeight && $(window).scrollTop() < $('#comments').position().top - navHeight) {
            $('#nav_club').addClass('nav-item_selected');
        } else {
            $('#nav_club').removeClass('nav-item_selected');
        }
        if ($(window).scrollTop() >= $('#comments').position().top -navHeight) {
            $('#nav_reviews').addClass('nav-item_selected');
        } else {
            $('#nav_reviews').removeClass('nav-item_selected');
        }
    }

    $(window).scroll(function () {
        var fixHeight = $('header').height() + $('.s-adv_block').height();
        if ($(window).scrollTop() > fixHeight) {
            $('body').addClass('fixed-nav');
        }
        else {
            $('body').removeClass('fixed-nav');
        }
        SelectCurrentMenuPosition()

    });


});

function jump(h) {
    navHeight = $('nav').height();
    var top = $(h).position().top - $('nav').height();
    console.log(top);
    console.log($(h).position().top);
    window.scrollTo(0, top);
    SelectCurrentMenuPosition();
}