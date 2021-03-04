$(function(){

    $('.drop-down').on('click', function(){
        $('.drop-down, .drop-down__content').toggleClass('show');
    });

    $('.faq__item').on('click', function(){
        $('.faq__item').removeClass('faq__item--active');
        $(this).toggleClass('faq__item--active');
        
    });

     $('.menu__btn').on('click', function(){
        $('.header__menu-list, .menu__btn').toggleClass('active');
    });

});