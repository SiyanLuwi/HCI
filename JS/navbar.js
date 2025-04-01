// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split("/").pop();
  
  // Select all navigation items
  const navItems = document.querySelectorAll("[data-nav-item]");
  
  // Add active class to current page nav item
  navItems.forEach(item => {
    const page = item.getAttribute("data-page");
    if ((currentPage === "" && page === "index") || 
        currentPage === page + ".html" || 
        currentPage.includes(page)) {
      item.classList.add("navbar__item--active");
    }
  });
  
  // Mobile menu toggle functionality
  const hamburgerButton = document.querySelector(".hamburger-menu");
  const navWrapper = document.querySelector(".header__nav-wrapper");
  
  if (hamburgerButton && navWrapper) {
    // Set up click event on hamburger button
    hamburgerButton.addEventListener("click", function() {
      console.log("Hamburger clicked");
      this.classList.toggle("hamburger-menu--active");
      navWrapper.classList.toggle("header__nav-wrapper--active");
    });
    
    document.addEventListener("click", function(event) {
      if (!hamburgerButton.contains(event.target) && !navWrapper.contains(event.target)) {
        hamburgerButton.classList.remove("hamburger-menu--active");
        navWrapper.classList.remove("header__nav-wrapper--active");
      }
    });
    
    window.addEventListener("resize", function() {
      if (window.innerWidth > 768) {
        hamburgerButton.classList.remove("hamburger-menu--active");
        navWrapper.classList.remove("header__nav-wrapper--active");
      }
    });
  } else {

  }
});

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(function() {
    const hamburgerButton = document.querySelector(".hamburger-menu");
    const navWrapper = document.querySelector(".header__nav-wrapper");
    
    if (hamburgerButton && navWrapper) {
      hamburgerButton.addEventListener("click", function() {
        this.classList.toggle("hamburger-menu--active");
        navWrapper.classList.toggle("header__nav-wrapper--active");
      });
    }
  }, 100);
}