const colorGear = document.querySelector(".color-switcher .gear");
const colorSwitcherSection = document.querySelector(".color-switcher");

const colorsBellete = document.querySelectorAll(
  ".color-switcher .colors > div"
);

export function switchColor() {
  colorGear.addEventListener("click", () => {
    colorSwitcherSection.classList.toggle("show");
  });
}

export function setPrimaryColor() {
  const storageColor = localStorage.getItem("primaryColor");
  document.querySelector(":root").style.setProperty("--primary", storageColor);

  colorsBellete.forEach((ele) => {
    ele.addEventListener("click", () => {
      const color = ele.getAttribute("data-color");
      localStorage.setItem("primaryColor", color);
      document.querySelector(":root").style.setProperty("--primary", color);
    });
  });
}
