$(function () {
  const mobileBannerUrl = $('.banner__container').attr('data-bg');

  $('.faqs__head').on('click', function () {
    $(this)
      .parents('.faqs__block')
      .toggleClass('active')
      .siblings('.faqs__block')
      .removeClass('active');
    $(this).next('.faqs__body').slideToggle(300);
    $(this)
      .parents('.faqs__block')
      .siblings('.faqs__block')
      .find('.faqs__body')
      .slideUp(300);
  });

  const archiveSlider = $('.banner__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  $('.banner__prev').on('click', e => {
    e.preventDefault();
    archiveSlider.slick('slickPrev');
  });

  $('.banner__next').on('click', e => {
    e.preventDefault();
    archiveSlider.slick('slickNext');
  });

  if ($(window).width() <= 850) {
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.header__nav').toggleClass('is-active');
    });
  }

  if ($(window).width() <= 480) {
    $('.banner__container').css('background-image', `url(${mobileBannerUrl})`);
  }
});
