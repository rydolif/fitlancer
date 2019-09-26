$(function() {

//------------------------------acardeon---------------------------
  $(".block__content").slideUp("slow");
  // $(".block").first().addClass('block--active');
  $(".block--active .block__content").slideDown("slow");

  $(".block__header").on("click", function(){
    if ($(this).parent().hasClass('block--active')) {
      $(this).parent().removeClass('block--active');
      $(".block__content").slideUp("slow");
    }
    else {
      $(".block--active .block__content").slideUp("slow");
      $(".block--active").removeClass('block--active');
      $(this).parent().addClass('block--active');
      $(".block--active .block__content").slideDown("slow");
    }
  });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.nav').toggleClass('nav--active');
    $('body').toggleClass('body--menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.6s'});


//---------------------------js-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.konstruktor--step__form_header a:first').addClass('btn--active');
   $('.konstruktor--step__form_header a').click(function(event){
    event.preventDefault();
    $('.konstruktor--step__form_header a').removeClass('btn--active');
    $(this).addClass('btn--active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

  
});
