document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll("[data-nav-item]");
  const contentPlaceholder = document.querySelector("main"); // Target the main content area

  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Remove active class from all items
      navItems.forEach((i) => {
        i.classList.remove("navbar__item--active");
      });
      // Add active class to clicked item
      this.classList.add("navbar__item--active");

      // Dynamically load the content based on the clicked item
      const page = this.getAttribute("data-page"); // Get the target page from the data attribute
      if (page) {
        fetch(page)
          .then((response) => response.text())
          .then((html) => {
            // Extract the content inside the <main> tag from the fetched HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const newContent = doc.querySelector("main").innerHTML;

            // Replace the current main content with the new content
            contentPlaceholder.innerHTML = newContent;
          })
          .catch((error) => {
            console.error("Error loading page:", error);
          });
      }
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
});