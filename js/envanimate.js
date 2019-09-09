$(function() {
    $('.office_seat_info').hide();
    $(window).scroll(function(){
      var winTop = $(window).scrollTop()
             // console.log(winTop);
          officeInfo = $('.office_env_info').offset().top;
          officeseatInfo = $('.office_area').offset().top;
          officerestInfo = $('.office_bar').offset().top;
          if(winTop + 510 >= officeInfo){
            $('.white_bg').animate({
              'width' : '400px',
              'background-color' : '#fff'
            }, 800);
            $('.env_room_posi').animate({ left:'35%'}, 1000);
          }
          if(winTop + 600 > officeseatInfo){
            $('.office_seat').animate({ left: '0px'},1000);
            $('.office_seat_info').fadeIn(8000);
          }else{
            $('.office_seat_info').fadeOut(5000);
          }
          if(winTop + 500 > officerestInfo){
            $('.office_bar').animate({ right: '0px'},2000);
            $('.office_bar_info').fadeIn(8000);  
          }else{
            $('.office_bar_info').fadeOut(8000);
          }
    });
});