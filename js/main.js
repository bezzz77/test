$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    autoplay: 0,
    navigation: true,
    autoplaySpeed: 1000,
    itemsDesktop: [1199, 1],
    itemsMobile: [479, 1],
    dots : true,
    navClass : true,
  }

  );

  var owl = $('.owl-carousel');
  owl.owlCarousel();

  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  })

  // $('#navbarNav').on( "click", function() {
  //     $('#navbarNav').css({
  //       'display' : 'block',
  //     });
  //
  //   });

  $('#navbarNav #close').on( "click", function() {
      $('#navbarNav').css({
        'display' : 'none',
      });
    });
});
