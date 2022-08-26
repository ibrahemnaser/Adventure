const toggler = document.querySelector("header nav .toggler");
const navLink = document.querySelector("header nav .links");

export function isToggled() {
  toggler.addEventListener("click", () => {
    toggler.classList.toggle("toggled");
    navLink.classList.toggle("show");
  });
}
