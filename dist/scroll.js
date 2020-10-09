const navbar = document.getElementById("nav");
const about = document.getElementById("about");

function stickyNav() {
  if (window.scrollY >= navbar.offsetTop) {
    about.paddingTop = navbar.offsetHeight + "px";
    navbar.classList.add("sticky");
  } else if (window.scrollY <= navbar.offsetTop) {
    about.paddingTop = 0;
    navbar.classList.remove("sticky");
  }
  console.log(window.scrollY, navbar.offsetHeight);
}

window.addEventListener("scroll", stickyNav);
