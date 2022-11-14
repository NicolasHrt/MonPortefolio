export function burgerMenu() {
  addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu li");
    console.log(navLinks);

    burger.addEventListener("click", () => {
      nav.classList.toggle("hidden");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `rightFadeIn 0.5s ease forwards ${index / 7}s`;
        }
      }
      );
    });
  });
}
