const navbar = document.getElementById("nav");

function stickyNav() {
  if (window.scrollY >= navbar.offsetTop) {
    document.body.style.paddingTop = navbar.offsetHeight + "px";
    navbar.classList.add("sticky");
  } else if (window.scrollY <= navbar.offsetTop) {
    document.body.style.paddingTop = 0;
    navbar.classList.remove("sticky");
  }
  console.log(window.scrollY, navbar.offsetHeight);
}

window.addEventListener("scroll", stickyNav);
