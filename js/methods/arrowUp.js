const arrowUp = document.querySelector(".arrow-up");

export function getPageUp() {
  window.addEventListener("scroll", () => {
    if (scrollY >= 500) {
      arrowUp.classList.add("show");
    }
    if (scrollY == 0) {
      arrowUp.classList.remove("show");
    }
  });
  arrowUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}
