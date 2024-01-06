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


        // BG changer when screen size changes
        var addBackground = function() {
          var ww = document.body.clientWidth;
          if(ww < 1024) {
            $('.top-blog-page-section').removeClass('bg-accent-light-split-top');
          } else if (ww < 576) {
            $('.blog-page-header').addClass('bg-accent-light-split-top');
          }
        };
      
        $(window).resize(function(){
          addBackground();
        });
      
        addBackground();

    // Flickity
    $('.carousel').flickity({
      // options
      cellAlign: 'center',
      wrapAround: true
    });

});

// Lightgallery script
lightGallery(document.getElementById('lightgallery'), {
  speed: 300,
  download: false
});
