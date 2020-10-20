const navbar = document.getElementById("nav");
const about = document.querySelector(".about");
const offset = navbar.offsetTop;

function stickyNav() {
  if (window.scrollY >= navbar.offsetTop + navbar.offsetHeight - 1) {
    navbar.classList.add("sticky");
  } else if (window.screen.height - window.scrollY == offset) {
    about.style.paddingTop = 0;
    navbar.classList.remove("sticky");
  }
  console.log(window.scrollY, navbar.offsetTop);
  console.log(window.screen.height);
}

window.addEventListener("scroll", stickyNav);
