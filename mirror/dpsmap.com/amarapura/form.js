$(function() {
  
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) 
        && container.has(e.target).length === 0) 
    {
        container.fadeOut();
    }
  });
  $('#contact1').click(function() {
    $('#contactForm1').fadeToggle();
  })
  $(document).mouseup(function (m) {
    var container = $("#contactForm1");

    if (!container.is(m.target) 
        && container.has(m.target).length === 0) 
    {
        container.fadeOut();
    }
  });
  
});

