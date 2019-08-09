$(function() {

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.nav').toggleClass('nav--active');
    $('body').toggleClass('body--menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

// //----------------------------------------fixed----------------------------------
//   $(window).scroll(function(){
//       if($(this).scrollTop()>20){
//           $('.header').addClass('header--active');
//       }
//       else if ($(this).scrollTop()<20){
//           $('.header').removeClass('header--active');
//       }
//   });

// //-------------------------скорость якоря---------------------------------------
//   $(".header__list").on("click","a", function (event) {
//       event.preventDefault();
//       var id  = $(this).attr('href'),
//           top = $(id).offset().top;
//       $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
//   //--------------------закриття меню при кліку на ссилку якоря--------------------
//      // $('.hamburger').removeClass('hamburger--active');
//      // $('.header-menu').removeClass('header-menu');
//      // $('.header--active').removeClass('header--active');
//      // $('.nav--active').removeClass('nav--active');

//   });
  
});
