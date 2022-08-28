// import functions
import { isToggled } from "Adventure/js/methods/toggler.js";
import { isActive } from "Adventure/js/methods/active.js";
import {
  switchColor,
  setPrimaryColor,
} from "Adventure/js/methods/colorSwitcher.js";
import { changeMode } from "Adventure/js/methods/themeMode.js";
import { toggleCarousel } from "Adventure/js/methods/shareCarousel.js";
import { setOpacityPlans } from "Adventure/js/methods/plans.js";
import { getPageUp } from "Adventure/js/methods/arrowUp.js";
import { handleLoading } from "Adventure/js/methods/loading.js";

// implement fuctions
isToggled();
isActive();
switchColor();
setPrimaryColor();
changeMode();
toggleCarousel();
setOpacityPlans();
getPageUp();
handleLoading();
