const plans = document.querySelectorAll(".plans .single-plan");

export function setOpacityPlans() {
  plans.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
      plans[1].classList.remove("set-opacity");
      ele.classList.add("set-opacity");
    });
    ele.addEventListener("mouseleave", () => {
      ele.classList.remove("set-opacity");
      plans[1].classList.add("set-opacity");
    });
  });
}
