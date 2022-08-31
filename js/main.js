// import functions
import { isToggled } from "./methods/toggler.js";
import { isActive } from "./methods/active.js";
import {
  switchColor,
  setPrimaryColor,
} from "./methods/colorSwitcher.js";
import { changeMode } from "./methods/themeMode.js";
import { toggleCarousel } from "./methods/shareCarousel.js";
import { setOpacityPlans } from "./methods/plans.js";
import { getPageUp } from "./methods/arrowUp.js";
import { handleLoading } from "./methods/loading.js";

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
