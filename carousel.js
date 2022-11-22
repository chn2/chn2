$(document).ready(function () {
  var owlone = $("#owlone");
  owlone.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      980: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owltwo = $("#owltwo");
  owltwo.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      980: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owlthree = $("#owlthree");
  owlthree.owlCarousel({
    items: 4,
    loop: true,
    mouseDrag: false,
    margin: 30,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
      },
      768: {
        items: 2,
        autoplay: true,
      },
      980: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owlfour = $("#owlfour");
  owlfour.owlCarousel({
    items: 4,
    loop: true,
    mouseDrag: false,
    margin: 30,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
      },
      768: {
        items: 2,
        autoplay: true,
      },
      980: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owlfive = $("#owlfive");
  owlfive.owlCarousel({
    items: 10,
    loop: true,
    mouseDrag: false,
    margin: 20,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        autoplay: true,
      },
      768: {
        items: 5,
        autoplay: true,
      },
      980: {
        items: 8,
        nav: true,
      },
      1200: {
        items: 10,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});