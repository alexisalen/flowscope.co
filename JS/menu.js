& (function () {
    var boton = $('#menumovil');
    menu = $('header nav ul');
    menuHeight = menu.Height();

    $(boton).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function () {

        var w = $(window).width();
        if (w > 576 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
}); 
