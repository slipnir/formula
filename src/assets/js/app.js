$(document).ready(function() {
    $('.js__button').click(function () {
       $('.js__modal').show();
    });

    $('.js__close').click(function () {
        $('.js__modal').hide();
    });

    $('.js__button-menu').click(function () {
        $('.js__menu').show();
    });

    $('.js__close-menu').click(function () {
        $('.js__menu').hide();
    });
});
