const anchorLinks = document.querySelectorAll("header nav .links a");

export function isActive() {
  anchorLinks.forEach((ele) => {
    ele.addEventListener("click", () => {
      anchorLinks.forEach((ele) => {
        ele.classList.remove("active");
      });
      ele.classList.add("active");
    });
  });
}
