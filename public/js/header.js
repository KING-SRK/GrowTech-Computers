document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navbar.classList.toggle("active");
    });

    document.querySelectorAll(".navbar-menu a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navbar.classList.remove("active");
      });
    });
  }
});
