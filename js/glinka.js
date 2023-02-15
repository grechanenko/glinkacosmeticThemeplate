// Показать диалог "Моментальный заказ" на десктопе
$('#quick-order__button').click(function() {
  $('#modal__quick-order').addClass("quick-order__active");
})

// Показать диалог "Моментальный заказ" из мобильного меню
$('#quick-order__button-mobile').click(function() {
  $('#modal__quick-order').addClass("quick-order__active");
  $('.menu-mobile__popup').toggleClass('menu-mobile-animate');
  $('.mobile-menu__overlay').toggle();
})

// Показать диалог "Моментальный заказ" в мобильном меню
$('#quick-order__button-mobile').click(function() {
  $('#modal__quick-order').addClass("quick-order__active");
  $('.menu-mobile__popup').toggleClass('menu-mobile-animate');
  $('.mobile-menu__overlay').toggle();
})

// Закрыть диалог "Моментальный заказ" по нажатию на кнопку
$('.modal__quick-order__close').click(function() {
  $('.quick-order').removeClass('quick-order__active');
});

// Закрыть диалог "Моментальный зака" по нажатию на фон
$('#modal__quick-order').click(function(e) {
  if (e.target == this) {
    $('#modal__quick-order').removeClass('quick-order__active');
  }
});

// При прокручивании уменьшить раздел header (для desctop)
var main = $('.main');
$(window).on("scroll", function() {
  var s = $(this).scrollTop();
  var w = $(window).width();

  // Если разрешение экрана больше media 768
  if (w > 768) {
    if (s > 189) {
      $('.header-top').hide();
    } else {
      $('.header-top').show();
    }
  }
});

// Переключение вкладок в карточке товара
$(function() {
  var tab = $('#product-tabs .section-product__tabs-items > div');
  tab.hide().filter(':first').show();

  // Клики по вкладкам.
  $('#product-tabs .section-product__tabs-nav__item a').click(function(){
    tab.hide();
    tab.filter(this.hash).show();
    $('.section-product__tabs-nav__item a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();

});

// Уменьшение количества товара в карточке товара
$('.section-product__buttons-count__dec').click(function () {
  var $input = $(this).parent().find('#count');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});

// Увеличение количества товара в карточке товара
$('.section-product__buttons-count__inc').click(function () {
  var $input = $(this).parent().find('#count');
  
  
  console.log($input);
  
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});

// Показать мобильное меню
$('.header-mobile__burger-button').click(function () {
  //$('.menu-mobile__popup').toggle();
  $('.menu-mobile__popup').toggleClass('menu-mobile-animate');
  $('.mobile-menu__overlay').toggle();
});

// Закрыть мобильное меню по нажатию на кнопку
$('.menu-mobile__close').click(function () {
  //$('.menu-mobile__popup').toggle();
  $('.menu-mobile__popup').toggleClass('menu-mobile-animate');
  $('.mobile-menu__overlay').toggle();
});

// Закрыть мобильное меню по нажатию на фон
$('.mobile-menu__overlay').click(function () {
  //$('.menu-mobile__popup').toggle();
  $('.menu-mobile__popup').toggleClass('menu-mobile-animate');
  $('.mobile-menu__overlay').toggle();
});

// Показать диалог "Фильтры" в мобиле
$('#filter-mobile__button').click(function() {
  $('#modal__mobile-filter').addClass("modal__mobile-filter__popup-active");
  $('.mobile-filter__overlay').toggle();
});

// Закрыть диалог "Фильтры" по нажатию на кнопку
$('#modal__mobile-filter__button-close').click(function() {
  $('.mobile-filter__popup').removeClass('modal__mobile-filter__popup-active');
  $('.mobile-filter__overlay').toggle();
});

// Закрыть диалог "Фильтры" по нажатию на фон
$('.mobile-filter__overlay').click(function () {
  $('.mobile-filter__popup').removeClass('modal__mobile-filter__popup-active');
  $('.mobile-filter__overlay').toggle();
});
