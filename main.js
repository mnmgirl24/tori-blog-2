// A $( document ).ready() block.
$(document).ready(function () {
  $(".hamburger-button").click(function () {
    $(".mobile-menu").slideToggle(300);
    $(this).toggleClass("active");
    if ($(".hamburger-button").hasClass("active")) {
      $(".hamburger-button").html('<i class="fa-solid fa-xmark"></i>');
    } else {
      $(".hamburger-button").html('<i class="fa-solid fa-bars"></i>');
    }
  });

  $(".mobile-dropdown").click(function () {
    $(".mobile-dropdown-content").slideToggle(300);
  });

  $(".mobile-dropdown-2").click(function () {
    $(".mobile-dropdown-content-2").slideToggle(300);
  });

  // BG changer when screen size changes
  // var addBackground = function() {
  //   var ww = document.body.clientWidth;
  //   if(ww < 1024) {
  //     $('.top-blog-page-section').removeClass('bg-accent-light-split-top');
  //   } else if (ww < 576) {
  //     $('.blog-page-header').addClass('bg-accent-light-split-top');
  //   }
  // };

  // $(window).resize(function(){
  //   addBackground();
  // });

  // addBackground();

  // Flickity
  $(".carousel").flickity({
    // options
    cellAlign: "center",
    wrapAround: true,
  });
});

// Lightgallery script
lightGallery(document.getElementById("lightgallery"), {
  speed: 300,
  download: false,
});

// GSAP

let timeline = gsap.timeline({ duration: 1, delay: 1, ease: "elastic" });

timeline
  .to(".top-screen-load", { xPercent: -100 }, 1)
  .to(".bottom-screen-load", { xPercent: 100 }, 1);

gsap.registerPlugin(ScrollTrigger);

console.log(gsap);

function createFadeIn(target, options) {
  return gsap.from(target, {
    yPercent: options.yPercent || 50,
    opacity: options.opacity || 0,
    duration: options.duration || 1.5,
    delay: options.delay || 0.1,
    stagger: options.stagger || 0.2,
  });
}

let scrollAbout = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-block",
    toggleActions: "restart none none none",
    start: "10% bottom",
  },
});

scrollAbout.add(createFadeIn("#about-block > *", {}));

let scrollFeaturePost = gsap.timeline({
  scrollTrigger: {
    trigger: "#featured-blog-loop",
    toggleActions: "restart none none none",
    // start: "10% bottom",
  },
});

scrollFeaturePost
  .add(createFadeIn("#featured-blog-loop .subhead", {}))
  .add(createFadeIn(".featured-blogs", {}), "<0.2");

let scrollBlogCats = gsap.timeline({
  scrollTrigger: {
    trigger: "#blog-topics",
    toggleActions: "restart none none none",
    // start: "10% bottom",
  },
});

scrollBlogCats
  .add(createFadeIn("#blog-topics .subhead", {}))
  .add(createFadeIn("#blog-topics .carousel", {}), "<0.2");

// let scrollFooter = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#footer",
//     toggleActions: "restart none none none",
//     // start: "10% bottom",
//   },
// });

// scrollFooter.add(createFadeIn("footer *", {}));
// .add(createFadeIn("#blog-topics .carousel", {}), "<0.2");
