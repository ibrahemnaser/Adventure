const dots = document.querySelectorAll(".offer-carousel .dots span");
const imgs = document.querySelectorAll(".offer-carousel .carousel-img");

export function toggleCarousel() {
  dots.forEach((ele, indx) => {
    ele.addEventListener("click", () => {
      clearInterval(repeat);
      setActive(indx);
    });
  });
  let i = 0;
  let repeat;
  repeat = setInterval(() => {
    setActive(i);
    i++;
    if (i > imgs.length - 1) {
      i = 0;
    } else if (i < 0) {
      i = imgs.length - 1;
    }
  }, 2000);
}

function setActive(indx) {
  dots.forEach((ele) => {
    delete ele.dataset.active;
  });
  imgs.forEach((ele) => {
    delete ele.dataset.active;
  });
  dots[indx].dataset.active = true;
  imgs[indx].dataset.active = true;
}

// function createInterval(i, repeat) {
//   repeat = setInterval(() => {
//     setActive(i);
//     i++;
//     if (i > imgs.length - 1) {
//       i = 0;
//     } else if (i < 0) {
//       i = imgs.length - 1;
//     }
//   }, 2000);
// }
