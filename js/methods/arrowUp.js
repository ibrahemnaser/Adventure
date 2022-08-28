const arrowUp = document.querySelector(".arrow-up");

export function getPageUp() {
  arrowUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}
