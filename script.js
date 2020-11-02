$(".hamburger-div").on("click", function (event) {
  $(".mobile-menu-div").toggle(200);
  console.log("CLICKED");
});

$(".bio-link").on("click", function (event) {
  document.querySelector(".bio").scrollIntoView({
    behavior: "smooth",
  });
});

$(".portfolio-link").on("click", function (event) {
  document.querySelector(".portfolio").scrollIntoView({
    behavior: "smooth",
  });
});

$(".contact-link").on("click", function (event) {
  document.querySelector(".contact").scrollIntoView({
    behavior: "smooth",
  });
});
