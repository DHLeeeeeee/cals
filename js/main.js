$(function () {
  $('.menuSlider').slick({
    arrows: false,
    speed: 200,
    draggable: false,
    swipe: false,
    touchMove: false,
  });

  $('.action_btn').click(function () {
    var slideNo = $(this).index();

    setTimeout($('.menuSlider').slick('slickGoTo', slideNo), 200);
    $(this).addClass('on').siblings().removeClass('on');
  });

  $('.btn_more').on('click', function () {
    $('.menu_container').toggleClass('on');
    $(this).toggleClass('on');
  });

  $('.notice_tab .tab').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    var tabNum = $(this).index();
    $(this).parent().next().find('.content').eq(tabNum).addClass('on').siblings().removeClass('on');
  });

  $('.link_btn').on('click', function () {
    $(this).toggleClass('on');
  });

  $('.m_open').on('click', function () {
    $('.header .inner').addClass('on');
  });

  $('.xi-close').on('click', function () {
    $('.header .inner').removeClass('on');
  });

  $('.header_menu > li').on('click', function () {
    $('.sub_menu', this).toggleClass('on');
  });

  $('.m_login').on('click', function () {
    $('.mainBanner .inner').addClass('on');
    $('.header .inner').removeClass('on');
  });

  $('.mainBanner .inner').click(function (e) {
    if ($(e.target).hasClass('inner')) {
      $('.mainBanner .inner').removeClass('on');
    }
  });
});
