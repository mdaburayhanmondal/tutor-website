// toggle mobile navbar
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobileMenuToggle");
  const mobileMenu = document.querySelector(".navbar .mobileMenuItems");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

// change navbar bg on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (this.window.scrollY > 109) {
    navbar.classList.add("navbarScroll");
  } else {
    navbar.classList.remove("navbarScroll");
  }
});
