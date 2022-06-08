$(document).ready(function () {
    $('.carousel__photo').slick({
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    });
    $('ul.catalog__btns').on('click', 'li:not(.catalog__btn_active)', function () {
        $(this)
            .addClass('catalog__btn_active').siblings().removeClass('catalog__btn_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-card__content').eq(i).toggleClass('catalog-card__content_active');
                $('.catalog-card__list').eq(i).toggleClass('catalog-card__list_active');
            })
        });
    };

    toggleSlide('.catalog__link');
    toggleSlide('.catalog-item__back');
    

    $('[data-modal=consultation]').on ('click',function()   {
        $('.order, #consultation').fadeIn('slow');
    });

    $('[data-modal=buy]').on ('click',function()   {
        $('.order, #good').fadeIn('slow');
    });
    $('.order-consultation__close').on('click', function() {
        $('.order, #consultation').fadeOut('slow');
    });
    $('.order-good__close').on('click', function() {
        $('.order,#good').fadeOut('slow');
    });

    $('#consultation-form').validate();
    $('#consultation form').validate();
    $('#good form').validate();

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    })
    $(window).scroll(function(){
        if ($(this).scrollTop() > 900) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }
    })
    $("a[href^='#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"})
        return false;
    })
});