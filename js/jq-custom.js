jQuery(function ($) {
    $(document).ready(function () {
        $('.gym-buttons .gym').click(function () {
            wrapperClass = $(this).attr('id');
            $('.gym-buttons .gym').each(function () {
                if ($(this).attr('id') == wrapperClass) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
            $('.gym-wrapper').each(function () {
                if ($(this).hasClass(wrapperClass)) {
                    $(this).addClass('active').show();
                } else {
                    $(this).removeClass('active').hide();
                }
            });
        });
    });
});