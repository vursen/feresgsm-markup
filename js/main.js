$(document).ready(function() {

    $('.b-faq__question').click(function() {
        var $this = $(this);

        $('.b-faq__questions__item')
            .removeClass('active')
            .find('.b-faq__answer')
            .slideUp();

        $this
            .parent('.b-faq__questions__item')
            .addClass('active')
            .find('.b-faq__answer')
            .slideDown();
    });

    $('.b-solutions__slider').bxSlider({
        mode: 'fade',
        pager: false,
        nextText: '',
        prevText: '',
    });

    $('textarea, input').placeholder();

});

$.fn.slideUpTransition = function() {
    return this.each(function() {
        var $el = $(this);
        $el.css("max-height", "0");
        $el.addClass("height-transition-hidden");
    });
};

$.fn.slideDownTransition = function() {
    return this.each(function() {
        var $el = $(this);
        $el.removeClass("height-transition-hidden");

        // temporarily make visible to get the size
        $el.css("max-height", "none");
        var height = $el.outerHeight();

        // reset to 0 then animate with small delay
        $el.css("max-height", "0");

        setTimeout(function() {
            $el.css({
                "max-height": height
            });
        }, 1);
    });
};