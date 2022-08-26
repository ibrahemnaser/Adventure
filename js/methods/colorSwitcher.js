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
  colorsBellete.forEach((ele) => {
    ele.addEventListener("click", () => {
      const color = ele.getAttribute("data-color");
      document.querySelector(":root").style.setProperty("--primary", color);
    });
  });
}
