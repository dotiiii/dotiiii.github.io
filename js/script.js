/*
*  Const
*/
var lastPosition =  $(window).scrollTop();
var screenWidth = $(window).width();

/*
*  functions
*/
function menuAction(target){
   if(target.hasClass('opened'))
      {
        target.removeClass('opened');
      }
    else{
       $('.menu__list li .opened').removeClass('opened');
       target.toggleClass('opened');
    }
}

function submenuAction(target){
  var t=target.next('ul.menu__sublist');
  if(t.hasClass('activated'))
      {
       t.removeClass('activated');               
      }else
        {
          $('.menu__list li .activated').removeClass('activated'); 
          t.toggleClass('activated');
        }
}

function buttonAction(target){
    target.toggleClass('menu__button--active');
    $('.menu__list').toggleClass('open');
    $('.menu__sublist.activated').removeClass('activated');
}

/*
*  Run
*/
$(window).resize(function(){
  screenWidth = $(window).width();
});

$(window).on('scroll',function(){
  var position = $(window).scrollTop();
  
  if(position == 0){
      $('.menu').removeClass('menuFixed');
     }
  else if(position > 0 && screenWidth > 767){
    $('.menu').addClass('menuFixed');
  }
  if(lastPosition < position && screenWidth > 767 )
    {
      $('.menu').css('top','-100px');
      $('.menu__list li .activated').removeClass('activated'); 
      $('.menu__button').removeClass('menu__button--active');
      $('.menu__list').removeClass('open');
    }
  if(lastPosition > position && screenWidth > 767){
       $('.menu').css('top','0px');
  }
  lastPosition = position;
});

$(document).ready(function(){
  
  $('.menu__button').on('click',function(){
    buttonAction($(this));
  });
  
  $('.menu__item').on('click',function(){
     menuAction($(this));
  });
    
  $('.menu__dropdown').on('click',function(){
      submenuAction($(this));
   });
  
})




