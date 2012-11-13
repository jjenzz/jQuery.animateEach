jQuery.animateEach
==================

What is this?
-------------
`$(selector).animateEach()` allows you to animate each element in the matched set one after the other.

How do I use it?
----------------
    $('#demo li').animateEach({'font-size': '22px'});

You can also pass a duration:

    $('#demo li').animateEach({'font-size': '22px'}, 1000);

... a callback (that will fire after all the animations have completed):

    $('#demo li').animateEach({'font-size': '22px'}, function() {
      $(this).css('background', 'red');
    });

... or both:

    $('#demo li').animateEach({'font-size': '22px'}, 1000, function() {
      $(this).css('background', 'red');
    });