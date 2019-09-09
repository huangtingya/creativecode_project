$(function(){
	$(window).bind('scroll resize',function(){
    var $this = $(this);
    var $this_Top = $this.scrollTop();
    if ($this_Top < 50) {
      // index-m-topbar
      $('.m-topbar').stop().animate({top:'0px'});
      $('.m-topbar').css({'background-color':'',"box-shadow":""});
      // main-content-animation
      $('.effect_block').addClass('effect_Active').fadeIn(1000);
      $('.effect_block h2').addClass('effect_Textshow').fadeIn(2000);
      $('.effect_block p').addClass('effect_Textshow').fadeIn(2200);
      $('.content_img').addClass('pe_pound_Active').fadeIn(2200);
      // about-content-animation
      $('.about_acc_line').removeClass('aboutActive');
      $('.about_acc_img').removeClass('typeText_Active');
      // service-content-animation
      $('.service_acc_line').removeClass('serviceline_Active');
      $('.service_white_bg').removeClass('service_bg_Active').fadeOut(100);
      $('.service_text span').removeClass('service_text_Active').fadeOut('fast');
      $('.service_content h5').fadeOut(200);
      $('.service_content h6').fadeOut(400);
      $('.service_acc_img').animate({ right: '-500px'});
      // vision-content-animation
      $('.vision_top_line').removeClass('visionline_Active').fadeOut();
      $('.vision_content h5').fadeOut(200);
      $('.vision_content h6').fadeOut(400);
      $('.vision_text').removeClass('service_text_Active').fadeOut(1500);
      // group-content-animation
      $('.group_line').removeClass('groupline_Active').fadeOut(1000);
      $('.group_content h5').fadeOut(200);
      $('.group_content h6').fadeOut(400);
      $('.icon_main_info span').removeClass('groupicon_Active').fadeOut(500);
      $('.icon_main_info > h6, .icon_main_info > p').fadeOut(400);

    }if ($this_Top > 60) {
      // index-m-topbar
      $('.m-topbar').stop().animate({top:'0px'});
      $('.m-topbar').css({"background-color":"#fff","box-shadow":"0px 0px 5px rgba(0,0,0,.2)","height":"90px"});

    }if ($this_Top >= 380) {
    	// main-content-animation
      $('.effect_block').removeClass('effect_Active').fadeOut(200);
      $('.effect_block h2').removeClass('effect_Textshow').fadeOut(200);
      $('.effect_block p').removeClass('effect_Textshow').fadeOut(200);
      $('.content_img').removeClass('pe_pound_Active').fadeIn(200);
      // about-content-animation
      $('.about_acc_line').addClass('aboutActive');
      $('.about_acc_img').addClass('typeText_Active');

    }if ($this_Top >= 650) {
      // service-content-animation
      $('.service_acc_line').addClass('serviceline_Active');
      $('.service_white_bg').addClass('service_bg_Active').fadeIn(1000);
      $('.service_content h5').fadeIn(200);
      $('.service_content h6').fadeIn(400);
      $('.service_acc_img').stop().animate({ right: '+170px'}).fadeIn(1000);

    }if ($this_Top > 720) {
	  // service-content-animation
	  $('.service_text span').addClass('service_text_Active').fadeIn();


    }if ($this_Top > 1200) {
	  // vision-content-animation
	    $('.vision_top_line').addClass('visionline_Active').fadeIn(500);
      $('.vision_content h5').fadeIn(1000);
      $('.vision_content h6').fadeIn(1200);
      $('.vision_text').addClass('service_text_Active').fadeIn(1500);

    }if ($this_Top > 1500) {
      // group-content-animation
      $('.group_line').addClass('groupline_Active').fadeIn(500);
      $('.group_content h5').fadeIn(200);
      $('.group_content h6').fadeIn(400);
      $('.icon_main_info > h6, .icon_main_info > p').fadeIn(400);
      $('.icon_main_info span').addClass('groupicon_Active').fadeIn(1000);
      $('.group_content_line').addClass('visionline_Active').fadeIn(500);
    }
    }).scroll();
});








