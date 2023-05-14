document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  const footerCopyright = document.querySelector("#footer-current-year");
  footerCopyright.textContent = date.getFullYear();
});

document.addEventListener("scroll", () => {
  let headerWrapper = document.querySelector(".header-menu-wrapper");
  if (window.scrollY > 20) {
    headerWrapper.classList.add("header-menu-wrapper-scroll");
  } else {
    headerWrapper.classList.remove("header-menu-wrapper-scroll");
  }
});
