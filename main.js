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

    //   Animate on Scroll
    AOS.init({
      duration: 500 // values from 0 to 3000, with step 50ms
  });
    // $('.carousel').slick({
    //   setting-name: setting-value
    // });
});

// Lightgallery script
lightGallery(document.getElementById('lightgallery'), {
  speed: 300,
  download: false
});