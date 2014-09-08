$(document).ready(function() {

    $('.b-faq__question').click(function() {
        var $this = $(this);

        $('.b-faq__questions__item').removeClass('active');

        $this.parent('.b-faq__questions__item').addClass('active');
    });

    $('.b-solutions__slider').bxSlider({
        mode: 'fade',
        pager: false,
        nextText: '',
        prevText: '',
    });

});