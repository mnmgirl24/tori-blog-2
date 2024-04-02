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
  // var addBackground = function () {
  //   var ww = document.body.clientWidth;
  //   if (ww < 1024) {
  //     $(".top-blog-page-section").removeClass("bg-accent-light-split-top");
  //   } else if (ww < 576) {
  //     $(".blog-page-header").addClass("bg-accent-light-split-top");
  //   }
  // };

  // $(window).resize(function () {
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

//Slick

$(document).ready(function () {
  $(".featured-blogs-slick").slick({
    lazyLoad: true,
    slidesToShow: 1,
  });
});

// Lightgallery script
lightGallery(document.getElementById("lightgallery"), {
  speed: 300,
  download: false,
});

// GSAP

document.addEventListener("DOMContentLoaded", function () {
  let screenLoadTimeline = gsap.timeline({
    duration: 1,
    delay: 1,
    ease: "elastic",
  });

  screenLoadTimeline
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

  let scrollHeadlines = gsap.timeline({
    scrollTrigger: {
      trigger: ".headline",
      toggleActions: "play none none none",
    },
  });

  scrollHeadlines.add(createFadeIn(".headline", {}), "<0.1");

  let scrollAbout = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-block",
      toggleActions: "play none none none",
      start: "10% bottom",
    },
  });

  scrollAbout.add(createFadeIn(".about-block > *", {}));

  let scrollFeaturePost = gsap.timeline({
    scrollTrigger: {
      trigger: "#featured-blog-loop",
      toggleActions: "play none none none",
    },
  });

  scrollFeaturePost
    .add(createFadeIn("#featured-blog-loop .subhead", {}))
    .add(createFadeIn(".featured-blogs", {}), "<0.2");

  let scrollBlogCats = gsap.timeline({
    scrollTrigger: {
      trigger: "#blog-topics",
      toggleActions: "play none none none",
    },
  });

  scrollBlogCats
    .add(createFadeIn("#blog-topics .subhead", {}))
    .add(createFadeIn("#blog-topics .carousel", {}), "<0.2");

  let scrollAboutBanner = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-banner",
      toggleActions: "play none none none",
    },
  });

  scrollAboutBanner.add(createFadeIn("#about-banner h3", {}));

  let scrollAboutDesc = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-blog",
      toggleActions: "play none none none",
      start: "20% bottom",
    },
  });

  scrollAboutDesc.add(createFadeIn("#about-blog > *", {}));

  let scrollTopBlogPosts = gsap.timeline({
    scrollTrigger: {
      trigger: ".top-blog-page-section",
      toggleActions: "play none none none",
    },
  });

  scrollTopBlogPosts.add(
    createFadeIn(".top-blog-page-section .card", {}),
    "<0.1"
  );

  let scrollBlogPosts = gsap.timeline({
    scrollTrigger: {
      trigger: ".blog-post-list .card",
      toggleActions: "play none none none",
    },
  });

  scrollBlogPosts.add(createFadeIn(".blog-post-list .card", {}), "<0.1");

  let scrollPortfolio = gsap.timeline({
    scrollTrigger: {
      trigger: ".project",
      toggleActions: "play none none none",
    },
  });

  scrollPortfolio.add(createFadeIn(".project", {}), "<0.1");

  let scrollContact = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-block",
      toggleActions: "play none none none",
      start: "50% bottom",
    },
  });

  scrollContact.add(createFadeIn(".contact-block > *", {}), "<0.1");
});
