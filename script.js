$(function() {
  var $slideshow = $('#slideshow'),
      $nav = $slideshow.find('ul');

  $nav.on('click', 'a', function(e) {
    e.preventDefault();
    $li = $(this).closest('li'); // event.currentTarget could also be used in place of 'this'
    idx = $li.index();

    $slideshow.find('figure').stop().filter(':visible').fadeOut(300);
    $slideshow.find('figure').eq(idx).delay(300).fadeIn(300);
    $nav.find(".active").removeClass("active");
    $li.addClass(".active");
  });
});