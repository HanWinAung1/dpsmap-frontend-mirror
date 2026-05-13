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
  $('#contact2').click(function() {
    $('#contactForm2').fadeToggle();
  })
  $(document).mouseup(function (y) {
    var container = $("#contactForm2");

    if (!container.is(y.target) 
        && container.has(y.target).length === 0) 
    {
        container.fadeOut();
    }
  });
  $('#contact3').click(function() {
    $('#contactForm3').fadeToggle();
  })
  $(document).mouseup(function (b) {
    var container = $("#contactForm3");

    if (!container.is(b.target) 
        && container.has(b.target).length === 0) 
    {
        container.fadeOut();
    }
  });
  $('#contact4').click(function() {
    $('#contactForm4').fadeToggle();
  })
  $(document).mouseup(function (z) {
    var container = $("#contactForm4");

    if (!container.is(z.target) 
        && container.has(z.target).length === 0) 
    {
        container.fadeOut();
    }
  });
  $('#contact5').click(function() {
    $('#contactForm5').fadeToggle();
  })
  $(document).mouseup(function (n) {
    var container = $("#contactForm5");

    if (!container.is(n.target) 
        && container.has(n.target).length === 0) 
    {
        container.fadeOut();
    }
  });
  $('#contact6').click(function() {
    $('#contactForm6').fadeToggle();
  })
  $(document).mouseup(function (i) {
    var container = $("#contactForm6");

    if (!container.is(i.target) 
        && container.has(i.target).length === 0) 
    {
        container.fadeOut();
    }
  });
  $('#contact7').click(function() {
    $('#contactForm7').fadeToggle();
  })
  $(document).mouseup(function (p) {
    var container = $("#contactForm7");

    if (!container.is(p.target) 
        && container.has(p.target).length === 0) 
    {
        container.fadeOut();
    }
  });
  $('#contact8').click(function() {
    $('#contactForm8').fadeToggle();
  })
  $(document).mouseup(function (t) {
    var container = $("#contactForm8");

    if (!container.is(t.target) 
        && container.has(t.target).length === 0) 
    {
        container.fadeOut();
    }
  });
  
});

