$(function () {
  $('.menuSlider').slick({
    arrows: false,
    speed: 200,
    draggable: false,
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
});
