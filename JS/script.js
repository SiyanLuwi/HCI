// Dynamically load the navbar
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("navbar-placeholder").innerHTML = html;

      // Initialize navbar functionality after loading
      initializeNavbar();
    });
});

// Navbar functionality
function initializeNavbar() {
  const navItems = document.querySelectorAll("[data-nav-item]");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all items
      navItems.forEach((i) => {
        i.classList.remove("navbar__item--active");
      });
      // Add active class to clicked item
      this.classList.add("navbar__item--active");
    });

    // Add hover effect
    item.addEventListener("mouseover", function () {
      if (!this.classList.contains("navbar__item--active")) {
        this.style.transform = "translateY(-2px)";
      }
    });

    item.addEventListener("mouseout", function () {
      if (!this.classList.contains("navbar__item--active")) {
        this.style.transform = "translateY(0)";
      }
    });
  });
}
