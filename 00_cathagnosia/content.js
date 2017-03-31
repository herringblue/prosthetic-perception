$( document ).ready(function() {

  var content = document.body.innerHTML;
  document.body.innerHTML += content;
  document.body.innerHTML += content;

  scrollTo(0,$(document).height() * 2 / 3 + 1);

  $(window).scroll(function() {
      if ( $(window).scrollTop() == 0 ) {
          $(window).scrollTop($(document).height());
      }
      else if ( $(window).scrollTop() <= $(document).height() / 3 ) {
          $(window).scrollTop($(document).height() * 2 / 3);
      }
  });

  $(window).bind('DOMMouseScroll mousewheel MozMousePixelScroll', function(e) {
      var scrollPos = 0;

    if (e.type == 'mousewheel') {
        scrollPos = (e.originalEvent.wheelDelta * -1);
    }
    else if (e.type == 'DOMMouseScroll') {
        scrollPos = e.originalEvent.detail;
    }

    if (scrollPos > 0) {
      e.preventDefault();
      return false;
    }
  });
});
