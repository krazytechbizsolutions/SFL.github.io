// import '../lib/maskedinput.js';
import modal from 'jquery-modal';
// import selectric from 'selectric';

//select
// $('select').selectric();


//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});


//home slide
$('.dashboard span').on('click', function() {
  $(this).toggleClass('active');
  $(this).next('ul').slideToggle();
});

//mobile menu
$('.menu-open').on('click', function() {
  $('.mobile-menu').fadeIn();
});
$('.mobile-menu__close').on('click', function() {
  $('.mobile-menu').fadeOut();
});

//home -show
$('.home__more').on('click', 'a', function(event) {
  event.preventDefault();
  $(this).parent('.home__more').fadeOut();
  $('.home__show').slideDown();
});
