$(document).ready(function() {

    $('.b-faq__question').click(function() {
        var $this = $(this);

        $('.b-faq__questions__item')
            .removeClass('active')
            .find('.b-faq__answer')
            .hide();

        $this
            .parent('.b-faq__questions__item')
            .addClass('active')
            .find('.b-faq__answer')
            .slideDown(300);
    });

    $('.b-solutions__slider').bxSlider({
        mode: 'fade',
        pager: false,
        nextText: '',
        prevText: '',
    });

    $('textarea, input').placeholder();

});