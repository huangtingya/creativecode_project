$(function() {
  $(window).load(function(){
    // website_loading
    $('#loading').fadeOut(1000);
  });

  $('.acc_ctrl').on('click', function(e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().stop().slideUp(300);

    } else {
      $(this).addClass('active');
      $(this).next().stop().slideDown(300);
    }
  });

  $('.bus_ctrl').on('click', function(e) {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().stop().slideUp(300);

    } else {
      $(this).addClass('active');
      $(this).next().stop().slideDown(300);
    }
  });
  // fixed-menu-common
  $(window).bind('scroll resize',function(){
    var $this = $(this);
    var $this_Top = $this.scrollTop();
    if ($this_Top < 50) {
      $('#topbar').stop().animate({top:'0px'});
      $('#topbar').css({
        'background-color':'',
        "box-shadow":""
      });
      $('#topbar').append("<style>#topbar li:before{background-color:#F1632A}<style>");
      $('.m-topbar').stop().animate({top:'0px'});
      $('.m-topbar').css({'background-color':'',"box-shadow":""});
    }else{
      $('#topbar').stop().animate({top:'0px'});
      $('#topbar').css({
        "background-color":"#fff",
        "box-shadow":"0px 0px 5px rgba(0,0,0,.2)"
      });
      $('#topbar').append("<style>#topbar li:before{background-color:#F1632A}<style>");
      // index-m-topbar
      $('.m-topbar').stop().animate({top:'0px'});
      $('.m-topbar').css({"background-color":"#fff","box-shadow":"0px 0px 5px rgba(0,0,0,.2)","height":"90px"});
    }
  }).scroll();

    $('#joinus_top').click(function(){
    var $joinusTo_scrolltop = $('.acc_container');
    $('html,body').animate({ scrollTop: $joinusTo_scrolltop.offset().top - $('#topbar').innerHeight() - 120 },500);
    return false;
  });
    $('#environment_top').click(function(){
    var $envTo_scrolltop = $('.office_slideshow');
    $('html,body').animate({ scrollTop: $envTo_scrolltop.offset().top - $('#topbar').innerHeight() - 120 },500);
    return false;
  });
    $('#contact_top').click(function(){
    var $contactTo_scrolltop = $('.address_google');
    $('html,body').animate({ scrollTop: $contactTo_scrolltop.offset().top - $('#topbar').innerHeight() - 120 },500);
    return false;
  });
    $('#bybus').click(function(){
    var $bybusTo_scrolltop = $('.bus_subtitle');
    $('html,body').animate({ scrollTop: $bybusTo_scrolltop.offset().top - $('#topbar').innerHeight() - 50 },500);
    return false;
  });
    $('#bymrt').click(function(){
    var $bymrtTo_scrolltop = $('.bus_text.border_cancel');
    $('html,body').animate({ scrollTop: $bymrtTo_scrolltop.offset().top - $('#topbar').innerHeight() + 50 },500);
    return false;
  });
    $('#bycar').click(function(){
    var $bycarTo_scrolltop = $('.bus_text.border_cancel.a_car');
    $('html,body').animate({ scrollTop: $bycarTo_scrolltop.offset().top - $('#topbar').innerHeight() + 80 },500);
    return false;
  });
  // open mobile___index
    $('.mobilemenu').click(function(){
      $('.mobilemenu').toggleClass('active');
      $('.overlay').toggleClass('open');
      $('body').toggleClass('active');
    });
  // open mobile menu__inside
  $('.js_toggle_menu').click(function(e){
      $('.mobile_header_nav .fl_right').slideToggle();
      $(this).toggleClass('open');
     // e.preventDefault();
  });
  // mobile_scrollup
  var $mobile_scrollUp = $('.mobile_scrollup');
  $mobile_scrollUp.hide();
  $(window).on('scroll resize',function(){
    if($(this).scrollTop() >= 400){
      $('.mobile_scrollup').fadeIn();
    }else if($(this).scrollTop() < 800){
      $('.mobile_scrollup').fadeOut();
    }
  });
  $('.mobile_scrollup').click(function(){
    $('html,body').animate({scrollTop:0},800);
    return false;
  });
});
