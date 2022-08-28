const themeModeIcon = document.querySelector(".theme-mode");

export function changeMode() {
  let dark = true;
  if (localStorage.getItem("mode") === "light") {
    themeModeIcon.classList.add("toggle-mode");
    document.querySelector(":root").classList.add("light-mode");
    dark = false;
  }
  themeModeIcon.addEventListener("click", () => {
    themeModeIcon.classList.toggle("toggle-mode");
    document.querySelector(":root").classList.toggle("light-mode");
    if (dark) {
      localStorage.setItem("mode", "light");
      dark = false;
    } else {
      localStorage.setItem("mode", "dark");
      dark = true;
    }
  });
}
