$(function(){
    'use strict'

// FlexSlider Testimonials
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: true,
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 32,
    minItems: 2,
    maxItems: 5,
    move: 1
  });

  //.parallax(xPosition, speedFactor, outerHeight) options:
  //xPosition - Horizontal position of the element
  //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
  $('#banner').parallax("50%", 0.3);
  $('#page-banner').parallax("50%", 0.3);
  $('#features-para').parallax("50%", 0.3);
  $('#about-features').parallax("50%", 0.3);
  $('#footer').parallax("50%", 0.1);


// InView
var $fadeInDown = $('.banner-text h2, .banner-text h1, .banner-text p, .icon-box, .features div.block, .testimonials h2, .testimonials h4, .testimonial-text, .testimonial-head h2, .testimonial-head h4');
var $fadeInLeft = $('.profile-header h3, .feature-text h2, .feature-text a, .footer-content h3, .footer-content h2');
var $fadeInRight = $('.header3 .reg-form');

$fadeInDown.css('opacity', 0);
$fadeInLeft.css('opacity', 0);
$fadeInRight.css('opacity', 0);

// InView - fadeInDown
$fadeInDown.one('inview', function(event, visible) {
  if (visible) { $(this).addClass('animated fadeInDown'); }
});

// InView - fadeInLeft
$fadeInLeft.one('inview', function(event, visible) {
  if (visible) { $(this).addClass('animated fadeInLeft'); }
});

// InView - fadeInRight
$fadeInRight.one('inview', function(event, visible) {
  if (visible) { $(this).addClass('animated fadeInRight'); }
});


})