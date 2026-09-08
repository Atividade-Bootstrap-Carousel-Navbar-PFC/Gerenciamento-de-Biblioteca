document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActiveLink = () => {
    const scrollPos = window.scrollY + 100;
    let currentIndex = 0;

    sections.forEach((section, index) => {
      if (section.offsetTop <= scrollPos) {
        currentIndex = index;
      }
    });

    navLinks.forEach(link => link.classList.remove("active"));
    navLinks[currentIndex].classList.add("active");
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
});
