// $('.hamburger-button').click(function(){
//     $('.mobile-menu').fadeToggle(100);
//     $(this).toggleClass('active');
// });


// A $( document ).ready() block.
$( document ).ready(function() {
    
    $(".hamburger-button").click(function(){
        $(".mobile-menu").slideToggle(300);
        $(this).toggleClass("active");
        if($(".hamburger-button").hasClass("active")){
      
        $(".hamburger-button").html('<i class="fa-solid fa-xmark"></i>');
      
        } else {
      
          $(".hamburger-button").html('<i class="fa-solid fa-bars"></i>');
      
        }
    });

    $(".mobile-dropdown").click(function(){
      $(".mobile-dropdown-content").slideToggle(300);
    });

    $(".mobile-dropdown-2").click(function(){
      $(".mobile-dropdown-content-2").slideToggle(300);
    });

    // Flickity
    $('.carousel').flickity({
      // options
      cellAlign: 'center',
      wrapAround: true
    });


    // Add Flickity when screen size changes
    var addCarousel = function() {
    var ww = document.body.clientWidth;
    if(ww < 815) {
      $('.featured-blogs').addClass('carousel');
      $('.featured-blogs-card').addClass('carousel-cell');
    } else {
      $('.featured-blogs').removeClass('carousel');
      $('.featured-blogs-card').removeClass('carousel-cell');
    }
  };

  $(window).resize(function(){
    addCarousel();
  });

  addCarousel();

});

// Lightgallery script
lightGallery(document.getElementById('lightgallery'), {
  speed: 300,
  download: false
});
