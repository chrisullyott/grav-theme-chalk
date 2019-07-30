//= require_self

$(function() {

  // ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.scrollappear').scrollAppear();
  }

  // Fluidbox
  if (typeof $.fn.fluidbox === 'function') {
    $('a[rel=lightbox').fluidbox();
  }

});
