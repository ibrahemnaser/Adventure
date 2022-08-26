const themeModeIcon = document.querySelector(".theme-mode");

export function changeMode() {
  themeModeIcon.addEventListener("click", () => {
    themeModeIcon.classList.toggle("toggle-mode");
    document.querySelector(":root").classList.toggle("light-mode");
  });
}
